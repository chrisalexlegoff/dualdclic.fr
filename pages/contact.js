import React from "react"
import Layout from "../components/Layout"
import EnteteContact from "./../components/contact/entete-contact"
import ContactForm from "./../components/contact/contact-form"
import Informations from "../components/contact/informations"
import {
  URL_API_CONTACT,
  URL_API_FOOTER,
  URL_API_HAMBURGER,
  URL_API_HOME,
  URL_API_LOGOS,
  URL_API_SCROLLTOP,
} from "../api/url"
import { fetcher } from "../api/backend"

export default function Contact({
  titrePage,
  logo,
  hamburger,
  footer,
  header,
  contact,
  informations,
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
      <div id="contact">
        <EnteteContact header={header} />
        <ContactForm contact={contact} />
        <Informations informations={informations} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const contact = await fetcher(URL_API_CONTACT)
  const home = await fetcher(URL_API_HOME)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      header: contact.data.attributes.header,
      contact: contact.data.attributes.contact,
      informations: contact.data.attributes.informations,
      titrePage: contact.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
