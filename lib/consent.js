import React, { useEffect, useState } from "react"

import { setCookie, hasCookie } from "cookies-next"
import Link from "next/link"

export const Consent = () => {
  const [consent, setConsent] = useState(true)
  useEffect(() => {
    setConsent(hasCookie("localConsent"))
  }, [])

  function acceptCookie() {
    setConsent(true)
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 })
    // @ts-ignore
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    })
  }
  const closeP = () => {
    setConsent(true)
  }
  const denyCookie = () => {
    setConsent(true)
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 })
  }
  if (consent === true) {
    return null
  }
  return (
    <div id="consent" className="fixed flex flex-col justify-end w-full">
      <div className="">
        <div className="w-full mx-auto max-w-9xl shadow-[0px_2px_20px_rgba(0,0,0,0.14)] bg-nav flex flex-col lg:flex-row justify-center items-center py-2 lg:pl-0 px-6">
          <div className="my-2 lg:my-0 text-center px-6">
            <p>
              Nous aimerions installer quelques cookies pour analyser notre
              traffic -{" "}
              <Link href="/mentions-legales">
                <a className="underline">mentions légales</a>
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-row items-center justify-center mb-2 lg:mb-0">
            <button
              className="group bg-rouge-orange hover:bg-blanc block rounded-md border-2 text-blanc hover:border-rouge-orange px-4 py-2 ml-0 lg:ml-10 mr-10"
              onClick={(e) => {
                acceptCookie()
              }}
            >
              <span className="text-blanc group-hover:text-rouge-orange">
                Tout accepter
              </span>
            </button>

            <button
              className="mr-0 lg:mr-6"
              onClick={(e) => {
                denyCookie()
              }}
            >
              <span className="">Tout refuser</span>
            </button>
            <button
              id="button-close-consent"
              onClick={(e) => {
                closeP()
              }}
              style={{
                backgroundImage: "url(/close-button.svg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <span className=""></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consent
