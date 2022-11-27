import React from "react"
import LazyImage from "./../../lib/lazy-images"
import Link from "next/link"

const Presentation = ({ presentation }) => {
  const imgChris = LazyImage(presentation.images.data[0].attributes, "lazy")
  const imgChrisMobile = LazyImage(
    presentation.images.data[2].attributes,
    "lazy"
  )
  const imgSab = LazyImage(presentation.images.data[1].attributes, "lazy")
  const imgSabMobile = LazyImage(presentation.images.data[3].attributes, "lazy")
  return (
    <div
      id="presentation"
      className="max-w-9xl mx-auto pt-16 xl:pt-12 pb-16 xl:pb-32"
    >
      <div className="flex flex-col xl:flex-row justify-center items-center">
        <div className="flex flex-col max-w-[600px] xl:h-[950px] xl:justify-between justify-center mx-6 mb-16 xl:mb-0">
          <div className="flex xl:items-end h-auto xl:h-[200px]">
            <div className="w-3/4 xl:w-2/3 mb-2 xl:pr-2 pr-0  xl:text-left text-center mx-auto xl:mx-0">
              <div
                className="uppercase xl:pb-0 pb-4"
                dangerouslySetInnerHTML={{ __html: presentation.titre3bis }}
              ></div>
              <div className="grow xl:hidden block mx-auto w-4/5">
                {imgSabMobile}
              </div>
            </div>
            <div className="grow hidden xl:block w-4/5">{imgSab}</div>
          </div>
          {/* <div
            className="outils mt-6"
            dangerouslySetInnerHTML={{ __html: presentation.titre2bis }}
          ></div> */}
          <div className="flex flex-wrap justify-start">
            {presentation.competencesSab.map((item) => {
              return (
                <div
                  className="competences rounded-lg bg-vert py-2 px-4 m-2 ml-0"
                  key={item.id}
                >
                  {item.competence}
                </div>
              )
            })}
          </div>
          <div
            className="py-6 xl:pr-6 pr-0 xl:h-[370px] text-justify"
            dangerouslySetInnerHTML={{ __html: presentation.paragrapheBis }}
          ></div>
          <div className="w-full">
            <Link href="https://sabrina-dossantos.fr/" passHref>
              <a target="_blank">
                <button className="group w-full hover:bg-rouge-orange h-20 lg:w-2/3 lg:mr-auto block rounded-lg border-2 border-rouge-orange">
                  <span
                    dangerouslySetInnerHTML={{ __html: presentation.button }}
                    className="text-rouge-orange group-hover:text-blanc"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-[600px] xl:h-[950px] justify-between mx-6">
          <div className="flex items-end h-auto xl:h-[200px]">
            <div className="grow hidden xl:block w-4/5">{imgChris}</div>
            <div className="w-3/4 xl:w-2/3 mx-auto xl:mx-0 text-center xl:text-right mb-2 xl:pl-2 pl-0">
              <div
                className="xl:pb-0 pb-4 uppercase"
                dangerouslySetInnerHTML={{ __html: presentation.titre3 }}
              ></div>
            </div>
          </div>
          <div className="grow xl:hidden block mx-auto w-4/5">
            {imgChrisMobile}
          </div>
          {/* <div
            className="outils text-right mt-6"
            dangerouslySetInnerHTML={{ __html: presentation.titre2 }}
          ></div> */}
          <div className="flex flex-wrap justify-end">
            {presentation.competencesChris.map((item) => {
              return (
                <div
                  className="competences rounded-lg bg-vert py-2 px-4 m-2 mr-0"
                  key={item.id}
                >
                  {item.competence}
                </div>
              )
            })}
          </div>
          <div
            className="presentationChris py-6 xl:pl-6 pl-0 xl:h-[370px] text-justify"
            dangerouslySetInnerHTML={{ __html: presentation.paragraphe }}
          ></div>
          <div className="w-full">
            <Link href="https://github.com/chrisalexlegoff" passHref>
              <a target="_blank">
                <button className="group w-full hover:bg-rouge-orange h-20 lg:w-2/3 lg:ml-auto block rounded-lg border-2 border-rouge-orange">
                  <span
                    dangerouslySetInnerHTML={{ __html: presentation.button2 }}
                    className=" text-rouge-orange group-hover:text-white"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
