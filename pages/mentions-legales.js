import Layout from "../components/Layout"
import React from "react"
import { fetcher } from "../api/backend"
import {
  URL_API_FOOTER,
  URL_API_HAMBURGER,
  URL_API_LOGOS,
  URL_API_MENTIONS_LEGALES,
  URL_API_SCROLLTOP,
} from "../api/url"
import MentionsLegales from "../components/mentions-legales/mentions-legales"

export default function mentionsLegales({
  logo,
  hamburger,
  footer,
  scrollTop,
  seo,
  mentionsLegales,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      seo={seo}
    >
      <div id="mentions-legales">
        <MentionsLegales mentionsLegales={mentionsLegales} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const mentionsLegales = await fetcher(URL_API_MENTIONS_LEGALES)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      mentionsLegales: mentionsLegales.data.attributes,
      seo: mentionsLegales.data.attributes.seo,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
