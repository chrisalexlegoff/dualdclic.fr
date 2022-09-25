import React from "react"
import Link from "next/link"
import LazyImage from "../../lib/lazy-images"

const Nous = ({ nous }) => {
  const imageFleche = LazyImage(
    nous.images.data[0].attributes,
    "Image fleche mission",
    "lazy",
    undefined,
    "",
    "mx-auto"
  )
  return (
    <div id="nous" className="">
      <div
        style={{}}
        className="max-w-9xl mx-auto grid lg:grid-cols-2 items-center lg:text-left text-center pt-20 lg:-mb-10 bg-accueil-nous"
      >
        <div
          className="row-start-1 mx-auto uppercase w-3/4 mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre2 }}
        ></div>
        <div
          className="lg:mt-10 row-start-2 mx-auto w-3/4  mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre3 }}
        ></div>
        <div
          className="row-start-3 lg:col-start-2 mx-auto w-3/4 mt-8 mb-4 lg:mt-12 lg:mb-6"
          dangerouslySetInnerHTML={{ __html: nous.titre4 }}
        ></div>
        <div
          className="row-start-4 lg:col-start-2 mx-auto w-3/4 mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.paragraphe }}
        ></div>
        <div className="hidden lg:block row-start-4 ml-auto">{imageFleche}</div>
        <div
          className="span row-start-5 mx-auto w-3/4 lg:mt-6 text-center mb-10 lg:mb-0"
          dangerouslySetInnerHTML={{ __html: nous.titre3bis }}
        ></div>
        <div className="row-start-7 lg:row-satrt-6 mx-auto w-3/4 mt-8 mb-12 lg:mt-0">
          <Link href="/contact">
            <a>
              <button className="group bg-blanc hover:bg-bleu-fonce border-bleu-fonce w-full md:w-4/6 lg:max-w-xs h-20 mx-auto block rounded-lg border-2">
                <span
                  dangerouslySetInnerHTML={{ __html: nous.button }}
                  className=" text-bleu-fonce group-hover:text-blanc"
                />
              </button>
            </a>
          </Link>
        </div>
        <div
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_URL + nous.images.data[1].attributes.url
            })`,
            backgroundSize: "140%",
            backgroundPosition: "center",
          }}
          className="bg-cover bg-no-repeat bg-center mx-auto w-[300px] h-[270px] border-vert border-4 rounded-2xl lg:row-start-7 row-start-6 lg:col-start-2"
        ></div>
      </div>
    </div>
  )
}

export default Nous
