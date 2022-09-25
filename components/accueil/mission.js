import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  const imageDeco = LazyImage(
    mission.images.data[0].attributes,
    "Image de décoration mission",
    "lazy",
    undefined,
    "",
    "w-3/4 mx-auto"
  )
  return (
    <div>
      <div
        id="missions"
        className="bg-blanc max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-32"
      >
        <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: mission.titre2 }}
          ></div>
        </div>
        <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: mission.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-24 w-full">
          {mission.services.map((miss, index) => (
            <div
              key={miss.id}
              className="services w-[360px] flex flex-col justify-center items-center rounded-xl bg-fond-gris pt-16 m-4"
            >
              {LazyImage(
                miss.icons.data.attributes,
                `"icon-${index}`,
                "lazy",
                "100px"
              )}
              <div
                className="m-6 min-h-[40px] w-3/5 "
                dangerouslySetInnerHTML={{ __html: miss.legend }}
              ></div>
              <div
                className="min-h-[200px] w-3/4"
                dangerouslySetInnerHTML={{ __html: miss.paragraphe }}
              ></div>
            </div>
          ))}
        </div>
        <div className="projet row-start-4 mx-auto lg:ml-auto uppercase w-3/4 lg:text-end mb-8 lg:mb-0 lg:mr-6">
          <div
            className="w-3/4 lg:ml-auto lg:mr-0 mx-auto"
            dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
          ></div>
        </div>
        <div className="projet row-start-5 mx-auto lg:ml-auto w-3/4 lg:w-2/3 lg:mr-6 lg:text-end">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
          ></div>
        </div>

        <div className="mx-auto lg:ml-auto lg:mr-6 w-3/4 row-start-7 lg:row-start-6 mt-10">
          <Link href="/a-propos">
            <a>
              <button className="group bg-rouge-orange w-full hover:bg-white h-20 mx-auto lg:w-1/2 lg:ml-auto lg:mr-0 block rounded-lg border-2 border-blanc hover:border-rouge-orange px-4">
                <span
                  dangerouslySetInnerHTML={{ __html: mission.button }}
                  className=" text-blanc group-hover:text-rouge-orange"
                />
              </button>
            </a>
          </Link>
        </div>
        <div className="lg:row-span-3 justify-items-center mx-auto lg:mr-auto lg:ml-6 row-start-6 my-8 lg:my-0">
          {imageDeco}
        </div>
      </div>
    </div>
  )
}

export default Mission
