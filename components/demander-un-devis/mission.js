import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const Mission = ({ mission }) => {
  return (
    <>
      <div
        id="pourquoi-devis"
        className="lg:bg-devis-mission bg-devis-mission-mobile"
      >
        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center text-center py-20">
          <div className="row-start-1 lg:col-span-2 mx-auto lg:w-3/4 w-full">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: mission.titre4 }}
            ></div>
            <div className="h-[2px] bg-vert w-1/6 mx-auto mt-6"></div>
          </div>

          <div className="row-start-3 lg:col-span-2 flex flex-wrap justify-center items-center mx-auto my-8 w-full">
            {mission.services.map((miss, index) => (
              <div
                key={miss.id}
                className="w-3/4 lg:w-[400px] min-h-[470px] flex flex-col justify-center items-center rounded-xl bg-fond-gris pt-16 m-4"
              >
                {LazyImage(miss.icons.data.attributes, "lazy", "80px")}
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
    </>
  )
}

export default Mission
