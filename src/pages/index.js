import * as React from "react"
import { Link } from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import Blurb from '../components/Blurb'

import "../components/home.css"






const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div>
    <Blurb title="I'm Serena.">
        <p>
          I'm a dverloper.
          &mdash; I love automating and simplifying complex tasks or projects to something clean, organized and human-readable.

    </p>

    </Blurb>

    </div>


      <div class="grid-container">
        <div class="grid-item"><marquee><a
            href="https://github.com/sjiang20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a></marquee></div>
        <div class="grid-item"><marquee><Link to="/projects">Projects</Link></marquee></div>
        <div class="grid-item"><marquee><Link to="/me"> Myself</Link></marquee></div>
        <div class="grid-item"><marquee><Link to="/news"> Newsletter</Link></marquee></div>
        <div class="grid-item"><marquee><Link to="/contact">Contact</Link></marquee></div>
        <div class="grid-item"><marquee><Link to="/">Home</Link></marquee> </div>
        =
      </div>

  </Layout>
)

export default IndexPage
