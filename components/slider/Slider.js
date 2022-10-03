import React, { useEffect, useRef, useState } from "react"
import LazyImage from "./../../lib/lazy-images"

const Slider = ({ items, classname }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef()
  const removeAnimation = () => {
    // @ts-ignore
    slideRef.current.classList.remove("fade-anim")
  }
  let count = 0
  let slideInterval
  const image = LazyImage(
    items.item.data[currentIndex].attributes,
    "lazy",
    undefined,
    "",
    "mx-auto"
  )

  const handleOnNextClick = () => {
    count = (count + 1) % items.item.data.length
    setCurrentIndex(count)
    // @ts-ignore
    slideRef.current.classList.add("fade-anim")
  }

  const handleOnPrevClick = () => {
    const productsLength = items.item.data.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
    // @ts-ignore
    slideRef.current.classList.add("fade-anim")
  }
  useEffect(() => {
    startSlider()
    // @ts-ignore
    slideRef.current.addEventListener("animationend", removeAnimation)
    // @ts-ignore
    slideRef.current.addEventListener("mouseenter", pauseSlider)
    // @ts-ignore
    slideRef.current.addEventListener("mouseleave", startSlider)

    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  return (
    <div className={classname}>
      <div
        // @ts-ignore
        ref={slideRef}
        className="w-full"
      >
        {image}

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}></button>
          <button onClick={handleOnNextClick}></button>
        </div>
      </div>
    </div>
  )
}

export default Slider
