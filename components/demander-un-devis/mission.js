import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <>
      <div
        id="pourquoi-devis"
        className="lg:bg-about-mission bg-about-mission-mobile"
      >
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-20">
          <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: mission.titre4 }}
            ></div>
            {/* <div className="h-[1px] bg-vert w-[100px] lg:w-[200px] mx-auto mt-10"></div> */}
          </div>

          <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
            {mission.services.map((miss, index) => (
              <div
                key={miss.id}
                className="services w-full md:w-[300px] flex flex-col justify-center items-center rounded-xl bg-[#fafafb] py-8 m-4"
              >
                {LazyImage(miss.icons.data.attributes, "lazy", "100px")}
                <div
                  className="uppercase m-6 min-h-[40px] w-3/5"
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
    </>
  )
}

export default Mission
