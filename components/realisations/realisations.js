import React from "react"
import Carousel from "../slider/Carousel"

const RealisationsTab = ({ realisations }) => {
  return (
    <div id="nos-realisations">
      <div className="max-w-92xl mx-auto pt-24">
        {realisations.map((realisation) => {
          return (
            <div key={realisation.id} className="mx-auto w-11/12">
              <div className="grid grid-cols-1 2xl:grid-cols-2 min-h-[450px] mx-auto auto-rows-min bg-fond-gris p-6 lg:p-16 rounded-2xl mb-10">
                <div className="row-start-1">
                  <div
                    className="text-center 2xl:text-left uppercase"
                    dangerouslySetInnerHTML={{ __html: realisation.titre }}
                  ></div>
                  <div
                    className="2xl:text-left text-center uppercase"
                    dangerouslySetInnerHTML={{ __html: realisation.annee }}
                  ></div>
                </div>
                <div
                  className="row-start-2 py-14 2xl:pt-0 text-justify 2xl:pb-14"
                  dangerouslySetInnerHTML={{ __html: realisation.paragraphe }}
                ></div>

                <a
                  className="px-4 row-start-5 2xl:row-start-3 w-full md:w-3/4 2xl:py-0 py-14 2xl:mx-0 mx-auto"
                  href={realisation.lien}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="group bg-transparent hover:bg-bleu-fonce 2xl:w-2/3 w-full h-20 mx-auto 2xl:m-0 block rounded-2xl border-2 border-bleu-fonce"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: realisation.button,
                      }}
                      className=" text-bleu-fonce group-hover:text-white"
                    />
                  </button>
                </a>
                <div className="flex 2xl:justify-end w-full 2xl:col-start-2">
                  {" "}
                  <div className="competences flex flex-wrap 2xl:justify-end w-full justify-center pb-14">
                    {realisation.outils.map((outil) => {
                      return (
                        <div
                          className="rounded-2xl bg-vert py-2 px-4 m-2"
                          key={outil.id}
                        >
                          {outil.competence}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="2xl:col-start-2 2xl:row-span-2 pl-0 lg:pl-10">
                  <Carousel images={realisation.carousel}></Carousel>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RealisationsTab
