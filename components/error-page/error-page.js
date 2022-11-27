import Link from "next/link"
import React from "react"

const ErrorPage = ({ errorPage }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL +
          errorPage.errorPage.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        id="error-page"
        className="max-w-9xl mx-auto h-screen grid gap-4 items-center text-center pt-20"
      >
        <div className="row-start-1">
          <div
            className="uppercase text-4xl w-[250px] mx-auto"
            dangerouslySetInnerHTML={{ __html: errorPage.errorPage.titre }}
          ></div>
          <div className="h-[1px] bg-[#41EAD4] mx-auto mt-10 w-[100px] lg:w-[200px]"></div>
        </div>
        <div className="row-start-3">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: errorPage.errorPage.paragraphe }}
          ></div>
        </div>
        <div className="row-start-4">
          <Link href="/">
            <a>
              <button className="group bg-transparent hover:bg-[#41EAD4] lg:w-1/4 w-3/4 h-20 mx-auto block rounded-lg border-2 border-[#41EAD4]">
                <span
                  dangerouslySetInnerHTML={{
                    __html: errorPage.errorPage.button,
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

export default ErrorPage
