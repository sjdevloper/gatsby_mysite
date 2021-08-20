/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'


import Nav from './Nav'
import Footer from './Footer'

import '../style.css'
import '../new-moon.css'

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
       
      </Helmet>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
