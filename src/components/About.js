import React from "react";
import headshot from "../my-photo.jpg";
// import LinksCarousel from "./LinksCarousel";
// import { FaReact } from 'react-icons/fa';
// import { SiJavascript, SiRails, SiCss3, SiRuby, SiHtml5, SiAdobepremiere, SiAdobephotoshop } from 'react-icons/si';


const About = () => {
    return (
        <div id="about">
            <div className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                   <div className="photo-wrap mb-5">
                       <img className="profile-img" src={headshot} alt="Headshot"/>
                   </div>
               </div>
               <div className="col-lg-6 col-xm-12">
                   <h1 className="about-heading">about me</h1>
                   <p className="p-about">
                      I'm a creative software engineer with with experience building applications with Javascript, Typescript, React, Next.js, GraphQL, Node.js, CSS, HTML, Ruby, Rails and RESTful API architecture.
                   </p>
                   <p className="p-about">
                      Dynamic thinker with a background in Film and TV Production. Programmer with strong skills in team-building, project management, debugging, design, and code optimization. Full-stack developer with projects that incorporate frontend and backend development with robust user interfaces (UI) that use efficient code to solve real-world problems.  
                   </p> 
                   {/* <LinksCarousel className="about-carousel"/> */}
               </div>
               {/* <div className="icon-div" className="row">
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><FaReact /></h1>
                            <h3>React</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiJavascript /></h1>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiRuby /></h1>
                            <h3>Ruby</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiRails /></h1>
                            <h3>Ruby on Rails</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiCss3 /></h1>
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiHtml5 /></h1>
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiAdobepremiere /></h1>
                            <h3>Adobe Premiere</h3>
                        </div>
                    </div>
                    <div className="icons" className="col-lg-3 col-md-6 col-sm-6">
                        <div className="skill-icons">
                            <h1><SiAdobephotoshop /></h1>
                            <h3>Adobe Photoshop</h3>
                        </div>                
                    </div>
                </div> */}
                </div>
            </div>
        </div>
        
    )
}

export default About
