import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
// import { Link } from "react-scroll";
// import LinksCarousel from "./LinksCarousel";
// import { FaReact } from 'react-icons/fa';
// import { SiJavascript, SiRails, SiCss3, SiRuby, SiHtml5, SiAdobepremiere, SiAdobephotoshop } from 'react-icons/si';


const Links = () => {




    return (
        <div id="services" className="services">
            {/* <h1 className="py-5">Links</h1> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank" rel="noReferrer"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" />
                                        </div>
                                        <h3>LinkedIn</h3>
                                    </div> 
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://github.com/DanielYankiver" target="_blank" rel="noReferrer">
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                                        </div>
                                        <h3>Github</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="https://danielyankiver.medium.com/" target="_blank" rel="noReferrer"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faMediumM} size="2x" />
                                        </div>
                                        <h3>Medium</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <a href="http://www.danielyankiver.video" target="_blank" rel="noReferrer">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faVideo} size="2x" />
                                        </div>
                                        <h3>Video Work</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <div className="carousel">
                <LinksCarousel />
            </div> */}
                {/* <div className="skils-icons" className="d-flex justify-content-center">
                    <div className="skills-icons">
                        <h1><FaReact /></h1>
                        <h5>React</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiJavascript /></h1>
                        <h5>Javascript</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiRuby /></h1>
                        <h5>Ruby</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiRails /></h1>
                        <h5>Ruby on Rails</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiCss3 /></h1>
                        <h5>CSS</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiHtml5 /></h1>
                        <h5>HTML</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiAdobepremiere /></h1>
                        <h5>Adobe Premiere</h5>
                    </div>
                    <div className="skills-icons">
                        <h1><SiAdobephotoshop /></h1>
                        <h5>Adobe Photoshop</h5>
                    </div>
                </div> */}
                
        </div>  
    )
}

export default Links
