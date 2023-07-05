import React from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="portofolio">

        <h2 className="section__title">Portofolio</h2>
        <span className="section__subtitle">Most Recent Projects</span>
        <Works/>
    </section>
  )
}

export default Work