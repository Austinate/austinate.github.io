import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEOComponent = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      {/* <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} /> */}
      {children}
    </>
  )
}

export default SEOComponent
