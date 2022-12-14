import React from "react"
import LazyImage from "../lib/lazy-images"
import Link from "next/link"

const Footer = ({ footer }) => {
  const logo = LazyImage(footer.logo.data.attributes, "lazy", undefined, "")
  return (
    <>
      {" "}
      <div
        id="footer"
        className="pl-10 pr-16 hidden lg:block bg-footer shadow-[inset_0px_7px_12px_rgba(0,0,0,0.25)]"
      >
        <div className="max-w-9xl mx-auto grid lg:grid-col-2 xl:grid-col-3 auto-cols-fr auto-rows-fr justify-items-center lg:py-24 py-12">
          <div className="lg:col-start-1 lg:row-start-1 lg:col-span-1 w-3/4 flex h-[350px] flex-col text-center justify-between lg:m-4 m-12">
            <div className="mx-auto w-1/2">{logo}</div>{" "}
            <div
              className="h4 mx-auto uppercase"
              dangerouslySetInnerHTML={{ __html: footer.titre4 }}
            ></div>
            <div
              className="mx-auto"
              dangerouslySetInnerHTML={{ __html: footer.paragraphe }}
            ></div>
            {/* <div className="mx-auto w-full">
              <Link href="/demander-un-devis">
                <a>
                  <button className="group bg-transparent border-white  hover:border-vert w-2/3 lg:w-full h-20 mx-auto block rounded-lg border-2">
                    <span
                      dangerouslySetInnerHTML={{ __html: footer.button }}
                      className=" text-white group-hover:text-vert"
                    />
                  </button>
                </a>
              </Link>
            </div> */}
            <div
              className="mx-auto text-sm"
              dangerouslySetInnerHTML={{ __html: footer.copyright }}
            ></div>
          </div>
          <div className="nav hidden xl:flex xl:col-start-2 flex-col h-[350px] lg:m-4 m-12">
            {" "}
            <div
              className="uppercase text-center lg:text-left mb-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4bis }}
            ></div>
            <div className="li group flex flex-col lg:h-full h-[250px] justify-between text-center lg:text-left">
              {footer.nav.map((item) => (
                <Link key={item.id} href={item.lien}>
                  <a className="">{item.slug}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-start-2 xl:col-start-3 flex flex-col h-[350px] justify-between lg:m-4 m-12">
            {" "}
            <div>
              <div
                className="uppercase text-center lg:text-left mb-4"
                dangerouslySetInnerHTML={{ __html: footer.titre4tierce }}
              ></div>
              <div className="flex justify-center lg:justify-start">
                {footer.reseaux.map((item) => (
                  <a
                    key={item.id}
                    rel="noreferrer"
                    href={item.lien}
                    target="_blank"
                    className="group"
                  >
                    {LazyImage(
                      item.icon.data.attributes,
                      "lazy",
                      "50px",
                      undefined,
                      "lg:mr-4 lg:mx-0 mx-2 cursor-pointer block group-hover:hidden"
                    )}
                    {LazyImage(
                      item.iconHover.data.attributes,
                      "lazy",
                      "50px",
                      undefined,
                      "lg:mr-4 lg:mx-0 mx-2 cursor-pointer hidden group-hover:block"
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="mx-auto w-full">
              <Link href="/demander-un-devis">
                <a>
                  <button className="group bg-transparent border-white  hover:border-vert w-2/3 lg:w-full h-[3.4rem] mx-auto block rounded-lg border-2">
                    <span
                      dangerouslySetInnerHTML={{ __html: footer.button }}
                      className=" text-white group-hover:text-vert"
                    />
                  </button>
                </a>
              </Link>
            </div>
            <div className="">
              <div
                className="uppercase text-center lg:text-left mb-4"
                dangerouslySetInnerHTML={{ __html: footer.titre4quarto }}
              ></div>
              <p className="text-center lg:text-left">
                <a className="mail" href={`mailto:${footer.contact.mail}`}>
                  {footer.contact.mail}
                </a>{" "}
                ou{" "}
                <Link href="/contacter-freelance-nord">
                  <a className="underline contact">{footer.contact.lien}</a>
                </Link>
              </p>
              <p className="text-center lg:text-left">
                Tel: {footer.contact.tel}
              </p>
              <p className="text-center lg:text-left">
                {footer.contact.horaires}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer-mobile"
        className="block lg:hidden bg-footer shadow-[inset_0px_7px_12px_rgba(0,0,0,0.25)]"
      >
        <div className="mx-auto grid justify-items-center py-12 w-5/6">
          <div className="flex flex-col text-center justify-around">
            <div className="mx-auto">{logo}</div>
            <div
              className="h4 mx-auto uppercase my-4"
              dangerouslySetInnerHTML={{ __html: footer.titre4 }}
            ></div>
            <div
              className="mx-auto"
              dangerouslySetInnerHTML={{ __html: footer.paragraphe }}
            ></div>
          </div>{" "}
          <div className="flex flex-col w-full px-4 justify-center mt-10 mb-8">
            {" "}
            <div>
              <div className="flex justify-evenly w-full">
                {footer.reseaux.map((item) => (
                  <a
                    key={item.id}
                    rel="noreferrer"
                    href={item.lien}
                    target="_blank"
                    className="group"
                  >
                    {LazyImage(
                      item.icon.data.attributes,
                      "lazy",
                      "50px",
                      undefined,
                      "mx-auto cursor-pointer block group-hover:hidden"
                    )}
                    {LazyImage(
                      item.iconHover.data.attributes,
                      "lazy",
                      "50px",
                      undefined,
                      "lg:mr-4 lg:mx-0 mx-2 cursor-pointer hidden group-hover:block"
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="nav flex flex-col my-2">
            <div className="li group flex flex-col ml-2 text-center lg:text-left">
              {footer.navMobile.map((item) => (
                <Link key={item.id} href={item.lien}>
                  <a className="">{item.slug}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full my-10">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent border-white  hover:border-vert w-full h-[3.4rem] mx-auto block rounded-lg border-2">
                  <span
                    dangerouslySetInnerHTML={{ __html: footer.button }}
                    className=" text-white group-hover:text-vert"
                  />
                </button>
              </a>
            </Link>
          </div>
          <div
            className="mx-auto"
            dangerouslySetInnerHTML={{ __html: footer.copyright }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Footer
