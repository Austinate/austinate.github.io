import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEOComponent from "../components/seo"

// const MarkdownBlogPostPreview = (props) => (
//   <div>
//     <div>
//       <Link to={props.node.fields.slug} style={{ color: "inherit" }}>
//         {" "}
//         {props.node.frontmatter.title}
//       </Link>
//       <p style={{ fontSize: "10pt" }}>{props.node.frontmatter.date}</p>
//     </div>
//     <p>{props.node.excerpt}</p>
//     <p style={{ textAlign: "center", opacity: 0.3 }}>↩︎</p>
//   </div>
// )

const mainLayout = ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: "center" }}>
      Blog in progress{" "}
      <span role="img" aria-label="tools emoji">
        🛠
      </span>
    </h1>
    <p style={{ textAlign: "center" }}>
      But you can always check the "About" section.
    </p>
    {/* <h1 style={{ textAlign: "center" }}>Blog</h1> */}
    {/* {data.allMarkdownRemark.edges.map(({ node }) => (
      <MarkdownBlogPostPreview key={node.id} node={node} />
    ))} */}
  </Layout>
)
export default mainLayout

export const Head = () => <SEOComponent />

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
