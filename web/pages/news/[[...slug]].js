import groq from 'groq'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import client from '@/lib/sanity-client'
import Layout from '@/components/layout'
import RenderSections from '@/components/render-sections'
import { getSlugVariations, slugParamToPath } from '@/lib/urls'
import {newsDetailsQuery} from "@/lib/queries";
import { getClient } from '@/lib/sanity.server'
import { usePreviewSubscription } from '@/lib/sanity'
import { pageContentQuery } from '@/lib/queries'

export default function Page(megaprops) {
  
  const {props, preview, data, siteSettings, menus} = megaprops;
  const stickyHeader = false;
  const title =" "
  // let {
  //   title = 'Missing title',
  //   page:{content = []},
  //   slug,
  //   stickyHeader,
  //   siteSettings,  
  //   menus // Crear bloque en cms para permitir links internos,externos y crear un provider donde guardar los valores del cms y luego un hook para consumirlo desde ahi con facilidad.
  // } = props;

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData?.page, preview)

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


async function fulfillSectionQueries(page, slug) {

  if (!page?.page?.content) {
    return page
  }

  const sectionsWithQueryData = await Promise.all(

    page.page.content.map(async (section) => {

      if(section._type == "newsContent"){
        section.query = newsDetailsQuery(slug);
      }

      if(section.news){
        
        if(Array.isArray(section.news)){

          await Promise.all(section.news.map(async (news) => {
            const queryData = await client.fetch(groq`*[_type == "newsPT" && _id == "${news._ref}" ][0]{
              title,description,slug,image
            }`)
            news.query = queryData;
          }

          ))

        }else{
          const queryData = await client.fetch(groq`*[_type == "newsPT" && _id == "${section.news._ref}" ][0]{
            title,description,slug,image
          }`)
          section.news.query = queryData;
        }

      }


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

  const routes = await client.fetch(groq`*[_type == 'newsPT']{slug}`);
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
  const request = await client.fetch(groq`*[_type == "route"] {_id, slug {current}} `);
  return request;
}

async function getSiteConfig(){
  const siteSettings = await client.fetch(groq`*[_type == "siteSettings" && site == "noble33" ][0]{...}`);
  return siteSettings;
}

async function getPageSections(slug){

  const request = await client.fetch(
    groq`
      *[_type == "newsPT" && slug.current in $possibleSlugs][0]{
        _id,
        title,
        content
      }
    `,
    { possibleSlugs: getSlugVariations(slug) }
  )
  
  return request
}

export const getStaticProps = async ({ params, preview = false }) => {

  const slug = slugParamToPath(params?.slug);
  const client = getClient(preview)
  const query =  groq`
  *[_type == "newsPT" && slug.current in $possibleSlugs][0]{
    _id,
    title,
    content
  }
  `
  const queryParams = { possibleSlugs: getSlugVariations(slug) }
  let data = await client.fetch(query, queryParams)
  let [siteSettings, menus] = await Promise.all([getSiteConfig(), getMenus()])
  let page = filterDataToSingleItem(data, preview)
  page = await fulfillSectionQueries(page,slug)

  page.slug = slug;
  page.query = query;
  page.queryParams = queryParams;

  return {
    props:{
      props: { ...data, siteSettings, menus } || {},
      data: {page, query, queryParams},
      siteSettings,
      menus,
      preview
    }
  }
  
}
