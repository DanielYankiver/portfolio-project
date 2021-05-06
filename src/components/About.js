import React from "react";
import headshot from "../my-photo.jpg";
import LinksCarousel from "./LinksCarousel";

const About = () => {
    return (
        <div id="about">
            <div className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                   <div className="photo-wrap mb-5">
                       <img className="profile-img" src={headshot} alt="Headshot"/>
                   </div>
                   <LinksCarousel className="about-carousel"/>
               </div>
               <div className="col-lg-6 col-xm-12">
                   <h1 className="about-heading">about me</h1>
                   <p className="p-about">
                       Passionate full-stack web developer with experience building 
                       applications with React, Javascript, Ruby, Rails, SQL databases, 
                       CSS, HTML and RESTful API architecture. Innovative thinker with 
                       a background in Film and TV Production. Programmer with strong 
                       skills in team-building, project management, debugging, and code 
                       optimization. Software Engineer with projects that incorporate 
                       front-end and back-end development with robust user interfaces 
                       (UI) that use efficient code to solve real-world problems.
                   </p>
               </div>
            </div>
            </div>
        </div>
        
    )
}

export default About
