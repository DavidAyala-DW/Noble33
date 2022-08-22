import Head from 'next/head'
import groq from 'groq'
import { NextSeo } from 'next-seo'
import client from '@/lib/sanity-client'
import Layout from '@/components/layout'
import RenderSections from '@/components/render-sections'
import { getSlugVariations, slugParamToPath } from '@/lib/urls'

export default function Page({props}) {
  
  const {
    title = 'Missing title',
    content = [],
    slug,
  } = props

  return (    
    <Layout>
      <NextSeo
        title={title}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  )
}

async function fulfillSectionQueries(page) {
  if (!page.content) {
    return page
  }

  const sectionsWithQueryData = await Promise.all(
    page.content.map(async (section) => {
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
export const getStaticProps = async ({ params }) => {

  const slug = slugParamToPath(params?.slug)
  const request = await client.fetch(
    // Get the route document with one of the possible slugs for the given requested path
    groq`
      *[_type == "route" && slug.current in $possibleSlugs][0]{
        page -> {...}
      }
    `,
    { possibleSlugs: getSlugVariations(slug) }
  )

  let data = request?.page
  data = await fulfillSectionQueries(data)
  data.slug = slug;
  return {
    props:{
      props: { ...data} || {},
    }
  }
}
