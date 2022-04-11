import React from "react"
import Typed from "react-typed"
// import { Link } from "react-scroll";
import headshot from "../my-photo.jpg";
import { SiLinkedin, SiGithub, SiMedium, SiVimeo } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';




const Header = () => {
    return (
        <div> 
          <div className="header-wrapper">
            <div id="home" className="container py-5">
              <div className="row">
                <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap-header mb-5">
                    <img className="profile-img" src={headshot} alt="Headshot"/>
                  </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                  <div id="home" className="main-info">
                    <h1>Daniel Yankiver</h1>
                    <Typed 
                        className="typed-text"
                        strings={["Software Engineer", "Frontend Developer", "Fullstack Engineer", "Filmmaker"]}
                        typeSpeed={45}
                        backSpeed={65}
                        loop
                    />
                    {/* <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact Me</Link> */}
                  </div>
                  <div className="header-socials">
                        <div className="d-flex justify-content-center">
                                <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noopener noreferrer">
                                    <h3><SiLinkedin className="social-links" /></h3>
                                </a>
                                <a href="https://github.com/DanielYankiver" target="_blank" rel="noopener noreferrer">
                                    <h3><SiGithub className="social-links" /></h3>
                                </a>
                                <a href="https://danielyankiver.medium.com/" target="_blank" rel="noopener noreferrer">
                                    <h3><SiMedium className="social-links" /></h3>
                                </a>
                                <a href="https://vimeo.com/danielyankiver" target="_blank" rel="noopener noreferrer">
                                    <h3><SiVimeo className="social-links" /></h3>
                                </a>
                                <a href="http://www.danielyankiver.video/" target="_blank" rel="noopener noreferrer">
                                    <h3><FaVideo className="social-links" /></h3>
                                </a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header
