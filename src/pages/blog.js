import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { Carousel } from "react-bootstrap";

import slide01 from "../images/slide01.jpeg";
import slide02 from "../images/slide02.jpeg";
import slide03 from "../images/slide03.jpeg";

import "../components/blog.css";

const blog = () => (
  <Layout>
    <Seo title="blog" />

    <div>
      <p class="blog">
        <a href="https://sjiang20.github.io/" target="_blank">
          <h1>
            {" "}
            Click Here <a>(Gihub Page)</a>{" "}
          </h1>
        </a>
      </p>
    </div>

    <Carousel>
      <Carousel.Item>
        <img src={slide01} alt="This is the First Slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide02} alt="This is the First Slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide03} alt="This is the First Slide" />
      </Carousel.Item>
    </Carousel>

    {/* <div class="grid-container">
      <div class="grid-item"> */}

    <h1>
      <a
        href="https://github.com/sjiang20/CS6300"
        target="_blank"
        rel="noopener noreferrer"
      >
        MERN Inventory APP
      </a>
    </h1>
    <h1>
      <a
        href="https://serenassite.gatsbyjs.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Individual Portfolio App
      </a>
    </h1>

    <h1>
      <a
        href="https://familykichen.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        WordPress APP
      </a>
    </h1>

    <h1>
      <a
        href="https://github.com/sjiang20/CS6300"
        target="_blank"
        rel="noopener noreferrer"
      >
        To-Do List APP
      </a>
    </h1>
    <h1>
      <a
        href="https://github.com/sjiang20/CS6300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Android Job Comparison APP
      </a>
    </h1>
    {/* </div>
    </div> */}
  </Layout>
);

export default blog;
