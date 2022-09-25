import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <>
      <div id="mission" className="lg:bg-about-mission bg-about-mission-mobile">
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-32">
          <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: mission.paragrapheBis }}
            ></div>
          </div>
          <div className="row-start-2 lg:col-span-2 mx-auto w-3/4 mb-8">
            <div
              className="mt-10"
              dangerouslySetInnerHTML={{ __html: mission.titre3 }}
            ></div>
          </div>
          <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
            {mission.services.map((miss, index) => (
              <div
                key={miss.id}
                className="card-mission w-3/4 lg:w-[400px] min-h-[470px] flex flex-col justify-center items-center rounded-xl bg-fond-gris pt-16 m-4"
              >
                {LazyImage(
                  miss.icons.data.attributes,
                  `"icon-${index}`,
                  "lazy",
                  "80px"
                )}
                <div
                  className="m-6 min-h-[40px] w-3/5"
                  dangerouslySetInnerHTML={{ __html: miss.legend }}
                ></div>
                <div
                  className="min-h-[200px] w-3/5"
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
            className="row-start-1 mx-auto lg:ml-auto text-center"
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
