import React, { useEffect, useState } from "react"

import { setCookie, hasCookie } from "cookies-next"

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
    console.log("accepting cookies")
  }
  const closeP = () => {
    setConsent(true)
    console.log("closing")
  }
  const denyCookie = () => {
    setConsent(true)
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 })
    console.log("denying cookie")
  }
  if (consent === true) {
    return null
  }
  return (
    <div
      id="consent"
      className="fixed flex flex-col justify-end h-screen w-full"
    >
      <div className="">
        <button
          onClick={(e) => {
            closeP()
          }}
          style={{
            backgroundImage: "url(/close-button.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="button-close-consent"
        >
          <span className=""></span>
        </button>
        <div className="w-full mx-auto max-w-9xl shadow-[0px_2px_20px_rgba(0,0,0,0.14)] bg-nav flex flex-col lg:flex-row justify-center items-center py-2">
          <div className="my-6 lg:my-0">
            <p>Dualdclic utilise des cookies pour analyser son traffic,</p>
            <p>vous pouvez accepter ou refuser tous les cookies.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <button
              className="group bg-rouge-orange hover:bg-blanc block rounded-md border-2 text-blanc hover:border-rouge-orange px-4 py-4 mx-10 mb-6 lg:mb-0"
              onClick={(e) => {
                acceptCookie()
              }}
            >
              <span className="text-blanc group-hover:text-rouge-orange">
                Tout accepter
              </span>
            </button>

            <button
              className="mr-0 lg:mr-6 mb-4 lg:mb-0"
              onClick={(e) => {
                denyCookie()
              }}
            >
              <span className="">Tout refuser</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consent
