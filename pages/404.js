import Layout from "../components/Layout"
import React from "react"
import ErrorPage from "../components/error-page/error-page"
import { fetcher } from "../api/backend"
import {
  URL_API_ERROR_PAGE,
  URL_API_FOOTER,
  URL_API_HAMBURGER,
  URL_API_LOGOS,
  URL_API_SCROLLTOP,
} from "../api/url"

export default function Error404({
  titrePage,
  logo,
  hamburger,
  footer,
  errorPage,
  scrollTop,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <ErrorPage errorPage={{ errorPage }} />
    </Layout>
  )
}

export async function getStaticProps() {
  const errorPage = await fetcher(URL_API_ERROR_PAGE)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      errorPage: errorPage.data.attributes,
      titrePage: errorPage.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
