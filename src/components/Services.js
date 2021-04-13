import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>Web Design</h3>
                                <p>
                                    I approach each project individually 
                                    and always focus on the result. 
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3>Web Development</h3>
                                <p>
                                    Your website will be built with a new and
                                    proven technologies.
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                                </div>
                                <h3>Blogs</h3>
                                <p>
                                    Check out my blogs about what I am 
                                    learning, doing and discovering 
                                </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6"> 
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                </div>
                                <h3>Filmmaker</h3>
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

export default Services
