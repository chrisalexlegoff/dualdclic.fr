import React from "react"
import Layout from "../components/Layout"
import EnteteDevis from "./../components/demander-un-devis/entete-devis"
import Preambule from "../components/demander-un-devis/preambule"
import Questionnaire from "./../components/demander-un-devis/questionnaire"
import Mission from "../components/demander-un-devis/mission"
import { fetcher } from "./../api/backend"
import {
  URL_API_DEVIS,
  URL_API_HAMBURGER,
  URL_API_HOME,
  URL_API_SCROLLTOP,
} from "../api/url"
import { URL_API_LOGOS, URL_API_FOOTER } from "./../api/url"

const demanderUnDevis = ({
  logo,
  hamburger,
  footer,
  titrePage,
  header,
  preambule,
  devis,
  mission,
  scrollTop,
}) => {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <div id="devis">
        <EnteteDevis header={header} />
        <Preambule preambule={preambule} />
        <Questionnaire devis={devis} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export default demanderUnDevis

export async function getStaticProps() {
  const devis = await fetcher(URL_API_DEVIS)
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: devis.data.attributes.header,
      mission: home.data.attributes.mission,
      preambule: devis.data.attributes.preambule,
      devis: devis.data.attributes.devis,
      titrePage: devis.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
