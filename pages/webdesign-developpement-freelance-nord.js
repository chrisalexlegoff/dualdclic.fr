import Layout from "../components/Layout"
import React from "react"
import AccueilAbout from "../components/a-propos/accueil-a-propos"
import Binome from "../components/a-propos/binome"
import IntroPresentation from "../components/a-propos/introPresentation"
import Presentation from "../components/a-propos/presentation"
import Mission from "../components/a-propos/mission"
import { fetcher } from "../api/backend"
import {
  URL_API_ABOUT,
  URL_API_FOOTER,
  URL_API_HAMBURGER,
  URL_API_HOME,
  URL_API_LOGOS,
  URL_API_SCROLLTOP,
} from "../api/url"

export default function About({
  seo,
  logo,
  hamburger,
  footer,
  header,
  binome,
  introPresentation,
  presentation,
  mission,
  scrollTop,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      seo={seo}
    >
      <div id="a-propos">
        <AccueilAbout header={header} />
        <Binome binome={binome} />
        <IntroPresentation introPresentation={introPresentation} />
        <Presentation presentation={presentation} />
        <Mission mission={mission} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const about = await fetcher(URL_API_ABOUT)
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: about.data.attributes.header,
      binome: about.data.attributes.binome,
      introPresentation: about.data.attributes.introPresentation,
      presentation: about.data.attributes.presentation,
      mission: home.data.attributes.mission,
      seo: about.data.attributes.seo,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
