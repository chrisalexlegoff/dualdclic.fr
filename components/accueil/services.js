import Link from "next/link"
import React from "react"
import LazyImage from "./../../lib/lazy-images"

const Services = ({ services, expertise }) => {
  const imageCible = LazyImage(
    expertise.images.data[0].attributes,
    "lazy",
    "225px"
  )
  const imageCibleMobile = LazyImage(
    expertise.images.data[1].attributes,
    "lazy",
    "200px",
    ""
  )
  return (
    <>
      <div
        id="services"
        style={{
          backgroundImage: `var(--bg-noir),url(${
            process.env.NEXT_PUBLIC_URL + services.images.data[0].attributes.url
          })`,
        }}
        className="bg-cover bg-bottom bg-no-repeat py-32 lg:py-48"
      >
        <div className="max-w-9xl mx-auto grid items-center text-center">
          <div className="row-start-1 mx-auto lg:w-1/2 w-3/4">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: services.titre2 }}
            ></div>
            <div className="h-[1px] bg-bleu-clair w-[100px] lg:w-[200px] mx-auto mt-16"></div>
          </div>
          <div className="row-start-2 mx-auto w-3/4 mb-8 lg:w-1/2">
            <div
              className="mt-16 uppercase"
              dangerouslySetInnerHTML={{ __html: services.titre3 }}
            ></div>
          </div>
          <div className="row-start-3 mx-auto w-3/4 lg:w-1/2 text-justify pt-10">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: services.paragraphe }}
            ></div>
          </div>
          <div className="row-start-4 mx-auto w-3/4 lg:w-1/2">
            <div
              className="mt-20 uppercase"
              dangerouslySetInnerHTML={{ __html: services.titre3bis }}
            ></div>
          </div>

          <div className="row-start-5 flex flex-wrap justify-center items-center mx-auto my-8 w-full pb-10">
            {services.services.map((service, index) => (
              <div
                key={service.id}
                className="m-6 rounded-xl bg-blanc w-[180px] h-[180px] flex flex-col justify-evenly items-center"
              >
                {LazyImage(service.icons.data.attributes, "lazy", "80px")}
                <div
                  className="uppercase min-h-[40px] mx-10"
                  dangerouslySetInnerHTML={{ __html: service.legend }}
                ></div>
              </div>
            ))}
          </div>
          <div className="mx-auto w-full lg:w-1/3 row-start-6">
            <Link href="/prestation-web-print">
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
      <div className="max-w-9xl mx-auto grid items-center text-center pb-10">
        {" "}
        <div className="objectif mx-auto row-start-7 flex flex-col lg:flex-row w-3/4 lg:mt-28 lg:mb-16 justify-center">
          <div className="hidden lg:block my-6 lg:mb-0">{imageCible}</div>
          <div className="block lg:hidden my-6 lg:mb-0">{imageCibleMobile}</div>
          <div className="flex flex-col justify-center lg:pl-10 lg:w-3/4">
            <div
              className="lg:text-left mb-10 uppercase"
              dangerouslySetInnerHTML={{ __html: expertise.titre2bis }}
            ></div>
            <div
              className="uppercase lg:text-left"
              dangerouslySetInnerHTML={{ __html: expertise.titre3 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
