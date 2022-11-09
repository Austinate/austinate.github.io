import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const MainLayout = (props) => {
  return (
    <>
      <div
        className="site"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            margin: `1rem auto`,
            width: "100%",
            maxWidth: 800,
            padding: "0 15px",
          }}
        >
          <Header title={props.title} />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default MainLayout
