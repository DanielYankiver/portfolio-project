import React from 'react'
import rocketfuel from "../images/rocketfuel.png";
import yourseum from "../images/yourseum.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS 
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearchPlus, faLaptopCode, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // Rocket Fuel
    const openPopupBoxRocketFuel = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={rocketfuel} 
                    alt="Rocket Fuel Project..."
                />
                <p>
                    A React application that brings you aboard a spaceship where you 
                    can visit planets, parts of the universe and beyond. 
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://rocket-fuel.netlify.app/", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Live Site
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=k1HXlsCTqyE", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Rocket Fuel"
                },
                fadeIn: true,
                fadeInSpeed: 500
            } 
        })
    }
   
    // Yourseum 
    const openPopupboxYourseum = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={yourseum} 
                    alt="Yourseum..."
                />
                <p>
                A React application that takes favorite masterpieces out of the 
                museum and places curated selections on a users screen. 
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://yourseum.netlify.app/", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Live Site
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=7yLNN42_IxE", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/yourseum_frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/yourseum_backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Yourseum"
                },
                fadeIn: true,
                fadeInSpeed: 500
            } 
        })
    }
    
    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={portfolio} 
                    alt="Portfolio Project..."
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quasi ipsa sint quis. Iure velit incidunt corporis alias 
                    aliquam repudiandae? Sed.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Live Site
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=k1HXlsCTqyE", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Portfolio Project "
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    
    // Task Manager Project
    const openPopupboxTaskManager = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={taskManager} 
                    alt="Task Manager Project..."
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quasi ipsa sint quis. Iure velit incidunt corporis alias 
                    aliquam repudiandae? Sed.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faLaptopCode} />
                            Live Site
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=k1HXlsCTqyE", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Portfolio Project "
                },
                fadeIn: true,
                fadeInSpeed: 500     
            }
        })
    }

    
        




    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupBoxRocketFuel}>
                        <img className="portfolio-image" src={rocketfuel} alt="Rocket Fuel..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxYourseum}>
                        <img className="portfolio-image" src={yourseum} alt="Yourseum..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="Portfolio Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer />
            {/* <h1 className="text-uppercase text-center py-5">Filmmaker Reel</h1>
            <div className="image-box-wrapper row justify-content-center">
                <iframe
                    className="reel" 
                    src="https://player.vimeo.com/video/375538495" 
                    // width="400" 
                    // height="180" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
            </div> */}
        </div>
    )
}

export default Portfolio
