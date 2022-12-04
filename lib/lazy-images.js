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
      {image.ext != ".svg" ? (
        <Image
          key={image.id}
          alt={image.alternativeText}
          src={process.env.NEXT_PUBLIC_URL + image.url}
          width={height != "" ? height : image.width}
          height={height != "" ? height : image.height}
          loading={loading}
          layout={layout}
          priority={priority}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          style={{ margin: "auto" }}
          src={process.env.NEXT_PUBLIC_URL + image.url}
          alt={image.alternativeText}
          key={image.id}
          width={height != "" ? height : image.width}
          height={height != "" ? height : image.height}
        />
      )}
    </div>
  )
}

export default LazyImage
