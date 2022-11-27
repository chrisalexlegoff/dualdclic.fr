import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <>
      <div
        id="mission"
        className="lg:bg-about-mission bg-about-mission-mobile py-12 md:py-16"
      >
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center">
          <div className="uppercase row-start-1 lg:col-span-2 mx-auto w-3/4 mb-8">
            <div
              className="mt-10"
              dangerouslySetInnerHTML={{ __html: mission.titre3 }}
            ></div>
          </div>
          <div className="row-start-2 lg:col-span-2 mx-auto lg:w-2/3 xl:w-1/2 w-3/4">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: mission.paragrapheBis }}
            ></div>
          </div>

          <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full md:py-20">
            {mission.services.map((miss, index) => (
              <div
                key={miss.id}
                className="card-mission w-full md:w-3/4 lg:w-[300px] flex flex-col justify-center items-center rounded-xl bg-[#fafafb] py-6 md:py-8 m-4"
              >
                {LazyImage(miss.icons.data.attributes, "lazy", "80px")}
                <div
                  className="m-6 min-h-[40px] w-3/5 uppercase"
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
      </div>
      <div className="devis bg-rouge-orange">
        <div className="max-w-9xl grid items-center mx-auto py-10">
          <div
            className="uppercase row-start-1 mx-auto lg:ml-auto text-center w-3/4 md:w-auto"
            dangerouslySetInnerHTML={{ __html: mission.titre3bis }}
          ></div>
          <div className="row-start-2 lg:row-start-1 lg:col-start-2 w-full mt-10 lg:mt-0">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-rouge-orange hover:bg-blanc h-20 w-3/4 lg:w-1/2 block rounded-lg border-2 border-blanc hover:border-rouge-orange mx-auto lg:mx-0">
                  <span
                    dangerouslySetInnerHTML={{ __html: mission.button }}
                    className="text-blanc group-hover:text-rouge-orange"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
