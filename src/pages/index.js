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
          science.{" "}
        </p>
        <p>
          {" "}
          &mdash; I love automating and simplifying complex tasks or projects to
          something clean, organized and human-readable.
        </p>
        <p>
          &mdash; Now I live in San Francisco Bay Area. I am looking for a
          remote front-end development job.{" "}
        </p>
      </Blurb>
    </div>

    <div class="techstack">
        <h1 class="techstack">Front-End development</h1>
        <h1>React, JavaScript, HTML, CSS</h1>
        <h1>MongoDB, Nodejs, RESTapi</h1>
        <h1>collaboration, leadership</h1>
      </div>

    <div class="grid-container">
      <div class="grid-item">
        <marquee>
          <a
            href="https://github.com/sjiang20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </marquee>
      </div>
      
      <div class="grid-item">
        <marquee>
          <Link to="/projects">Projects</Link>
        </marquee>
      </div>
      <div class="grid-item">
        <marquee>
          <Link to="/me"> Myself</Link>
        </marquee>
      </div>
      <div class="grid-item">
        <marquee>
          <Link to="/news"> Newsletter</Link>
        </marquee>
      </div>
      <div class="grid-item">
        <marquee>
          <Link to="/contact">Contact</Link>
        </marquee>
      </div>
      <div class="grid-item">
        <marquee>
          <Link to="/">Home</Link>
        </marquee>{" "}
      </div>
      =
    </div>
  </Layout>
);

export default IndexPage;
