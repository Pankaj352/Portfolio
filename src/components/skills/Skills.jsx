import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical level</span>
        <div className="skills_container container grid">
            <Frontend />
            {/* <Backend />
            <Database/> */}
        </div>
    </section>
  )
}

export default Skills
