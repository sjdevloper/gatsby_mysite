import * as React from "react"
import Img from "gatsby-image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faLinkedin,
        faTwitterSquare,
      } from '@fortawesome/free-brands-svg-icons';


import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/contact.css"
import serena from"../images/shanshan.png"




const contact = () => (
  <Layout>
    <Seo title="contact" />



    <div class="contact-me">
      <img class="mypic" src={serena} alt="serena" />

      <p class="contact-message"> Questions?</p>
      <a class="btn" href="mailto: sjiang086@gmail.com">Email Me</a>

      <div class="social">

       <a href="https://www.linkedin.com/in/jiang1028" > <FontAwesomeIcon icon={faTwitterSquare} />  </a>
        <a href="https://www.linkedin.com/in/jiang1028" ><FontAwesomeIcon icon={faLinkedin} /> </a>


      </div>



    </div>



  </Layout>
)

export default contact
