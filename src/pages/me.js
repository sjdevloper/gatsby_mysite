import * as React from "react";

// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/me.css";

const me = () => (
  <Layout>
    <Seo title="Me" />
    <div class="example1">
      <h3>I believe websites can change people's lives...is that crazy? </h3>
    </div>

    <ul class="timeline1">
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">
              Udemy: The Complete 2022 Web Development Bootcamp
            </span>
            <span class="time-wrapper">
              <span class="time">Jan 2022 -Apr 2022</span>
            </span>
          </div>
          <div class="desc">
            {" "}
            It covers a massive amount of tools and technologies, including:It
            covers a massive amount of tools and technologies, including:
            ContentFront-End Web Development, HTML5, CSS3, Bootstrap4,
            JavascriptES6, DOM Manipulation, jQuery, Bash Command Line, Git,
            GitHub and Version Control, Backend Web Development, Node.js, NPM,
            Express.js, EJS, REST, APIs Databases, SQL, MongoDB, Mongoose,
            Authentication, Firebase, React.js, React Hooks, Web Design,
            Deployment with GitHub Pages, Heroku and MongoDB Atlas, Web3
            Development on the Internet Computer, Blockchain technology, Token
            contract development, NFT minting, buying and selling logic.{" "}
          </div>
        </div>
      </li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Web Development Intern</span>
            <span class="time-wrapper">
              <span class="time">Jan 2022 -Apr 2022</span>
            </span>
          </div>
          <div class="desc">
            {" "}
            I got my first web development job. It was an intership to build and
            maintain the officla website for showing and selling products . I
            collaborated with a team of 3 other people and was motivated to work
            with them on the task. For example, I took initiative to graph and
            code the functional webpage and participated in the weekly meeting,
            and give reports about each week’s progress. I leart a lot from this
            experience.{" "}
          </div>
        </div>
      </li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Web Development Intern</span>
            <span class="time-wrapper">
              <span class="time">Jan 2022 -Apr 2022</span>
            </span>
          </div>
          <div class="desc">
            {" "}
            I got my first web development job. It was an intership to build and
            maintain the officla website for showing and selling products . I
            collaborated with a team of 3 other people and was motivated to work
            with them on the task. For example, I took initiative to graph and
            code the functional webpage and participated in the weekly meeting,
            and give reports about each week’s progress. I leart a lot from this
            experience.{" "}
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">
              Looking for a Full-time Front-End (remote)job
            </span>
            <span class="time-wrapper">
              <span class="time">2022 - present</span>
            </span>
          </div>
          <div class="desc">
            My main technology are React, JavaScript, HTML, CSS, NodeJs{" "}
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Georgia Institute of Technology</span>
            <span class="time-wrapper">
              <span class="time">2018 - 2020</span>
            </span>
          </div>
          <div class="desc">
            I majored in computer science and got my master's degree from here.
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">College Math Tutor</span>
            <span class="time-wrapper">
              <span class="time">2016</span>
            </span>
          </div>
          <div class="desc">
            My first job to learn English and Communication in US
          </div>
        </div>
      </li>
    </ul>

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
  </Layout>
);

export default me;
