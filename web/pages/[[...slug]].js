import groq from 'groq'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import client from '@/lib/sanity-client'
import Layout from '@/components/layout'
import RenderSections from '@/components/render-sections'
import { getSlugVariations, slugParamToPath } from '@/lib/urls'
import { getClient } from '@/lib/sanity.server'
import { usePreviewSubscription } from '@/lib/sanity'
import { pageContentQuery } from '@/lib/queries'

const ExitPreviewButton = dynamic(() =>
  import('@/components/exit-preview-button')
)

export default function Page(props) {

  const { preview, data, siteSettings, menus } = props;
  const stickyHeader = false;

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData?.page, preview);
  const title = page?.title ?? "";

  return (    
    <Layout menus={menus} siteSettings={siteSettings} stickyHeader={stickyHeader}>
      <NextSeo
        title={title}
      />
      {page?.content && <RenderSections sections={page?.content} />}
      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
 function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

async function fulfillSectionQueries(page) {

  if (!page?.page?.content) {
    return page
  }

  const sectionsWithQueryData = await Promise.all(

    page.page.content.map(async (section) => {
      if (section.query) {
        const queryData = await client.fetch(groq`${section.query}`)

        return { ...section, query: queryData }
      } else {
        return section
      }
    })
  )

  return { ...page, content: sectionsWithQueryData }

}

export async function getStaticPaths() {

  const routes = await client.fetch(groq`*[_type == 'route']{slug}`);
  const paths = routes.map(({ slug }) => ({
    params: {
      slug: slug.current === '/' ? false : [slug.current],
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
  
}

async function getMenus(){
  const request = await getClient().fetch(groq`*[_type == "route"] {_id, slug {current}} `);
  return request;
}

async function getSiteConfig(){
  const siteSettings = await getClient().fetch(groq`*[_type == "siteSettings" && site == "noble33" ][0]{...}`);
  return siteSettings;
}

async function getPageSections(slug){

  const request = await getClient().fetch(
    groq`
      *[_type == "route" && slug.current in $possibleSlugs][0]{
        page -> {...}
      }
    `,
    { possibleSlugs: getSlugVariations(slug) }
  )

  return request?.page;
}

export const getStaticProps = async ({ params, preview = false }) => {

  const slug = slugParamToPath(params?.slug)
  const client = getClient(preview)
  const query =  groq`
    *[_type == "route" && slug.current in $possibleSlugs][0]{
      page -> {
        ${pageContentQuery}
      }
    }
  `
  const queryParams = { possibleSlugs: getSlugVariations(slug) }
  let data = await client.fetch(query, queryParams)
  let [siteSettings, menus] = await Promise.all([getSiteConfig(), getMenus()])
  let page = filterDataToSingleItem(data, preview)
  page = await fulfillSectionQueries(page)
  page.slug = slug;
  page.query = query;
  page.queryParams = queryParams;
  
  return {
    props:{
      data: {page, query, queryParams},
      siteSettings,
      menus,
      preview
    }
  }
  
}
