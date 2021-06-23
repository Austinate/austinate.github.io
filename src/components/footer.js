import React from "react"

const footer =  ({ children }) => (
  <footer
    style={{
      width: "100%",
      padding: `3rem auto`,
    }}
  >
    <div
      style={{
        margin: "0.5rem auto",
        maxWidth: 650,
        padding: "0 15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
      <div style={{ fontSize: "12pt" }}>
        © {new Date().getFullYear()} Ostap Taran. This website is made with{" "}
        <a href="https://gatsbyjs.org" target="_blank"  rel="noopener noreferrer">Gatsby.js</a>
      </div>
    </div>
  </footer>
);
export default footer;
