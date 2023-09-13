import React from 'react'
import "../skills/skills.css"
import Backend from './Backend'
import  Front  from './Front'




const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical level</span>

        <div className="skills__container container grid">
            <Front/>
            <Backend/>
             
        </div>
    </section>
  )
}

export default Skills