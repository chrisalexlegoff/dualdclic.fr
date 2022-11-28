import Head from "next/head"
import React from "react"

const Seo = (seo) => {
  const {
    metaTitle,
    metaDescription,
    keywords,
    canonicalURL,
    metaImage,
    metaRobots,
    metaSocial,
  } = seo.seo
  const socialTag = {
    description: metaDescription,
    title: metaTitle,
    imageUrl: process.env.NEXT_PUBLIC_URL + metaImage.data.attributes.url,
  }
  const socialTagTwitter = {}

  metaSocial.map((val) => {
    if (val.socialNetwork == "Facebook") {
      socialTag.description = val.description
      socialTag.title = val.title
      socialTag.imageUrl =
        process.env.NEXT_PUBLIC_URL + val.image.data.attributes.url
    }
    if (val.socialNetwork == "Twitter") {
      socialTagTwitter.description = val.description
      socialTagTwitter.title = val.title
      socialTagTwitter.imageUrl =
        process.env.NEXT_PUBLIC_URL + val.image.data.attributes.url
    }
  })

  return metaTitle != null ? (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@chrisalexlegoff"></meta>
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      {Object.keys(socialTagTwitter).length > 0 && (
        <>
          <meta name="twitter:title" content={socialTagTwitter.title} />
          <meta
            name="twitter:description"
            content={socialTagTwitter.description}
          />
          <meta name="twitter:image" content={socialTagTwitter.imageUrl} />
        </>
      )}
      <meta property="og:url" content={canonicalURL} key="og:url" />
      <meta property="og:title" content={socialTag.title} key="og:title" />
      <meta
        property="og:description"
        content={socialTag.description}
        key="og:description"
      />
      <meta property="og:image" content={socialTag.imageUrl} key="og:image" />
      <link rel="canonical" href={canonicalURL} />
      {metaRobots != null && (
        <>
          <meta name="robots" content={metaRobots}></meta>
          <meta name="googlebot" content={metaRobots}></meta>
        </>
      )}
    </Head>
  ) : (
    <Head>
      <title>NO SEO</title>
    </Head>
  )
}

export default Seo
