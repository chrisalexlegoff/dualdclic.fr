import React from "react"

const Projet = ({ projet }) => {
  return (
    <div id="projet" className="bg-accueil-projet text-center py-32 lg:py-48">
      <div
        style={{}}
        className="max-w-9xl mx-auto grid items-center lg:grid-rows-2 text-center"
      >
        <div className="row-start-1 mx-auto w-3/4">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{ __html: projet.titre2 }}
          ></div>
          <div className="h-[1px] bg-rouge-orange w-[100px] lg:w-[200px] mx-auto mt-10"></div>
        </div>
        <div
          className="sous-titre row-start-2 mx-auto w-3/4 lg:w-1/2 pt-20 lg:pt-16 text-justify"
          dangerouslySetInnerHTML={{ __html: projet.paragraphe }}
        ></div>
        <div
          className="row-start-3 mx-auto w-3/4 lg:w-1/2 pt-20 lg:pt-10 text-justify"
          dangerouslySetInnerHTML={{ __html: projet.paragrapheBis }}
        ></div>
      </div>
    </div>
  )
}

export default Projet
