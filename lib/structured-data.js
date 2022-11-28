import Script from "next/script"
import React from "react"

const strucData = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "DualDclic",
  url: "https://dualdclic.fr",
  sameAs: [
    "https://www.facebook.com/dualdclic",
    "https://twitter.com/chrisalexlegoff",
    "https://www.instagram.com/chrisalexlegoff",
    "https://www.linkedin.com/in/chrisalexlegoff",
    "https://www.pinterest.fr/dualdclic",
  ],
}

const StructuredData = () => {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(strucData, null, "\t"),
      }}
    />
  )
}

export default StructuredData
