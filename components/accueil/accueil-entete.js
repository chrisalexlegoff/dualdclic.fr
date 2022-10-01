import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const AccueilEntete = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "Image de décoration accueil",
    "lazy",
    undefined,
    ""
  )
  const imageLogo = LazyImage(
    header.LogoAccueil.data[0].attributes,
    "Image du logo accueil",
    "lazy",
    undefined,
    ""
  )
  const imageLogoMobile = LazyImage(
    header.LogoAccueil.data[1].attributes,
    "Image du logo mobile accueil",
    "lazy",
    undefined,
    ""
  )

  return (
    <div
      id="accueil-entete"
      className="lg:bg-accueil-entete bg-accueil-entete-mobile"
    >
      <div
        style={{}}
        className="max-w-9xl mx-auto h-screen grid grid-col-1 lg:grid-cols-2 gap-4 items-center lg:justify-start text-center lg:text-left pt-10"
      >
        <div className="row-start-1 lg:col-span-2 mx-auto text-center text-xl w-3/4 lg:w-full">
          <div className="hidden lg:block lg:ml-[0.8rem] lg:w-full w-1/2 mx-auto">
            {imageLogo}
          </div>
          <div className="lg:hidden block w-full mx-auto">
            {imageLogoMobile}
          </div>
        </div>
        <div
          className="lg:row-start-2 mx-auto w-3/4 uppercase"
          dangerouslySetInnerHTML={{ __html: header.titrePage }}
        ></div>
        <div
          className="lg:row-start-3 mx-auto w-3/4"
          dangerouslySetInnerHTML={{ __html: header.paragraphe }}
        ></div>
        <div className="row-start-5 lg:row-start-4 mx-auto w-3/4">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent hover:bg-blanc w-full md:w-1/2 h-20 mx-auto lg:m-0 block rounded-lg border-2 border-blanc">
                <span
                  dangerouslySetInnerHTML={{ __html: header.button }}
                  className="text-blanc group-hover:text-rouge-orange px-4"
                />
              </button>
            </a>
          </Link>
        </div>
        <div
          id="image-deco-accueil"
          className="row-start-4 lg:row-span-3 justify-items-center mx-auto w-[250px] lg:w-2/3 md:block hidden"
        >
          {imageDeco}
        </div>
        <div className="lg:col-span-2 animate-pulse">
          <Link href="/#nous">
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
  )
}

export default AccueilEntete
