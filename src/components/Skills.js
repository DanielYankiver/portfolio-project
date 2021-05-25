import React from 'react'
import Links from "./Links"
import SkillsCarousel from "./SkillsCarousel"

const Skills = () => {
    return (
        <div>
        <div id="skills" className="skills">
            <h1>Skills & Links</h1>
            <div className="container">
                <div className="skills-content">
                    <SkillsCarousel />
                </div>
            </div>
        </div>
        <Links />
        </div>
    )
}

export default Skills