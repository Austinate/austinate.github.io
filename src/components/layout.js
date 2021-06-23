import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"

const MainLayout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://austinate.me" />
      </Helmet>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 650,
          padding: "0 15px",
          minHeight: "82vh",
        }}
      >
        <Header title={props.title} />
        {props.children}
      </div>
      <Footer />
    </div>
  )
};
export default MainLayout;
