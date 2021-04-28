import React from "react"
import Typed from "react-typed"
import {Link} from "react-scroll";

const Header = () => {
    return (
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
    )
}

export default Header
