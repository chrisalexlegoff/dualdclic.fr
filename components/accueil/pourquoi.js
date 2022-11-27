import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const Pourquoi = ({ pourquoi }) => {
  const imageDeco = LazyImage(
    pourquoi.images.data[0].attributes,
    "lazy",
    undefined,
    ""
  )
  return (
    <div id="pourquoi" className="text-center pt-12 xl:pt-0">
      <div
        style={{}}
        className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 items-center text-center lg:text-left bg-accueil-pourquoi"
      >
        <div className="col-start-1 creer flex flex-col xl:-translate-y-20 xl:min-h-[650px] max-w-[600px] bg-rouge-orange rounded-3xl mx-auto md:p-20 p-8 my-10 xl:my-0 xl:mx-0 xl:mr-10 md:w-full w-11/12">
          <div
            className="mx-auto text-center uppercase"
            dangerouslySetInnerHTML={{ __html: pourquoi.titre2 }}
          ></div>
          <div
            className="lg:min-h-[208px] mx-auto text-center my-12"
            dangerouslySetInnerHTML={{ __html: pourquoi.paragraphe }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-rouge-orange lg:bg-transparent lg:hover:bg-blanc w-full h-20 mx-auto lg:m-0 block rounded-lg border-2 border-blanc">
                  <span
                    dangerouslySetInnerHTML={{ __html: pourquoi.button }}
                    className="text-blanc lg:group-hover:text-rouge-orange"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:col-start-2 col-start-1 refondre flex flex-col xl:-translate-y-20 max-w-[600px] xl:min-h-[650px] bg-vert-fond rounded-3xl mx-auto md:p-20 xl:mb-0 p-8 my-10 xl:my-0 xl:mx-0 xl:mr-auto xl:ml-10 md:w-full w-11/12">
          <div
            className="mx-auto text-center uppercase"
            dangerouslySetInnerHTML={{ __html: pourquoi.titre2bis }}
          ></div>
          <div
            className="lg:min-h-[208px] mx-auto text-center my-12"
            dangerouslySetInnerHTML={{ __html: pourquoi.paragrapheBis }}
          ></div>
          <div className="mx-auto w-full">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent border-rouge-orange lg:bg-transparent lg:hover:bg-rouge-orange w-full h-20 mx-auto lg:m-0 block rounded-lg border-2 lg:border-rouge-orange">
                  <span
                    dangerouslySetInnerHTML={{ __html: pourquoi.button2 }}
                    className="text-rouge-orange lg:group-hover:text-blanc"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:col-span-2 mx-auto w-2/3 lg:w-[36%] my-4 -mb-[0.435rem]">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Pourquoi
