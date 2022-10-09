import React, { useEffect, useState } from "react"
import LazyImage from "../../lib/lazy-images"

const ScrollButton = ({ scrollTop }) => {
  const [visible, setVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisible)

    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])

  const scrollImgMobile = LazyImage(
    scrollTop.bg.data.attributes,
    "lazy",
    "40px"
  )
  const scrollImg = LazyImage(scrollTop.bg.data.attributes, "lazy", "70px")

  return (
    <>
      <button
        className={`${
          visible ? "md:block" : "hidden"
        } hidden fixed right-8 bottom-8 z-10 cursor-pointer`}
      >
        <div className="" onClick={scrollToTop}>
          {scrollImg}
        </div>
      </button>
      <button
        className={`${
          visible ? "block" : "hidden"
        } md:hidden fixed right-4 bottom-4 z-10 cursor-pointer`}
      >
        <div className="" onClick={scrollToTop}>
          {scrollImgMobile}
        </div>
      </button>
    </>
  )
}

export default ScrollButton
