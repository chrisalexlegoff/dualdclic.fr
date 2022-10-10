import Head from "next/head"
import React from "react"
import Consent from "../lib/consent"
import Footer from "./Footer"
import Nav from "./Nav"
import { ReadingProgress } from "./progress-bar/progress-bar"
import ScrollButton from "./ScrollTop/scrollButton"

const Layout = ({
  children,
  titrePage,
  logo,
  hamburger,
  footer,
  scrollTop,
}) => {
  const titrePageEncours = `DualDclic | ${titrePage}`
  const target = React.createRef()
  return (
    <div ref={target}>
      <Head>
        <title>{titrePageEncours}</title>
      </Head>
      <Nav logo={logo} hamburger={hamburger} target={target} />
      <ScrollButton scrollTop={scrollTop} />
      <ReadingProgress target={target} />
      <Consent />
      <main className="select-none">{children}</main>
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
