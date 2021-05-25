import React from 'react'
import { SiLinkedin, SiGithub, SiMedium, SiVimeo } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';
import minLogo from "../dy-minimal-labyrinth-logo.png"
import {Link} from "react-scroll";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Link smooth={true} to="home" offset={-110} className="navbar-brand"><img className="logo-footer"  src={minLogo} alt="logo"/></Link>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noReferrer">
                                    <h3><SiLinkedin className="social-links" /></h3>
                                </a>
                                <a href="https://github.com/DanielYankiver" target="_blank" rel="noReferrer">
                                    <h3><SiGithub className="social-links" /></h3>
                                </a>
                                <a href="https://danielyankiver.medium.com/" target="_blank" rel="noReferrer">
                                    <h3><SiMedium className="social-links" /></h3>
                                </a>
                                <a href="https://vimeo.com/danielyankiver" target="_blank" rel="noReferrer">
                                    <h3><SiVimeo className="social-links" /></h3>
                                </a>
                                <a href="http://www.danielyankiver.video/" target="_blank" rel="noReferrer">
                                    <h3><FaVideo className="social-links" /></h3>
                                </a>
                        </div>
                        <p className="pt-3 text-center">
                            &copy;
                            {new Date().getFullYear()}&nbsp;by Daniel Yankiver 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
