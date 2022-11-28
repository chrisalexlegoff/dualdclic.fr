import Link from "next/link"
import React from "react"
import Carousel from "../slider/Carousel"

const Realisations = ({ realisations }) => {
  return (
    <div
      id="realisations"
      className="lg:bg-accueil-realisations bg-accueil-realisations-mobile  py-32 lg:py-48"
    >
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-start text-center lg:text-left">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase text-center"
            dangerouslySetInnerHTML={{ __html: realisations.titre2 }}
          ></div>
          <div className="h-[1px] bg-rouge-orange w-[100px] lg:w-[200px] mx-auto mt-10"></div>
        </div>
        <div className="row-start-5 lg:row-span-5 mx-auto w-full max-w-2xl">
          <Carousel images={realisations.carousel} />
        </div>
        <div className="row-start-2 mx-auto w-3/4 py-10">
          <div
            className="uppercase text-justify"
            dangerouslySetInnerHTML={{ __html: realisations.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4 pb-10">
          <div
            className="sous-titre text-justify"
            dangerouslySetInnerHTML={{ __html: realisations.paragrapheBis }}
          ></div>
        </div>
        <div className="row-start-4 mx-auto w-3/4">
          <div
            className="text-justify pb-10"
            dangerouslySetInnerHTML={{ __html: realisations.paragraphe }}
          ></div>
        </div>
        <div className="row-start-6 lg:row-start-5 mx-auto w-full lg:w-2/3">
          <Link href="/projet-internet-et-imprimable">
            <a>
              <button className="group bg-transparent border-rouge-orange lg:bg-transparent lg:hover:bg-rouge-orange lg:w-2/3 w-3/4 h-20 mx-auto block rounded-lg border-2 lg:border-rouge-orange px-4 lg:mt-0 mt-10">
                <span
                  dangerouslySetInnerHTML={{ __html: realisations.button }}
                  className="text-rouge-orange lg:group-hover:text-blanc"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Realisations
