import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const MainLayout = (props) => {
  return (
    <>
      <div className="site">
        <div
          style={{
            margin: `3rem auto`,
            maxWidth: 800,
            padding: "0 15px",
            minHeight: "82vh",
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
