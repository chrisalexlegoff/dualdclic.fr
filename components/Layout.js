import React from "react"
import Consent from "../lib/consent"
import Seo from "../lib/seo"
import StructuredData from "../lib/structured-data"
import Footer from "./Footer"
import Nav from "./Nav"
import { ReadingProgress } from "./progress-bar/progress-bar"
import ScrollButton from "./ScrollTop/scrollButton"

const Layout = ({ children, seo, logo, hamburger, footer, scrollTop }) => {
  const target = React.createRef()
  return (
    <div ref={target}>
      <Seo seo={seo} />
      <StructuredData />
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
