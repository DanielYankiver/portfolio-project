import React from 'react'
import Links from "./Links"
import SkillsCarousel from "./SkillsCarousel"

const Skills = () => {
    return (
        <div>
        <div id="testimonials" className="testimonials">
            <h1>Skills & Links</h1>
            <div className="container">
                <div className="testimonials-content">
                    <SkillsCarousel />
                </div>
            </div>
        </div>
        <Links />
        </div>
    )
}

export default Skills