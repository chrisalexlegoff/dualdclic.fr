import React, { useState } from "react"
import LazyImage from "../../lib/lazy-images"
import Link from "next/link"

const Expertise = ({ expertise }) => {
  const [boardState, setBoardState] = useState(null)
  const imageCible = LazyImage(
    expertise.images.data[0].attributes,
    "lazy",
    "225px",
    ""
  )
  const imageCibleMobile = LazyImage(
    expertise.images.data[1].attributes,
    "lazy",
    "200px",
    ""
  )
  return (
    <>
      <div id="expertise">
        <div className="max-w-9xl mx-auto grid items-center text-center pt-32 pb-20">
          <div className="row-start-1 mx-auto lg:w-3/4 w-full ">
            <div
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: expertise.titre2 }}
            ></div>
            <div className="h-[1px] bg-rouge-orange mx-auto mt-10 w-[100px] lg:w-[200px]"></div>
          </div>
          <div className="row-start-3 flex flex-wrap justify-center mx-auto w-full pt-12 lg:pt-20">
            {expertise.board.map((item, index) => (
              <div
                key={item.id}
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
                    process.env.NEXT_PUBLIC_URL + item.bg.data[0].attributes.url
                  })`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                }}
                className="w-11/12 md:w-3/4 lg:w-[500px] min-h-[300px] rounded-xl bg-fond-gris m-4"
              >
                {boardState == index ? (
                  <div className="expertise-card-recto transition-all duration-500 flex flex-col min-h-[300px] h-auto justify-center items-center bg-prestation-expertise-card-open rounded-xl p-10">
                    <div className="flex w-full items-center justify-between text-left">
                      <div
                        className="uppercase my-4 text-rouge-orange min-h-[40px] w-3/5"
                        dangerouslySetInnerHTML={{ __html: item.titreVerso }}
                      ></div>
                      <div className="" onClick={() => setBoardState(null)}>
                        {LazyImage(
                          item.icons.data[0].attributes,
                          "lazy",
                          "30px",
                          undefined,
                          "cursor-pointer"
                        )}
                      </div>
                    </div>
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{ __html: item.paragraphe }}
                    ></div>
                  </div>
                ) : (
                  <div className="expertise-card-verso transition-all duration-500 flex flex-col min-h-[300px] h-full justify-center items-center bg-prestation-expertise-card-close rounded-xl pt-10">
                    <div
                      className="uppercase w-full my-6 min-h-[40px] px-4"
                      dangerouslySetInnerHTML={{ __html: item.titre }}
                    ></div>
                    <div className="" onClick={() => setBoardState(index)}>
                      {LazyImage(
                        item.icons.data[1].attributes,
                        "lazy",
                        "30px",
                        undefined,
                        "cursor-pointer"
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-rouge-orange ">
        <div className="projet max-w-9xl grid lg:grid-cols-3 items-center mx-auto py-10 w-3/4 lg:w-full">
          <div
            className="uppercase lg:pl-10 lg:col-span-2 mx-auto lg:ml-auto text-center lg:text-right"
            dangerouslySetInnerHTML={{ __html: expertise.titre4 }}
          ></div>
          <div className="lg:pl-10 col-start-1 w-full mt-10 lg:mt-0 lg:col-start-3">
            <Link href="/demander-un-devis">
              <a>
                <button className="group bg-rouge-orange hover:bg-blanc h-20  md:w-3/4 w-full block rounded-lg border-2 border-blanc hover:border-rouge-orange mx-auto lg:mx-0">
                  <span
                    dangerouslySetInnerHTML={{ __html: expertise.button }}
                    className=" text-blanc group-hover:text-rouge-orange"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="max-w-9xl mx-auto grid items-center text-center py-10">
        {" "}
        <div className="objectif mx-auto row-start-7 flex flex-col lg:flex-row lg:w-3/4 w-11/12 lg:mt-28 lg:mb-16 justify-center">
          <div className="hidden lg:block my-6 lg:mb-0">{imageCible}</div>
          <div className="block lg:hidden my-6 lg:mb-0">{imageCibleMobile}</div>
          <div className="flex flex-col justify-center lg:pl-10 lg:w-3/4">
            <div
              className="lg:text-left mb-10 uppercase"
              dangerouslySetInnerHTML={{ __html: expertise.titre2bis }}
            ></div>
            <div
              className="uppercase lg:text-left"
              dangerouslySetInnerHTML={{ __html: expertise.paragrapheBis }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise
