import Image from "next/image"
import React from "react"

const LazyImage = (
  image,
  loading,
  height = "",
  layout,
  className,
  priority = false
) => {
  return (
    <div className={className}>
      <Image
        key={image.id}
        alt={image.alternativeText}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        width={height != "" ? height : image.width}
        height={height != "" ? height : image.height}
        loading={loading}
        layout={layout}
        placeholder="blur"
        blurDataURL={`${
          process.env.NEXT_PUBLIC_URL + image.url
        }?auto=format,compress&q=1&blur=500&w=2`}
        priority={priority}
      />
    </div>
  )
}

export default LazyImage
