import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Blurb from '../components/Blurb'







const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div>
    <Blurb title="I'm Shanshan.">
        <p>
          I'm a dverloper. 
          &mdash; I love automating and simplifying complex tasks or projects to something clean, organized and human-readable.

    </p>
      
    </Blurb>

    </div>
  </Layout>
)

export default IndexPage
