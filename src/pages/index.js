import React from "react"

import LandingBio from "../components/landing-bio"
import Grid from "../components/grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Grid />
  </Layout>
)

export default IndexPage
