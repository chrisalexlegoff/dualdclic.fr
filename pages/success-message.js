import Layout from "./../components/Layout"
import React from "react"
import { fetcher } from "../api/backend"
import SuccessForm from "./../components/success-form/success-form"
import {
  URL_API_SUCCESS_FORM,
  URL_API_FOOTER,
  URL_API_HAMBURGER,
  URL_API_LOGOS,
  URL_API_SCROLLTOP,
} from "../api/url"

export default function successMessage({
  logo,
  hamburger,
  footer,
  scrollTop,
  successForm,
  titrePage,
}) {
  return (
    <Layout
      scrollTop={scrollTop}
      logo={logo}
      hamburger={hamburger}
      footer={footer}
      titrePage={titrePage}
    >
      <div id="success-message">
        <SuccessForm successForm={successForm} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const successForm = await fetcher(URL_API_SUCCESS_FORM)
  const logos = await fetcher(URL_API_LOGOS)
  const hamburger = await fetcher(URL_API_HAMBURGER)
  const footer = await fetcher(URL_API_FOOTER)
  const scrollTop = await fetcher(URL_API_SCROLLTOP)
  return {
    props: {
      successForm: successForm.data.attributes,
      titrePage: successForm.data.attributes.titrePage,
      logo: logos.data.attributes.logo,
      hamburger: hamburger.data.attributes.hamburger,
      footer: footer.data.attributes,
      scrollTop: scrollTop.data.attributes,
    },
  }
}
