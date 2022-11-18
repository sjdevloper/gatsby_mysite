import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Blurb from "../components/Blurb";

import "../components/home.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div>
      <Blurb title="I'm Serena.">
        <p>I'm a dverloper. </p>
        <p>
          &mdash; I got my master’s degree in the US and majored in computer
          science. I love automating and simplifying complex tasks or projects
          to something clean, organized and human-readable.
        </p>
        <p>
          &mdash; Now I live in San Francisco Bay Area. I am looking for a
          remote software development job.{" "}
        </p>
      </Blurb>
    </div>

    <div class="row">
      <div class="grid-container">
        <div class="grid-item">
          <marquee>Front-End development</marquee>
          <marquee>Leadership</marquee>
          <marquee>Quick learner</marquee>
          <marquee>ReactJS</marquee>
          <marquee>JavaScript</marquee>
          <marquee>MongoDB</marquee>
          <marquee>Collaboration</marquee>
          <marquee>HTML</marquee>
          <marquee>Nodejs</marquee>
          <marquee>CSS</marquee>
          <marquee>RESTful API</marquee>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
