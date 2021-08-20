import * as React from "react"



import Layout from "../components/layout"
import Seo from "../components/seo"
import Gif from '../components/gif'
// import shanshan from '../images/cs.gif'
import "../components/projects.css"








const projects = () => (
  <Layout>
    <Seo title="Projects"/>
    <Gif title="Selected Projects">
        <p>
          All my projects come from both school courses and bootcamp on Udemy.
           In Addition to project from school cannot be public. other codes can be found in  <a
            href="https://github.com/sjiang20"
            target="_blank"
            rel="noopener noreferrer"
          > GitHub</a>. 
          
        </p>
    </Gif>


           <div class="timeline">
              <div class="container1 left">
                <div class="date">15 Dec</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>

        <div class="container1 right">
          <div class="date">22 Oct</div>
            <i class="icon fa fa-gift"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container1 left">
          <div class="date">10 Jul</div>
          <i class="icon fa fa-user"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container1 right">
          <div class="date">18 May</div>
          <i class="icon fa fa-running"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container1 left">
          <div class="date">10 Feb</div>
          <i class="icon fa fa-cog"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container1 right">
          <div class="date">01 Jan</div>
          <i class="icon fa fa-certificate"></i>
          <div class="content">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>


        <div class="container1 left">
                <div class="date">15 Dec</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                  </p>
                </div>
              </div>
      </div>

          </Layout>

          





    

)

export default projects