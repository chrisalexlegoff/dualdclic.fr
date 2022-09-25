import React, { useEffect, useState } from "react"

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

  return (
    <button className="fixed w-10 right-10 bottom-10 h-10 z-10 cursor-pointer">
      <div
        className="w-full h-full"
        onClick={scrollToTop}
        style={{
          display: visible ? "block" : "none",
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_URL + scrollTop.bg.data.attributes.url
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
        }}
      ></div>
    </button>
  )
}

export default ScrollButton
