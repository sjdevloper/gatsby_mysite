import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Gif from '../components/gif'
// import shanshan from '../images/cs.gif'
import shanshan from '../images/cs.gif'
import "../components/projects.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faLinkedin,
        faTwitterSquare,
      } from '@fortawesome/free-brands-svg-icons';



const projects = () => (
  <Layout>
    <Seo title="Projects"/>
   

          <div class="heading">
        <div>
          <h1 class="title1"> Selected Projects </h1>
          
        </div>
        <div>
          <img src={shanshan} alt="Shanshan" class="img1" />
        </div>
      </div>

          
         

           <div class="timeline">
              <div class="container1 left">
                <div class="date">2021</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2><p>(My projects)</p>Gatsby-My Site(Web Development)</h2>
                  <p>
                  I followed the most popular "my website" model through GitHub to build up my website. I used Gatsby Cloud to publish my website as App.
                  </p>
                </div>
              </div>

        <div class="container1 right">
          <div class="date">2020</div>
            <i class="icon fa fa-gift"></i>
          <div class="content">
            <h2><p>(Udemy Bootcamp)</p>My Site(Web Development)</h2>
            <p>
             I followed Dr. Angela Yu's Web Development Bootcamp course in Udemy to build my "website' using Node.js. I used Heroku to publish my website as App.
            </p>
          </div>
        </div>


        <div class="container1 left">
                <div class="date">2020</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2><p>(ClassProject)</p>Machine Learning(CS6741)</h2>
                  
                  <p>We learned the course by Using same data to train and learn different machine learning 
                      algorithm. Each algorithm has different advantage based on situation.
                      <li>Python</li>
                     
                      
            <a href="https://github.com/sjiang20/CS6741"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
                  </p>
                </div>
              </div>

        <div class="container1 right">
          <div class="date">2020</div>
            <i class="icon fa fa-gift"></i>
          <div class="content">
            <h2><p>(ClassTeamProject)</p>Job Offer Camparison App(CS6300)</h2>
            <p>
              Job Offer Comparison App* is an application that compares job offers with benefits, different locations, and
               other aspects beyond salary. This single-user app will provide users ease as they search for new jobs.
               <a
            href="https://github.com/sjiang20/CS6300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
            </p>
          </div>
        </div>

        <div class="container1 left">
                <div class="date">2019</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2><p>(ClassTeamProject)</p>Big Data for Health(CSE6250)</h2>
                  <p>
                  This project is trying to predict ICU readmission in 30 day using [mimic dataset].
                  </p>
                  <a
            href="https://github.com/sjiang20/CSE6250"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
                </div>
              </div>

        <div class="container1 right">
          <div class="date">2019</div>
            <i class="icon fa fa-gift"></i>
          <div class="content">
            <h2><p>(ClassTeamProject)</p>Individule Health Records(CS6440)</h2>
            <p>
              It was a team project of six. My main task is to build the frontend web page. I also helped to work with D3.js,
               HTML, SVG, and CSS to visualize data.<a
            href="https://github.com/sjiang20/CS6440"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
            </p>
          </div>
        </div>

        <div class="container1 left">
          <div class="date">2018</div>
          <i class="icon fa fa-user"></i>
          <div class="content">
            <h2><p>(ClassProject)</p>Using AI to Detect and Prevent Bullying on the School Bus(CS6460)</h2>
            <p>
              This is a related computer science "writing" class. Students need to choose a topic and have a proposal. 
              Then finding some useful articles to support the topic. My topic is Using AI to Detect and Prevent Bullying on the School Bus.
            </p>
            <li>Java</li>

            <a href="https:https://github.com/sjiang20/cs6460"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>

          </div>
        </div>
        <div class="container1 right">
          <div class="date">2017</div>
          <i class="icon fa fa-running"></i>
          <div class="content">
            <h2><p>(ClassProject)</p>Machine Learning for Trading(CS7646)</h2>
            <p>
              It is combination the machine and trading together. And it is a very intro. course about trading in computer science.
              <li>Python</li>
            </p>
          </div>
        </div>
        <div class="container1 left">
          <div class="date">2018</div>
          <i class="icon fa fa-cog"></i>
          <div class="content">
           <h2><p>(ClassProject)</p>Classification and Detection with Convolutional Neural Networks(CS6476)</h2>
            <p>It is using digital dataset SVHN combined 
            with a non-digital dataset which downloaded from the Flick.</p>
            <li>Python</li>

             <a href="https://github.com/sjiang20/CS6476"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
                      
          </div>
        </div>


       


        <div class="container1 right">
                <div class="date">2016</div>
                  <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2><p>(ClassTeamProject)</p>Interactive Students/Faculties Networking(CS425)</h2>
                  <p>
                    <ul class="word">
                      <li>Data access by JDBI/SQL/JDBC;</li>
                      <li>BackEnd: Java and Dropwizard as framework;</li>
                      <li>FrontEnd: HTML, CSS and Bootstrap create view, JavaScrip/JQuery as Model/Controller.<a
            href="https://github.com/sjiang20/CS425_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a></li>
                    </ul>
                    </p>
                </div>
              </div>
          </div>

          







       

          </Layout>

          





    

)

export default projects