import Image from "next/image"
import React from "react"

const LazyImage = (image, alt, loading, height = "", layout, className) => {
  return (
    <div className={className}>
      <Image
        key={image.id}
        alt={alt}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        width={height != "" ? height : image.width}
        height={height != "" ? height : image.height}
        loading={loading}
        layout={layout}
      />
    </div>
  )
}

export default LazyImage
