import React from "react"
import Typed from "react-typed"
import { Link } from "react-scroll";



const Header = () => {
    return (
        <div> 
            <div className="header-wrapper">
                <div id="home" className="main-info">
                    <h1>Daniel Yankiver</h1>
                    <Typed 
                        className="typed-text"
                        strings={["Software Engineer", "Frontend Developer", "Fullstack Engineer", "Filmmaker", "Creative", ]}
                        typeSpeed={45}
                        backSpeed={65}
                        loop
                    />
                    <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
