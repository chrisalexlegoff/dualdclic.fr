import React from "react"

const IntroPresentation = ({ introPresentation }) => {
  return (
    <div
      id="intro-presentation"
      className="bg-intro-presentation text-center py-32 lg:py-48"
    >
      <div className="max-w-9xl mx-auto grid items-center text-center  grid-auto-row">
        <div className="mx-auto">
          <div
            className="text-center uppercase w-3/4 lg:w-2/3 mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: introPresentation.titre3 }}
          ></div>
          <div className="h-[1px] bg-rouge-orange w-[100px] lg:w-[200px] mx-auto mt-10"></div>
        </div>
        <div
          className="mx-auto lg:my-12 my-6"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4 }}
        ></div>
        <div
          className="mx-auto lg:w-2/3 xl:w-1/2 w-3/4 text-justify lg:text-left my-6"
          dangerouslySetInnerHTML={{ __html: introPresentation.paragraphe }}
        ></div>
        <div
          className="mx-auto uppercase lg:w-2/3 xl:w-1/2 w-3/4 my-10"
          dangerouslySetInnerHTML={{ __html: introPresentation.titre4bis }}
        ></div>
      </div>
    </div>
  )
}

export default IntroPresentation
