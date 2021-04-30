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
                        {/* <div className="d-flex">
                            <p>....................LOGO..................</p>
                        </div> 
                        <div className="d-flex">
                            <p>....................LOGO..................</p>
                        </div>
                        <div className="d-flex">
                            <p>....................LOGO..................</p>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
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
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                                <h3><SiLinkedin className="social-links" /></h3>
                                <h3><SiGithub className="social-links" /></h3>
                                <h3><SiMedium className="social-links" /></h3>
                                <h3><SiVimeo className="social-links" /></h3>
                            {/* <FacebookShareButton
                                url={"https://www.youtube.com/channel/UC8Sh6sjg6YfzI_v99cQO4nA"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.youtube.com/channel/UC8Sh6sjg6YfzI_v99cQO4nA"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.youtube.com/channel/UC8Sh6sjg6YfzI_v99cQO4nA"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.youtube.com/channel/UC8Sh6sjg6YfzI_v99cQO4nA"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>   */}
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Daniel Yankiver | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
