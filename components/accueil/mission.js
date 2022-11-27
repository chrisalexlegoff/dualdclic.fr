import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <div
      id="missions"
      className="bg-blanc max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center pb-32"
    >
      <div className="py-32 lg:pb-0 lg:pt-24 row-start-1 lg:col-span-2 lg:bg-about-mission bg-about-mission-mobile">
        <div className="mx-auto lg:w-3/4 w-full">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: mission.titre2 }}
          ></div>
          {/* <div className="h-[1px] bg-vert w-[100px] lg:w-[200px] mx-auto mt-10"></div> */}
        </div>
        <div className="flex flex-wrap justify-center items-center mx-auto mb-32 mt-24 w-full">
          {mission.services.map((miss, index) => (
            <div
              key={miss.id}
              className="services w-full md:w-[300px] flex flex-col justify-center items-center rounded-xl bg-[#fafafb] py-8 m-4"
            >
              {LazyImage(miss.icons.data.attributes, "lazy", "100px")}
              <div
                className="m-6 min-h-[40px] w-3/5 "
                dangerouslySetInnerHTML={{ __html: miss.legend }}
              ></div>
              <div
                className="md:min-h-[200px] w-3/4"
                dangerouslySetInnerHTML={{ __html: miss.paragraphe }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="projet row-start-2 mx-auto lg:ml-auto uppercase w-3/4 lg:text-end mt-10 lg:mt-0 mb-8 lg:mb-0 lg:mr-6">
        <div
          className="w-3/4 lg:ml-auto lg:mr-0 mx-auto"
          dangerouslySetInnerHTML={{ __html: mission.titre2bis }}
        ></div>
      </div>
      <div className="sous-titre projet row-start-3 mx-auto lg:ml-auto w-3/4 lg:w-2/3 lg:mr-6 lg:text-end">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: mission.paragraphe }}
        ></div>
      </div>

      <div className="mx-auto lg:ml-auto lg:mr-6 w-3/4 row-start-6 lg:row-start-4 mt-10">
        <Link href="/demander-un-devis">
          <a>
            <button className="group bg-rouge-orange w-full hover:bg-white h-20 mx-auto lg:w-2/3 lg:ml-auto lg:mr-0 block rounded-lg border-2 border-blanc hover:border-rouge-orange px-4">
              <span
                dangerouslySetInnerHTML={{ __html: mission.button }}
                className=" text-blanc group-hover:text-rouge-orange"
              />
            </button>
          </a>
        </Link>
      </div>
      <div className="lg:row-span-3 justify-items-center mx-auto lg:mr-auto lg:ml-6 row-start-5 my-8 lg:my-0">
        <div
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_URL +
              mission.images.data[0].attributes.url
            })`,
            backgroundPosition: "50% 90%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "130%",
          }}
          className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-[50px] border-[5px] border-vert"
        />
      </div>
    </div>
  )
}

export default Mission
