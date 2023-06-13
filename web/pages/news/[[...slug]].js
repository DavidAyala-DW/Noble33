import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
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
  const {page: {title, seo_title, description = "", description_seo, openGraphImage}} = data;
  const builder = imageUrlBuilder(getClient(preview))
  const stickyHeader = false;

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview);

  let seo_title_value = seo_title ?? title;

  return (    
    <Layout menus={menus} siteSettings={siteSettings} stickyHeader={stickyHeader}>
      <NextSeo
        title={seo_title_value}
        description={description_seo ?? description}

        {...(openGraphImage ? {openGraph: 
          {
            images: [
              {
                url: builder.image(openGraphImage).width(1200).height(630).url(),
                width: 1200,
                height: 630,
                alt: title,
              },
            ]
          }

        } : {})}
        
      />
      <main
        className='flex flex-col w-full'
        id="main-content"
      >
      {page?.content && <RenderSections sections={page?.content} />}
      </main>      
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


  let actual_page;
  actual_page = page.page;


  if (!page?.page?.content) {
    actual_page = page;
  }

  const sectionsWithQueryData = await Promise.all(
    
    actual_page.content.map(async (section) => {

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
  const parsedRoutes = routes.filter(route => route.slug != null);
  const paths = parsedRoutes.map(({ slug }) => ({    
    params: {
      slug: slug?.current === '/' ? false : [slug?.current],
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
    seo_title,
    description,
    description_seo,
    openGraphImage,
    content
  }
  `
  const queryParams = { possibleSlugs: getSlugVariations(slug) }
  let data = await client.fetch(query, queryParams)
  let [siteSettings, menus] = await Promise.all([getSiteConfig(), getMenus()])
  let page = filterDataToSingleItem(data, preview);
  page = await fulfillSectionQueries(page,slug);

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
