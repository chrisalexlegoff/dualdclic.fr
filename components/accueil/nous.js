import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const Nous = ({ nous }) => {
  const imageCarre = LazyImage(
    nous.images.data[1].attributes,
    "lazy",
    undefined,
    "",
    "mx-auto"
  )
  return (
    <div id="nous" className="pt-20">
      <div className="mx-auto hidden lg:grid grid-cols-5 gap-4 items-center justify-start text-left">
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
              process.env.NEXT_PUBLIC_URL + nous.images.data[0].attributes.url
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="translate-x-10 col-span-2 h-full rounded-lg w-4/5 ml-auto mr-10"
        ></div>
        <div className="col-start-3 col-span-3">
          <div className="flex flex-col h-full justify-between rounded-2xl bg-accueil-nous px-32 py-16 -translate-x-24 -translate-y-10">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: nous.titre2 }}
            ></div>
            <div
              className="lg:my-12"
              dangerouslySetInnerHTML={{ __html: nous.paragraphe }}
            ></div>
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: nous.titre3 }}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
            process.env.NEXT_PUBLIC_URL + nous.images.data[0].attributes.url
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-auto rounded-xl mx-auto block lg:hidden text-center w-11/12 md:w-5/6 lg:mb-16"
      >
        <div className="flex flex-col h-full justify-evenly rounded-xl bg-accueil-nous px-6 lg:px-12 py-8 mx-auto">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: nous.titre2 }}
          ></div>
          <div
            className="my-12"
            dangerouslySetInnerHTML={{ __html: nous.paragraphe }}
          ></div>
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: nous.titre3 }}
          ></div>{" "}
        </div>
      </div>
      <div className="grid justify-items-center items-end lg:grid-cols-6 pt-28 pb-32">
        <div className="lg:col-start-2 lg:col-span-4 w-3/4">
          <div className="mb-16">
            <div
              className="text-center uppercase h2-bis"
              dangerouslySetInnerHTML={{ __html: nous.titre2bis }}
            ></div>
            <div className="h-[1px] bg-bleu-clair w-[100px] lg:w-[200px] mx-auto mt-10"></div>
          </div>
          <div className="">
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: nous.paragrapheBis }}
            ></div>
          </div>
        </div>
        <div className="lg:block hidden col-start-6 mb-10">{imageCarre}</div>
      </div>
    </div>
  )
}

export default Nous
