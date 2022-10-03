import Link from "next/link"
import React from "react"

const SuccessForm = ({ successForm }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL + successForm.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-9xl mx-auto h-screen grid content-evenly items-center text-center pt-20">
        <div className="">
          <div
            className="uppercase mx-auto"
            dangerouslySetInnerHTML={{ __html: successForm.titre }}
          ></div>
          <div className="h-[2px] bg-[#41EAD4] mx-auto mt-6 w-2/12"></div>
        </div>
        <div className="">
          <div
            className="w-3/4 md:w-full mx-auto"
            dangerouslySetInnerHTML={{
              __html: successForm.paragraphe,
            }}
          ></div>
        </div>
        <div className="md:w-1/4 w-3/4 mx-auto">
          <Link href="/">
            <a>
              <button className="group bg-transparent hover:bg-[#41EAD4] h-20 mx-auto w-full block rounded-lg border-2 border-[#41EAD4]">
                <span
                  dangerouslySetInnerHTML={{
                    __html: successForm.button,
                  }}
                  className="text-[#41EAD4] group-hover:text-white"
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuccessForm
