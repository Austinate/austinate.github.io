import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

// const MarkdownBlogPostPreview = props => (
//   <div>
//     <div>
//       <Link to={props.node.fields.slug} style={{ color: 'inherit' }}> {props.node.frontmatter.title}</Link>
//       <p style={{ fontSize: "12pt" }}>{props.node.frontmatter.date}</p>
//     </div>
//     <p>{props.node.excerpt}</p>
//   </div>
// )

const mainLayout = ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>
      Blog in progress{" "}
      <span role="img" aria-label="tools emoji">
        🛠
      </span>
    </h1>
    Until there will be any blog posts you can just check the "About" section.
    {/* {data.allMarkdownRemark.edges.map(({ node }) => (
      <MarkdownBlogPostPreview key={node.id} node={node} />
    ))} */}
  </Layout>
);
export default mainLayout;

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
