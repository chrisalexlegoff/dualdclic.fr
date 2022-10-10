import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const EntetePrestations = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "lazy",
    undefined,
    ""
  )

  return (
    <div
      id="entete-prestation"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL + header.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:bg-entete-prestation bg-entete-prestation-mobile">
        <div className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-16 lg:pt-0">
          <div className="flex flex-col lg:flex-row lg:row-start-1 mx-auto w-3/4 justify-between">
            <div
              className="uppercase lg:w-2/3"
              dangerouslySetInnerHTML={{ __html: header.titrePage }}
            ></div>
            <div className="mt-12 md:my-12 lg:my-0">{imageDeco}</div>
          </div>
          <div
            className="h5 lg:row-start-2 mx-auto w-3/4 lg:mb-0 mb-0 md:mb-32"
            dangerouslySetInnerHTML={{ __html: header.paragraphe }}
          ></div>
          <div className="row-start-3 lg:col-span-2 animate-pulse">
            <Link href="/nos-prestations/#expertise">
              <a className="flex flex-col items-center">
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

export default EntetePrestations
