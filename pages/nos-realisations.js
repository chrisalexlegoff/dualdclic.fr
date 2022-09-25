import Layout from "../components/Layout"
import React from "react"
import EnteteRealisations from "./../components/realisations/entete-realisations"
import RealisationsTab from "../components/realisations/realisations"
import Mission from "./../components/realisations/mission"
import { fetcher } from "./../api/backend"
import {
  URL_API_HOME,
  URL_API_REALISATIONS,
  URL_API_LOGOS,
  URL_API_HAMBURGER,
  URL_API_FOOTER,
  URL_API_SCROLLTOP,
} from "./../api/url"

export default function Realisations({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  realisations,
  scrollTop,
  mission,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <div id="realisation">
        <EnteteRealisations header={header} />
        <RealisationsTab realisations={realisations} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const realisations = await fetcher(URL_API_REALISATIONS)
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: realisations.data.attributes.header,
      mission: home.data.attributes.mission,
      realisations: realisations.data.attributes.realisations,
      titrePage: realisations.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
