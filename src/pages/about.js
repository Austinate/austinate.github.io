import React from "react"
import Layout from "../components/layout"
import SEOComponent from "../components/seo"

const aboutLayout = () => (
  <Layout title="About">
    Hi! I'm Ostap Taran.
    <br />
    I'm an iOS engineer from Ukraine{" "}
    <span role="img" aria-label="flag of Ukraine">
      🇺🇦
    </span>
    <p />
    Currently, I'm holding a position of Chief Software Engineer at{" "}
    <a href="https://epam.com">EPAM</a>.
    <br />
    You can find me on <a href="https://github.com/austinate">GitHub</a>,{" "}
    <a href="https://www.linkedin.com/in/ostap-taran/">LinkedIn</a>,{" "}
    <a href="https://twitter.com/muroomsh">Twitter</a> and{" "}
    <a href="https://www.instagram.com/austinate/">Instagram</a>
    <p />
    My previous experience:
    <ul>
      <li>
        May 2017 - June 2020, CTO & Co-founder at{" "}
        <a href="https://7devs.co">7Devs</a>
      </li>
      <li>
        Jan 2017 - May 2017, iOS Team Lead at{" "}
        <a href="https://www.linkedin.com/company/tbwamobile/">
          Mobile Strategy
        </a>
      </li>
      <li>
        Jun 2016 - Jan 2017, iOS Team Lead at{" "}
        <a href="https://www.linkedin.com/company/srost-studio/">
          Srost Studio
        </a>{" "}
        <br /> (became Mobile Strategy)
      </li>
      <li>
        May 2016 - Sept 2016, tutor at{" "}
        <a href="https://spalah.com">Spalah IT school</a>
        <br />
        "Introduction into iOS development in Swift" course
      </li>
      <li>
        Nov 2013 - Jun 2016, iOS developer at{" "}
        <a href="https://applikeysolutions.com">Applikey Solutions</a>
      </li>
    </ul>
  </Layout>
)
export default aboutLayout
export const Head = () => <SEOComponent />
