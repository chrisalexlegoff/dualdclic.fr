import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Binome = ({ binome }) => {
  const imageCarre = LazyImage(
    binome.images.data[0].attributes,
    "lazy",
    undefined,
    "",
    "flex lg:justify-end justify-center"
  )
  return (
    <div id="binome" className="max-w-9xl py-20 lg:py-48 mx-auto">
      <div className="mx-auto hidden lg:grid grid-cols-5 gap-4 items-center justify-start text-left">
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
              process.env.NEXT_PUBLIC_URL + binome.images.data[1].attributes.url
            })`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          className="col-span-2 translate-x-10 h-full rounded-xl w-4/5 ml-auto mr-10"
        ></div>
        <div className="col-start-3 col-span-3">
          <div className="flex flex-col h-full justify-between rounded-2xl bg-blue-binome px-32 py-16 -translate-x-24 -translate-y-10">
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
            process.env.NEXT_PUBLIC_URL + binome.images.data[1].attributes.url
          })`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="lg:h-[500px] h-auto rounded-xl mx-auto block lg:hidden text-center w-11/12 lg:w-5/6 mb-16"
      >
        <div className="flex flex-col h-full justify-evenly rounded-t-lg bg-blue-binome px-12 py-8 mx-auto">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: binome.titre3 }}
          ></div>
          <div
            className="uppercase my-12"
            dangerouslySetInnerHTML={{ __html: binome.titre4 }}
          ></div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: binome.paragraphe }}
          ></div>{" "}
        </div>
      </div>
      <div className="block lg:hidden my-12">{imageCarre}</div>
    </div>
  )
}

export default Binome
