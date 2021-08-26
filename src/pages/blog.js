import * as React from "react"


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

    <div>
           <p class="blog">Explore More in<a href="https://github.com/sjiang20" target="_blank">"BLOG"</a>and check the<a href="#skill">"SKILL"</a></p>
    </div>

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
)

export default blog





