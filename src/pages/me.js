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
                  <span class="flag">College Math Tutor</span>
                  <span class="time-wrapper"><span class="time">2016 - 2016</span></span>
                </div>
                <div class="desc">My first job to learn English and Communication in US</div>
              </div>
            </li>
  
            

         
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Georgia Institute of Technology</span>
                  <span class="time-wrapper"><span class="time">2018 - 2020</span></span>
                </div>
                <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
              </div>
            </li>

        
        </ul>

         
  </Layout>
)

export default me