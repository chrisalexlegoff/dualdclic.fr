import Image from "next/image"
import React from "react"

const LazyImageResized = (image, loading, layout, className) => {
  return (
    <div className={className}>
      <Image
        key={image.id}
        alt={image.alternativeText}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        loading={loading}
        layout={layout}
        objectFit="contain"
        width={layout != "fill" && image.width}
        height={layout != "fill" && image.height}
      />
    </div>
  )
}

export default LazyImageResized
