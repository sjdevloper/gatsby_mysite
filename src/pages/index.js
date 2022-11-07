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

    <div class="grid-container">
    <section id="skill">
      <div class="container line">
        <p class="skill">HTML</p>
        <div class="skills html">90%</div>
      </div>

      <div class="container line">
        <p class="skill">CSS</p>
        <div class="skills css">80%</div>
      </div>

      <div class="container lib">
        <div class="skills bootstrap">Bootstrap</div>
      </div>

      <div class="container line">
        <p class="skill">JavaScript</p>
        <div class="skills js">65%</div>
      </div>

      <div class="container lib">
        <div class="skills jquery">JQuery</div>
      </div>

      <div class="container lib">
        <div class="skills react">React.js</div>
      </div>

      <div class="container lib">
        <div class="skills gatsby">React.js Gatsby</div>
      </div>

      <div class="container lib">
        <div class="skills gatsby">Node.js</div>
      </div>
    </section>
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
        <marquee>Front-End development</marquee>
        <marquee>React</marquee>
        <marquee>JavaScript,HTML,CSS</marquee>
        <marquee>MongoDB, Nodejs, RESTapi</marquee>
        <marquee>Collaboration, Leadership</marquee>
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
