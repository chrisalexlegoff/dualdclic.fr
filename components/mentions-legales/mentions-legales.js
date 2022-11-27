import Link from "next/link"
import React from "react"

const MentionsLegales = ({ mentionsLegales }) => {
  return (
    <div className="max-w-7xl mx-auto grid py-20 px-6">
      <div className="">
        <div
          className="uppercase mx-auto text-center"
          dangerouslySetInnerHTML={{ __html: mentionsLegales.titre }}
        ></div>
        <div className="h-[1px] bg-[#41EAD4] mx-auto mt-10 w-[100px] lg:w-[200px]"></div>
      </div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreUn }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheUn }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreDeux }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheDeux }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreTrois }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheTrois }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreQuatre }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheQuatre }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreCinq }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheCinq }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreSix }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheSix }}
      ></div>
      <div
        className="uppercase mt-16 mb-10"
        dangerouslySetInnerHTML={{ __html: mentionsLegales.titreSept }}
      ></div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: mentionsLegales.paragrapheSept }}
      ></div>
    </div>
  )
}

export default MentionsLegales
