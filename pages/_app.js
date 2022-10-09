import React, { useEffect } from "react"
import "../styles/globals.css"
import Router from "next/router"
import NProgress from "nprogress" //nprogress module
import * as ga from "../lib/ga"

NProgress.configure({ showSpinner: false })
// NProgress.configure({ minimum: 0.5 })

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  //gets screen size - to fix mobile viewport height problem
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty("--vh", `${vh}px`)
      }

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    Router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
