import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Binome = ({ binome }) => {
  const imageCarre = LazyImage(
    binome.images.data[1].attributes,
    "lazy",
    undefined,
    "",
    "flex lg:justify-end justify-center"
  )
  const imageFleche = LazyImage(
    binome.images.data[0].attributes,
    "lazy",
    undefined,
    "",
    "lg:mr-6 md:mb-6 lg:mb-0 mx-auto rotate-90 md:rotate-0 flex h-[250px] mb-0 md:block md:h-auto"
  )
  return (
    <div id="binome" className="max-w-9xl pb-24 pt-40 mx-auto">
      <div className="mx-auto hidden lg:grid grid-cols-2 gap-4 items-center justify-start text-left">
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
              process.env.NEXT_PUBLIC_URL + binome.images.data[2].attributes.url
            })`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          className="h-full rounded-t-lg w-4/5 ml-auto mr-10"
        ></div>
        <div className="">
          <div className="flex flex-col h-full justify-between rounded-2xl bg-blue-binome px-32 py-16 -translate-x-32 -translate-y-10">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: binome.titre3 }}
            ></div>
            <div
              className="lg:my-12"
              dangerouslySetInnerHTML={{ __html: binome.titre4 }}
            ></div>
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: binome.paragraphe }}
            ></div>
          </div>
          <div className="mr-6">{imageCarre}</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
            process.env.NEXT_PUBLIC_URL + binome.images.data[2].attributes.url
          })`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="h-[500px] rounded-t-lg mx-auto block lg:hidden text-center w-5/6 mb-16"
      >
        <div className="flex flex-col h-full justify-evenly rounded-t-lg bg-blue-binome px-12 py-8 mx-auto">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: binome.titre3 }}
          ></div>
          <div
            className="uppercase lg:my-12"
            dangerouslySetInnerHTML={{ __html: binome.titre4 }}
          ></div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: binome.paragraphe }}
          ></div>{" "}
        </div>
      </div>
      <div className="block lg:hidden my-12">{imageCarre}</div>
      <div className="flex flex-wrap items-center lg:w-full w-10/12 mx-auto mt-20">
        <div
          className="text-center mx-auto lg:mr-6 lg:w-1/3 lg:mb-0 mb-10"
          dangerouslySetInnerHTML={{ __html: binome.paragrapheBis }}
        ></div>
        {imageFleche}
        <div className="mx-auto lg:w-1/4 md:w-1/3 w-full mt-6 md:mt-0">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent hover:bg-rouge-orange w-full h-20 mx-auto lg:m-0 block rounded-lg border-2 border-rouge-orange px-4">
                <span
                  dangerouslySetInnerHTML={{ __html: binome.button }}
                  className="text-rouge-orange group-hover:text-blanc"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Binome
