import React from "react"

const Projet = ({ projet }) => {
  return (
    <div id="projet" className="bg-accueil-projet text-center pt-40 pb-48">
      <div
        style={{}}
        className="max-w-9xl mx-auto grid items-center grid-rows-2 text-center"
      >
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: projet.titre2 }}
          ></div>
          <div className="h-[2px] bg-rouge-orange w-1/4 mx-auto mt-6"></div>
        </div>
      </div>
      <div
        className="row-start-2 mx-auto w-3/4"
        dangerouslySetInnerHTML={{ __html: projet.paragraphe }}
      ></div>
    </div>
  )
}

export default Projet
