import Image from "next/image"
import React from "react"
import Link from "next/link"
import LazyImage from "./../../lib/lazy-images"

const AccueilEntete = ({ header }) => {
  const imageDeco = LazyImage(
    header.imageDeco.data.attributes,
    "eager",
    undefined,
    "",
    "",
    true
  )
  console.log(header.imageDeco.data.attributes)
  const imageDecoMobile = LazyImage(
    header.bg.data.attributes,
    undefined,
    undefined,
    "",
    "",
    true
  )
  const imageLogo = LazyImage(
    header.LogoAccueil.data[0].attributes,
    "eager",
    undefined,
    "",
    "",
    true
  )
  const imageLogoMobile = LazyImage(
    header.LogoAccueil.data[1].attributes,
    undefined,
    undefined,
    "",
    "",
    true
  )

  return (
    <div
      id="accueil-entete"
      className="md:bg-accueil-entete bg-accueil-entete-mobile"
    >
      <div
        style={{}}
        className="box max-w-9xl mx-auto h-screen grid grid-col-1 md:grid-cols-2 gap-4 items-center md:justify-start text-center md:text-left pt-10 md:pt-0"
      >
        <div className="row-start-1 md:col-span-2 mx-auto text-center text-xl w-3/4 md:w-full">
          <div className="hidden md:block md:ml-[0.55rem] md:w-full w-1/2 mx-auto">
            {imageLogo}
          </div>
          <div className="md:hidden block w-full mx-auto">
            {imageLogoMobile}
          </div>
        </div>
        <div
          className="row-start-2 mx-auto w-4/5 md:w-3/4 uppercase"
          dangerouslySetInnerHTML={{ __html: header.titrePage }}
        ></div>
        <div
          className="h2 md:row-start-3 mx-auto w-11/12 md:w-3/4 uppercase"
          dangerouslySetInnerHTML={{ __html: header.paragraphe }}
        ></div>
        <div className="md:row-start-4 w-3/4 mx-auto hidden md:block">
          <Link href="/demander-un-devis">
            <a>
              <button className="group bg-transparent hover:bg-blanc h-20 md:w-2/3 w-full md:mx-0 mx-auto md:m-0 block rounded-md border-2 border-blanc">
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
          className="row-start-2 row-span-3 justify-items-center mx-auto w-2/3 hidden md:block"
        >
          {imageDeco}
        </div>
        <div
          id="image-deco-accueil"
          className="row-start-3 justify-items-center mx-auto w-[150px] block md:hidden"
        >
          {imageDecoMobile}
        </div>
        <div className="md:row-start-5 md:col-span-2 animate-pulse">
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
      <div id="message"></div>
    </div>
  )
}

export default AccueilEntete
