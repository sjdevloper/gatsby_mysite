import React from 'react'
import shanshan from '../images/bg.png'



export default function Blog({ title, children, img }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={shanshan} alt="s" className="avatar" />
        </div>
      </div>
    </section>
  )
}