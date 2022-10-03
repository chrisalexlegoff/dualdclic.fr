import React from "react"
import LazyImage from "../../lib/lazy-images"

const MaintenancePage = ({ maintenance }) => {
  const logo = LazyImage(
    maintenance.maintenance.logo.data.attributes,
    "lazy",
    "",
    ""
  )
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),url(${
          process.env.NEXT_PUBLIC_URL +
          maintenance.maintenance.bg.data.attributes.url
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-9xl grid content-evenly mx-auto h-screen items-center text-center">
        <div className="mx-auto">
          <div className="lg:w-full w-3/4 mx-auto">{logo}</div>
        </div>
        <div className="lg:w-1/2 w-3/4 mx-auto">
          <div
            className="uppercase"
            dangerouslySetInnerHTML={{
              __html: maintenance.maintenance.titre,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 w-3/4 mx-auto">
          <div
            id="text-maintenance"
            className="uppercase"
            dangerouslySetInnerHTML={{
              __html: maintenance.maintenance.paragraphe,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default MaintenancePage
