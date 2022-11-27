import Image from "next/image"
import Link from "next/link"
import React from "react"
import LazyImage from "../../lib/lazy-images"

const EnteteContact = ({ header }) => {
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
        <div className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-0 md:gap-4 items-center lg:justify-start text-center lg:text-left pt-20 md:pt-10">
          <div className="lg:row-start-1">
            <div
              className="uppercase lg:w-2/3 mx-auto w-3/4 mt-10"
              dangerouslySetInnerHTML={{ __html: header.titrePage }}
            ></div>
            <div className="flex flex-col lg:flex-row lg:row-start-2 mx-auto w-3/4 justify-between items-center mt-16">
              <div className="mx-auto w-full md:w-3/4 ">
                <Link href="/demander-un-devis/#preambule">
                  <a>
                    <button className="group bg-transparent hover:bg-blanc w-full h-20 mx-auto lg:ml-0 block rounded-lg border-2 border-blanc px-4 lg:w-2/3">
                      <span
                        dangerouslySetInnerHTML={{ __html: header.button }}
                        className="text-blanc group-hover:text-rouge-orange"
                      />
                    </button>
                  </a>
                </Link>{" "}
              </div>
              <div className="lg:mt-4 md:my-12 lg:my-0 mt-12">{imageDeco}</div>
            </div>
          </div>

          <div className="row-start-2 lg:col-span-2 animate-pulse h-full">
            <Link href="/contacter-freelance-nord/#formulaire-contact">
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

export default EnteteContact
