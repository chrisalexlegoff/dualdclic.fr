import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import LazyImage from "./../../lib/lazy-images"

const FlipCard = ({ card }) => {
  const [isFlipped, setIsflipped] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsflipped(!isFlipped)
  }
  const icon = LazyImage(card.icons.data[0].attributes, "lazy", undefined)
  const iconHover = LazyImage(card.icons.data[1].attributes, "lazy", undefined)

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      infinite={true}
      flipSpeedFrontToBack={1.1}
      flipSpeedBackToFront={1.4}
      flipDirection="horizontal"
    >
      <div
        onClick={handleClick}
        className="group flex flex-col items-center justify-center card-body  bg-blanc rounded-lg w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] hover:bg-vert cursor-pointer"
      >
        <div
          className="card-body uppercase"
          dangerouslySetInnerHTML={{ __html: card.front }}
        ></div>
        <div className="relative top-10 group-hover:hidden block">{icon}</div>
        <div className="relative top-10 hidden group-hover:block">
          {iconHover}
        </div>
      </div>

      <div
        onClick={handleClick}
        className="flex items-center justify-center bg-blanc rounded-lg w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] p-10 cursor-pointer"
        dangerouslySetInnerHTML={{ __html: card.back }}
      ></div>
    </ReactCardFlip>
  )
}

export default FlipCard
