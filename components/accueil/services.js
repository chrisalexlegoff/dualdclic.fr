import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Services = ({ services }) => {
  return (
    <div
      id="services"
      style={{
        backgroundImage: `var(--bg-noir),url(${
          process.env.NEXT_PUBLIC_URL + services.images.data[0].attributes.url
        })`,
      }}
      className="bg-cover bg-bottom bg-no-repeat"
    >
      <div className="max-w-9xl mx-auto grid items-center text-center py-32">
        <div className="row-start-1 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: services.titre2 }}
          ></div>
          <div className="h-[2px] bg-bleu-clair w-1/12 mx-auto mt-6"></div>
        </div>
        <div className="row-start-2 mx-auto w-3/4 mb-8 lg:w-1/2">
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: services.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4 lg:w-2/3">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: services.paragraphe }}
          ></div>
        </div>

        <div className="row-start-4 flex flex-wrap justify-center items-center mx-auto my-8 w-full py-10">
          {services.services.map((service, index) => (
            <div
              key={service.id}
              className="m-6 rounded-xl bg-blanc w-[250px] h-[250px] flex flex-col justify-evenly items-center"
            >
              {LazyImage(service.icons.data.attributes, "lazy", "100px")}
              <div
                className="uppercase min-h-[40px] mx-10"
                dangerouslySetInnerHTML={{ __html: service.legend }}
              ></div>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full lg:w-1/3 row-start-5">
          <Link href="/about">
            <a>
              <button className="group bg-transparent lg:hover:bg-rouge-orange w-3/4 h-20 mx-auto block rounded-lg border-2 border-blanc lg:hover:border-rouge-orange px-4">
                <span
                  dangerouslySetInnerHTML={{ __html: services.button }}
                  className="text-blanc"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
