import Image from "next/image"
import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const EnteteContact = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "lazy",
    undefined,
    ""
  )
  return (
    <div
      id="entete-contact"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL + header.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:bg-entete-contact bg-entete-contact-mobile">
        <div className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-10">
          <div className="flex flex-col lg:flex-row lg:row-start-1 mx-auto w-3/4 justify-between">
            <div
              className="uppercase lg:w-2/3"
              dangerouslySetInnerHTML={{ __html: header.titrePage }}
            ></div>
            <div className="my-12 lg:my-0">{imageDeco}</div>
          </div>
          <div
            className="h5 lg:row-start-2 mx-auto w-3/4"
            dangerouslySetInnerHTML={{ __html: header.paragraphe }}
          ></div>
          <div className="lg:row-start-3 mx-auto w-3/4 ">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-transparent hover:bg-blanc w-full h-20 mx-auto lg:ml-0 block rounded-lg border-2 border-blanc px-4 lg:w-2/3">
                  <span
                    dangerouslySetInnerHTML={{ __html: header.button }}
                    className="text-blanc group-hover:text-rouge-orange"
                  />
                </button>
              </a>
            </Link>
          </div>
          <div className="row-start-4 lg:col-span-2 animate-pulse">
            <Link href="/contact/#formulaire-contact">
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

export default EnteteContact
