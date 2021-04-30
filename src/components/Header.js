import React from "react"
import Typed from "react-typed"
import { Link } from "react-scroll";

import SkillsCarousel from "./SkillsCarousel";



const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
                <div id="home" className="main-info">
                    <h1>Daniel Yankiver</h1>
                    <Typed 
                        className="typed-text"
                        strings={["Software Engineer", "Filmmaker"]}
                        typeSpeed={45}
                        backSpeed={65}
                        loop
                    />
                    <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact Me</Link>
                </div>
            </div>
            <div className="container">
                {/* <div className="testimonials-content">
                    <SkillsCarousel />
                </div> */}
            </div>
        </div>
    )
}

export default Header
