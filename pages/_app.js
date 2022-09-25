import React from "react"
import "../styles/globals.css"
import Router from "next/router"
import NProgress from "nprogress" //nprogress module

NProgress.configure({ showSpinner: false })
// NProgress.configure({ minimum: 0.5 })

//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
