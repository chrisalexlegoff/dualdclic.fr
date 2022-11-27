import Link from "next/link"
import React from "react"
import { useState, useEffect } from "react"
import LazyImage from "./../lib/lazy-images"
import { useRouter } from "next/router"
import { ReadingProgress } from "./progress-bar/progress-bar"

export const Navbar = ({ logo, hamburger, target }) => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(0)

  const router = useRouter()

  function getLogo(path) {
    let regex = new RegExp("(#)")
    let regexQuery = new RegExp("(\\?)")
    if (regex.test(path)) {
      path = path.split("#")[0]
    } else if (regexQuery.test(path)) {
      path = path.split("?")[0]
    }
    if (path == "/" || path == "/contacter-freelance-nord") {
      let numberDesktop = 3
      let numberMobile = 5
      let numberHamburger = 2
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (
      path == "/webdesign-developpement-freelance-nord" ||
      path == "/demander-un-devis"
    ) {
      let numberDesktop = 0
      let numberMobile = 4
      let numberHamburger = 3
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (path == "/prestation-web-print") {
      let numberDesktop = 2
      let numberMobile = 1
      let numberHamburger = 1
      return { numberDesktop, numberMobile, numberHamburger }
    } else {
      let numberDesktop = 3
      let numberMobile = 5
      let numberHamburger = 2
      return { numberDesktop, numberMobile, numberHamburger }
    }
  }

  const newLogoDesktop = LazyImage(
    logo.data[getLogo(router.asPath).numberDesktop].attributes,
    "lazy"
  )
  const newLogoMobile = LazyImage(
    logo.data[getLogo(router.asPath).numberMobile].attributes,
    "lazy"
  )
  const newHamburger = LazyImage(
    hamburger.data[getLogo(router.asPath).numberHamburger].attributes,
    "lazy",
    "35px"
  )

  const newCloseMenu = LazyImage(hamburger.data[0].attributes, "lazy", "35px")

  const handleClick = () => {
    setActive(!active)
    setOpen(!open)
  }

  const classNormal =
    "lg:inline-flex lg:w-auto w-full lg:pr-3 px-0 lg:py-2 py-[1.8rem] lg:border-none border-b-[0.39px] border-noir-paragraphe items-center justify-center"

  useEffect(() => {
    const scrollNav = () => {
      const nav = document.getElementById("nav")

      setScroll(window.scrollY)
      if (scroll > 50) {
        if (nav) nav.style.opacity = "1"
      } else {
        if (nav) nav.style.opacity = "0"
      }
    }
    window.addEventListener("scroll", scrollNav)

    return () => {
      window.removeEventListener("scroll", scrollNav)
    }
  }, [scroll])

  return (
    <>
      {/* Nav Desktop */}
      <nav
        id="nav"
        className="hidden lg:block opacity-0 shadow-[0px_2px_20px_rgba(0,0,0,0.14)] transition-opacity bg-nav fixed w-full z-10"
      >
        <div className="max-w-9xl mx-8 xl:mx-16 my-2 flex items-center flex-wrap flex-col xl:flex-row">
          <Link href="/" className="">
            <a className="p-2 mr-4 w-[200px]">{newLogoDesktop}</a>
          </Link>

          <div className="li inline-flex flex-row xl:ml-auto w-auto items-center h-auto">
            <Link href="/webdesign-developpement-freelance-nord">
              <a
                className={
                  router.pathname == "/webdesign-developpement-freelance-nord"
                    ? `${classNormal} active`
                    : `${classNormal}`
                }
              >
                {router.pathname == "/webdesign-developpement-freelance-nord"
                  ? "{ A propos }"
                  : "A propos"}
              </a>
            </Link>
            <Link href="/prestation-web-print">
              <a
                className={
                  router.pathname == "/prestation-web-print"
                    ? `${classNormal} active lg:pl-10`
                    : `${classNormal} lg:pl-10`
                }
              >
                {router.pathname == "/prestation-web-print"
                  ? "{ Nos prestations }"
                  : "Nos prestations"}
              </a>
            </Link>
            <Link href="/projet-internet-et-imprimable">
              <a
                className={
                  router.pathname == "/projet-internet-et-imprimable"
                    ? `${classNormal} active lg:pl-10`
                    : `${classNormal} lg:pl-10`
                }
              >
                {router.pathname == "/projet-internet-et-imprimable"
                  ? "{ Nos réalisations }"
                  : "Nos réalisations"}
              </a>
            </Link>
            <Link href="/contacter-freelance-nord">
              <a
                className={
                  router.pathname == "/contacter-freelance-nord"
                    ? `${classNormal} active lg:pl-10`
                    : `${classNormal} lg:pl-10`
                }
              >
                {router.pathname == "/contacter-freelance-nord"
                  ? "{ Nous contacter }"
                  : "Nous contacter"}
              </a>
            </Link>
            <Link href="/demander-un-devis">
              <a
                className={
                  router.pathname == "/demander-un-devis"
                    ? `${classNormal} active lg:pl-10`
                    : `${classNormal} lg:pl-10`
                }
              >
                {router.pathname == "/demander-un-devis"
                  ? "{ Demander un devis }"
                  : "Demander un devis"}
              </a>
            </Link>
          </div>
        </div>
        <ReadingProgress target={target} />
      </nav>
      {/* Nav mobile */}
      <nav
        id="navMobile"
        className={`${
          active ? "bg-nav h-full" : "bg-transparent"
        } block lg:hidden transition-opacity p-3 fixed w-full z-10`}
      >
        <div className="max-w-9xl flex items-center flex-wrap">
          <Link href="/" className="">
            <a className={`${active ? "" : "hidden"} max-w-[200px] p-2 mr-4`}>
              {newLogoMobile}
            </a>
          </Link>

          <button className="inline-flex p-3 ml-auto" onClick={handleClick}>
            {!open ? newHamburger : newCloseMenu}
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div className={`${active ? "" : "hidden"} w-full h-full`}>
            <ReadingProgress target={target} />
            <div className="px-3 pt-[2.2rem] li w-full items-start  flex flex-col">
              <Link href="/demander-un-devis">
                <a
                  className={
                    router.pathname == "/demander-un-devis"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/demander-un-devis"
                    ? "{ Demander un devis }"
                    : "Demander un devis"}
                </a>
              </Link>
              <Link href="/webdesign-developpement-freelance-nord">
                <a
                  className={
                    router.pathname == "/webdesign-developpement-freelance-nord"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/webdesign-developpement-freelance-nord"
                    ? "{ A propos }"
                    : "A propos"}
                </a>
              </Link>
              <Link href="/prestation-web-print">
                <a
                  className={
                    router.pathname == "/prestation-web-print"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/prestation-web-print"
                    ? "{ Nos prestations }"
                    : "Nos prestations"}
                </a>
              </Link>
              <Link href="/projet-internet-et-imprimable">
                <a
                  className={
                    router.pathname == "/projet-internet-et-imprimable"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/projet-internet-et-imprimable"
                    ? "{ Nos réalisations }"
                    : "Nos réalisations"}
                </a>
              </Link>
              <Link href="/contacter-freelance-nord">
                <a
                  className={
                    router.pathname == "/contacter-freelance-nord"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/contacter-freelance-nord"
                    ? "{ Nous contacter }"
                    : "Nous contacter"}
                </a>
              </Link>
              <Link href="/mentions-legales">
                <a
                  className={
                    router.pathname == "/mentions-legales"
                      ? `${classNormal} active border-none`
                      : `${classNormal} border-none`
                  }
                >
                  {router.pathname == "/mentions-legales"
                    ? "{ Mentions légales - paramètres des cookies }"
                    : "Mentions légales - paramètres des cookies"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
