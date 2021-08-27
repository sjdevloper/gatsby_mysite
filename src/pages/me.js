import * as React from "react"

// import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/me.css"







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
                  <span class="flag">Looking for a Full-time job</span>
                  <span class="time-wrapper"><span class="time">2021 - present</span></span>
                </div>
                <div class="desc">I'm ready for working</div>
              </div>
            </li>
            
               <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">Georgia Institute of Technology</span>
                  <span class="time-wrapper"><span class="time">2018 - 2020</span></span>
                </div>
                <div class="desc">I majored in computer science and got my master's degree from here.</div>
              </div>
            </li>
  
            

         
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">College Math Tutor</span>
                  <span class="time-wrapper"><span class="time">2016</span></span>
                </div>
                <div class="desc">My first job to learn English and Communication in US</div>
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
)

export default me