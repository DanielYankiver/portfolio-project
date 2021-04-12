import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Website Promotions </h1>
                <Typed 
                    className="typed-text"
                    strings={["Software Engineer", "Full-Stack Developer", "Filmmaker", "React", "Javascript", "CSS", "Ruby on Rails"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
