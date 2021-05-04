import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon  
} from "react-share"

import { SiLinkedin, SiGithub, SiMedium, SiVimeo } from 'react-icons/si';
import minLogo from "../dy-minimal-labyrinth-logo.png"
import {Link} from "react-scroll";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <Link smooth={true} to="home" offset={-110} className="navbar-brand"><img className="logo-footer" src={minLogo} alt="logo"/></Link>
                    </div>
                    {/* <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About</a>
                                <br/>
                                <a className="footer-nav">Skills</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank">
                                    <h3><SiLinkedin className="social-links" /></h3>
                                </a>
                                <a href="https://github.com/DanielYankiver" target="_blank">
                                    <h3><SiGithub className="social-links" /></h3>
                                </a>
                                <a href="https://danielyankiver.medium.com/" target="_blank">
                                    <h3><SiMedium className="social-links" /></h3>
                                </a>
                                <a href="https://vimeo.com/danielyankiver" target="_blank">
                                    <h3><SiVimeo className="social-links" /></h3>
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
