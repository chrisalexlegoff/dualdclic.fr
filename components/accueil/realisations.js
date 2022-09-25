import Link from "next/link"
import React from "react"
import Slider from "../slider/Slider"

const Realisations = ({ realisations }) => {
  return (
    <div
      id="realisations"
      className="lg:bg-accueil-realisations bg-accueil-realisations-mobile"
    >
      <div className="max-w-9xl mx-auto grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left py-32">
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase text-center"
            dangerouslySetInnerHTML={{ __html: realisations.titre2 }}
          ></div>
          <div className="h-[2px] bg-rouge-orange w-1/4 mx-auto mt-6"></div>
        </div>
        <div className="row-start-5 lg:row-span-5 mx-auto w-3/4">
          <Slider items={realisations.carousel} classname="w-full" />
        </div>
        <div className="row-start-2 mx-auto w-3/4 py-10">
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: realisations.titre3 }}
          ></div>
        </div>
        <div className="row-start-3 mx-auto w-3/4">
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: realisations.paragraphe }}
          ></div>
        </div>
        <div className="row-start-4 mx-auto w-3/4">
          <div
            className="text-center pb-10"
            dangerouslySetInnerHTML={{ __html: realisations.paragrapheBis }}
          ></div>
        </div>
        <div className="row-start-6 lg:row-start-5 mx-auto w-full lg:w-2/3">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent border-rouge-orange lg:bg-transparent lg:hover:bg-rouge-orange lg:w-2/3 w-3/4 h-20 mx-auto block rounded-lg border-2 lg:border-rouge-orange px-4">
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
