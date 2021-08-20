import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <a
            href="https://github.com/sjiang20"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/projects">Projects</Link>
          <Link to="/news"> Newsletter</Link>

          <Link to="/contact">Contact</Link>

          
        </nav>
      </section>
    </footer>
  )
}
