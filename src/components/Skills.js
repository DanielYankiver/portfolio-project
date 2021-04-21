import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons"

const Skills = () => {
    return (
        <div className="services">
            <h1 className="py-5">Languages - Frameworks - Technologies</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>React</h3>
                                <p>
                                    I approach each project individually 
                                    and always focus on the result. 
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3>Javascript</h3>
                                <p>
                                    Your website will be built with a new and
                                    proven technologies.
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                                </div>
                                <h3>Ruby on Rails</h3>
                                <p>
                                    Check out my blogs about what I am 
                                    learning, doing and discovering 
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                </div>
                                <h3>CSS</h3>
                                <p>
                                    As a filmmaker I have a keen eye for design and
                                    I am a great stroy-teller 
                                </p>
                            </div>
                        </div>
                        {/* - */}
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
                        {/* - */}
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
                        {/* - */}
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
                    </div>
                </div>
        </div>  
    )
}

export default Skills
