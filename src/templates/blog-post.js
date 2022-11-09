import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOComponent from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const postLayout = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p style={{ fontSize: "12pt" }}>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export default postLayout
export const Head = ({ data }) => {
  return (
    <SEOComponent
      title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
    />
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
