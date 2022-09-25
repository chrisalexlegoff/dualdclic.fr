import React from "react"
import Slider from "./../slider/Slider"

const RealisationsTab = ({ realisations }) => {
  return (
    <div id="nos-realisations">
      <div className="max-w-9xl mx-auto pt-24">
        {realisations.map((realisation) => {
          return (
            <div key={realisation.id} className="mx-auto w-4/5 lg:w-3/4">
              <div className="grid xl:grid-cols-2 min-h-[450px] mx-auto auto-rows-min bg-fond-gris p-6 lg:p-16 rounded-2xl mb-10">
                <div className="row-start-1">
                  <div
                    className="text-center xl:text-left"
                    dangerouslySetInnerHTML={{ __html: realisation.titre }}
                  ></div>
                  <div
                    className="xl:text-left text-center uppercase"
                    dangerouslySetInnerHTML={{ __html: realisation.annee }}
                  ></div>
                </div>
                <div
                  className="row-start-2 py-14 xl:pt-0 xl:text-start text-center xl:pb-14"
                  dangerouslySetInnerHTML={{ __html: realisation.paragraphe }}
                ></div>

                <a
                  className="px-4 row-start-5 xl:row-start-3 w-3/4 xl:py-0 py-14 xl:mx-0 mx-auto"
                  href="https://chocolatiermocquin.sabrina-dossantos.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="group bg-transparent hover:bg-bleu-fonce xl:w-2/3 w-full h-20 mx-auto xl:m-0 block rounded-xl border-2 border-bleu-fonce"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: realisation.button,
                      }}
                      className=" text-bleu-fonce group-hover:text-white"
                    />
                  </button>
                </a>
                <div className="flex xl:justify-end w-full xl:col-start-2">
                  {" "}
                  <div className="competences flex flex-wrap xl:justify-end xl:w-2/3 w-full justify-center xl:pb-0 pb-14">
                    {realisation.outils.map((outil) => {
                      return (
                        <div
                          className="rounded-xl bg-vert py-2 px-4 m-2"
                          key={outil.id}
                        >
                          {outil.competence}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="xl:col-start-2 xl:row-span-2 xl:mb-0 xl:mt-auto">
                  <Slider
                    items={realisation.carousel}
                    classname={"w-4/5 xl:mx-0 xl:ml-auto mx-auto"}
                  />
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
