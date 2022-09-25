import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const Pourquoi = ({ pourquoi }) => {
  const imageDeco = LazyImage(
    pourquoi.images.data[0].attributes,
    "Image de décoration accueil",
    "lazy",
    undefined,
    ""
  )
  return (
    <div id="pourquoi" className="text-center">
      <div
        style={{}}
        className="max-w-9xl mx-auto grid grid-col-1 lg:grid-cols-2 items-center text-center lg:text-left bg-accueil-pourquoi"
      >
        <div className="creer flex flex-col lg:-translate-y-20 lg:min-h-[562px] lg:w-[450px] bg-rouge-orange rounded-3xl mx-auto p-12 my-10 lg:my-0 lg:mx-0 lg:ml-auto lg:mr-10">
          <div
            className="mx-auto text-center"
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
        <div className="refondre flex flex-col lg:-translate-y-20 lg:min-h-[562px] lg:w-[450px] bg-vert-fond rounded-3xl mx-auto p-12 my-10 lg:my-0 lg:mx-0 lg:mr-auto lg:ml-10">
          <div
            className="mx-auto text-center"
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
        <div className="hidden lg:block lg:col-span-2 mx-auto w-1/4 my-4 lg:-mb-[0.435rem]">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Pourquoi
