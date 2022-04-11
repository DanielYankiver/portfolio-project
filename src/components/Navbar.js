import React from "react";
// import logo from "../logo.png";
import minLogo from "../dy-minimal-labyrinth-logo.png"
import {Link} from "react-scroll";
// REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
//RESUME 
import Resume from '../Resume.pdf';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top"> 
            <div className="container">
                <Link smooth={true} to="home" offset={-110} className="navbar-brand"><img className="logo" src={minLogo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#B3B3B3" }}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
                        </li>    
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li>    
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#">Skills & Links</Link>
                        </li>   
                        {/* <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>    */}
                    </ul>
                <br></br>
                </div>
                <div className="resume">
                    <a className="resume-a"href={Resume} target="_blank" rel="noReferrer">Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
