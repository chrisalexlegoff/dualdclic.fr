import Layout from "../components/Layout"
import React from "react"
import EntetePrestations from "../components/prestation/entete-prestation"
import Expertise from "../components/prestation/expertise"
import Methodologie from "../components/prestation/methodologie"
import { fetcher } from "../api/backend"
import {
  URL_API_HAMBURGER,
  URL_API_PRESTATIONS,
  URL_API_SCROLLTOP,
  URL_API_LOGOS,
  URL_API_FOOTER,
  URL_API_HOME,
} from "../api/url"

export default function Prestations({
  seo,
  logo,
  hamburger,
  footer,
  header,
  expertise,
  methodologie,
  scrollTop,
  mission,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      seo={seo}
    >
      <div id="prestation">
        <EntetePrestations header={header} />
        <Expertise expertise={expertise} />
        <Methodologie methodologie={methodologie} mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const prestations = await fetcher(URL_API_PRESTATIONS)
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: prestations.data.attributes.header,
      mission: home.data.attributes.mission,
      expertise: prestations.data.attributes.expertise,
      methodologie: prestations.data.attributes.methodologie,
      seo: prestations.data.attributes.seo,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
