import Link from "next/link"
import React from "react"
import { useState, useEffect } from "react"
import LazyImage from "./../lib/lazy-images"
import { useRouter } from "next/router"

export const Navbar = ({ logo, hamburger }) => {
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
    if (path == "/" || path == "/contact") {
      let numberDesktop = 3
      let numberMobile = 5
      let numberHamburger = 2
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (path == "/about" || path == "/demander-un-devis") {
      let numberDesktop = 0
      let numberMobile = 4
      let numberHamburger = 3
      return { numberDesktop, numberMobile, numberHamburger }
    } else if (path == "/nos-prestations") {
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
    "lg:inline-flex lg:w-auto w-full lg:px-3 px-0 lg:py-2 py-[1.8rem] lg:border-none border-b-[0.39px] border-noir-paragraphe items-center justify-center"

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
        className="hidden lg:block opacity-0 shadow-[0px_2px_20px_rgba(0,0,0,0.14)] transition-opacity bg-nav p-3 fixed w-full z-10"
      >
        <div className="max-w-9xl mx-16 flex items-center flex-wrap">
          <Link href="/" className="">
            <a className="p-2 mr-4 w-[200px]">{newLogoDesktop}</a>
          </Link>

          <div className="li inline-flex flex-row ml-auto w-auto items-center h-auto">
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about"
                    ? `${classNormal} active`
                    : classNormal
                }
              >
                {router.pathname == "/about" ? "{ A propos }" : "A propos"}
              </a>
            </Link>
            <Link href="/nos-prestations">
              <a
                className={
                  router.pathname == "/nos-prestations"
                    ? `${classNormal} active`
                    : classNormal
                }
              >
                {router.pathname == "/nos-prestations"
                  ? "{ Nos prestations }"
                  : "Nos prestations"}
              </a>
            </Link>
            <Link href="/nos-realisations">
              <a
                className={
                  router.pathname == "/nos-realisations"
                    ? `${classNormal} active`
                    : classNormal
                }
              >
                {router.pathname == "/nos-realisations"
                  ? "{ Nos réalisations }"
                  : "Nos réalisations"}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.pathname == "/contact"
                    ? `${classNormal} active`
                    : classNormal
                }
              >
                {router.pathname == "/contact"
                  ? "{ Nous contacter }"
                  : "Nous contacter"}
              </a>
            </Link>
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
          </div>
        </div>
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
              <Link href="/about">
                <a
                  className={
                    router.pathname == "/about"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/about" ? "{ A propos }" : "A propos"}
                </a>
              </Link>
              <Link href="/nos-prestations">
                <a
                  className={
                    router.pathname == "/nos-prestations"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/nos-prestations"
                    ? "{ Nos prestations }"
                    : "Nos prestations"}
                </a>
              </Link>
              <Link href="/nos-realisations">
                <a
                  className={
                    router.pathname == "/nos-realisations"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/nos-realisations"
                    ? "{ Nos réalisations }"
                    : "Nos réalisations"}
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact"
                      ? `${classNormal} active`
                      : classNormal
                  }
                >
                  {router.pathname == "/contact"
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Home {
        logo {
          data {
            id
            attributes {
              logo {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
        hamburger {
          data {
            id
            attributes {
              hamburger {
                data {
                  attributes {
                    name
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  return {
    props: {
      logo: data.logo.data.attributes.logo,
      hamburger: data.hamburger.data.attributes.hamburger,
    },
  }
}
