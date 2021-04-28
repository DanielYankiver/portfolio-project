import React from "react"
import Typed from "react-typed"

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
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
