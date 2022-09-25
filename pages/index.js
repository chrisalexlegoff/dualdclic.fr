import AccueilEntete from "../components/accueil/accueil-entete"
import Layout from "./../components/Layout"
import React from "react"
import Nous from "./../components/accueil/nous"
import Projet from "../components/accueil/projet"
import Pourquoi from "../components/accueil/pourquoi"
import Valeurs from "../components/accueil/valeurs"
import Realisations from "../components/accueil/realisations"
import Services from "../components/accueil/services"
import Mission from "../components/accueil/mission"
import { fetcher } from "../api/backend"
import {
  URL_API_HAMBURGER,
  URL_API_HOME,
  URL_API_SCROLLTOP,
  URL_API_LOGOS,
  URL_API_FOOTER,
} from "../api/url"

export default function Home({
  titrePage,
  header,
  nous,
  projet,
  pourquoi,
  valeurs,
  realisations,
  services,
  mission,
  logo,
  hamburger,
  footer,
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
      <div id="accueil">
        <AccueilEntete header={header} />
        <Nous nous={nous} />
        <Projet projet={projet} />
        <Pourquoi pourquoi={pourquoi} />
        <Valeurs valeurs={valeurs} />
        <Realisations realisations={realisations} />
        <Services services={services} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: home.data.attributes.header,
      nous: home.data.attributes.nous,
      projet: home.data.attributes.projet,
      pourquoi: home.data.attributes.pourquoi,
      valeurs: home.data.attributes.valeurs,
      realisations: home.data.attributes.realisations,
      services: home.data.attributes.services,
      mission: home.data.attributes.mission,
      titrePage: home.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
