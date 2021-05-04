import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn, faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode, faVideo } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll";

import LinksCarousel from "./LinksCarousel";

const Links = () => {




    return (
        <div id="services" className="services">
            {/* <h1 className="py-5"></h1> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://www.linkedin.com/in/daniel-yankiver/" target="_blank"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" />
                                        </div>
                                        <h3>LinkedIn</h3>
                                        {/* <div className="links-button-div">
                                            <button className="btn-links">Connect</button>
                                        </div> */}
                                        {/* <p>
                                            I approach each project individually 
                                            and always focus on the result. 
                                        </p> */}
                                    </div> 
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <a href="https://github.com/DanielYankiver" target="_blank">
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                                        </div>
                                        <h3>Github</h3>
                                        {/* <div className="links-button-div">
                                            <button className="btn-links">My Code</button>
                                        </div> */}
                                        {/* <p>
                                            Your website will be built with a new and
                                            proven technologies.
                                        </p> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <a href="https://danielyankiver.medium.com/" target="_blank"> 
                                <div className="box">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faMediumM} size="2x" />
                                        </div>
                                        <h3>Medium</h3>
                                        {/* <div className="links-button-div">
                                            <button className="btn-links">My Blogs</button>
                                        </div> */}
                                        {/* <p>
                                            Check out my blogs about what I am 
                                            learning, doing and discovering 
                                        </p> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <a href="http://www.danielyankiver.com" target="_blank">
                                    <div className="links-div">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faVideo} size="2x" />
                                        </div>
                                        <h3>Video Work</h3>
                                        {/* <div className="links-button-div">
                                            <button className="btn-links">Portfolio</button>
                                        </div> */}
                                        {/* <p>
                                            As a filmmaker I have a keen eye for design and
                                            I am a great stroy-teller 
                                        </p> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* 
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3>Ruby</h3>
                                <p>
                                    Your website will be built with a new and
                                    proven technologies.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                                </div>
                                <h3>HTML</h3>
                                <p>
                                    Check out my blogs about what I am 
                                    learning, doing and discovering 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                </div>
                                <h3>Adobe Premiere</h3>
                                <p>
                                    As a filmmaker I have a keen eye for design and
                                    I am a great stroy-teller 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                </div>
                                <h3>Adobe Photoshop</h3>
                                <p>
                                    As a filmmaker I have a keen eye for design and
                                    I am a great stroy-teller 
                                </p>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            <div className="carousel">
                <LinksCarousel />
            </div>
        </div>  
    )
}

export default Links
