import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const EnteteRealisations = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    undefined,
    undefined,
    "",
    "",
    true
  )

  return (
    <div
      id="entete-realisation"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL + header.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:bg-entete-realisations bg-entete-realisations-mobile">
        <div className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center text-center lg:text-left">
          <div className="lg:row-start-1">
            <div className="flex flex-col lg:flex-row  mx-auto w-3/4 lg:mt-32 mt-16 justify-between">
              <div
                className="uppercase lg:w-2/3"
                dangerouslySetInnerHTML={{ __html: header.titrePage }}
              ></div>
              <div className="my-12 md:my-12 lg:my-0">{imageDeco}</div>
            </div>
            <div
              className="sous-titre mt-16 lg:row-start-2 mx-auto w-3/4 lg:mb-0 mb-0 md:mb-32 lg:pr-32"
              dangerouslySetInnerHTML={{ __html: header.paragraphe }}
            ></div>
          </div>

          <div className="row-start-2 lg:col-span-2 animate-pulse h-full">
            <Link href="/projet-internet-et-imprimable/#nos-realisations">
              <a className="flex flex-col items-center h-full justify-end pb-6">
                <span className="mb-2">{/* {header.enSavoirPlus.text} */}</span>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    header.enSavoirPlus.image.data.attributes.url
                  }
                  alt={header.enSavoirPlus.text}
                  width={175}
                  height={75}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnteteRealisations
