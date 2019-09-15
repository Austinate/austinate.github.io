import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default props => (
  <div>
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: "0 15px" }}>
      <Header title={props.title} />
      {props.children}
    </div>
    <Footer />
  </div>
)
