import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Blog from '../components/blog'
import {Carousel} from 'react-bootstrap';

import slide01 from"../images/slide01.jpeg"
import slide02 from"../images/slide02.jpeg"
import slide03 from"../images/slide03.jpeg"

const blog = () => (
  <Layout>
    <Seo title="blog" />
     
    
    <Blog>
    <p>I read documents, software sources then write code most of my days. 
    README files of each project are my entry points to <a href="https://github.com/sjiang20">"blog"</a> new software all day long.</p>
     
    </Blog>

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





