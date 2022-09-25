import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
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
  return (
    <>
      <Head>
        <title>{titrePageEncours}</title>
      </Head>

      <Nav logo={logo} hamburger={hamburger} />
      <ScrollButton scrollTop={scrollTop} />
      <main className="select-none">{children}</main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout
