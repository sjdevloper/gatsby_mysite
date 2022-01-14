import * as React from "react"
import { Link } from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"

import {Carousel} from 'react-bootstrap';

import slide01 from"../images/slide01.jpeg"
import slide02 from"../images/slide02.jpeg"
import slide03 from"../images/slide03.jpeg"

import "../components/blog.css"

const blog = () => (
  <Layout>
    <Seo title="blog" />


    <div>
          <p class="blog"><a href="https://sjiang20.github.io/" target="_blank"><h1> Click Here </h1></a></p>
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


  </Layout>
)

export default blog
