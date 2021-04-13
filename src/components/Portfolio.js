import React from 'react'
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
// REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // Netflix
    const openPopupboxNetflix = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={netflix} 
                    alt="Netflix Clone Project..."
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quasi ipsa sint quis. Iure velit incidunt corporis alias 
                    aliquam repudiandae? Sed.
                </p>
                <b>Demo: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
                <br/>
                <b>Github: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project "
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
   
    // City Guide App 
    const openPopupboxCityGuide = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={cityGuide} 
                    alt="City Guide Project..."
                />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quasi ipsa sint quis. Iure velit incidunt corporis alias 
                    aliquam repudiandae? Sed.
                </p>
                <b>Demo: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
                <br/>
                <b>Github: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide Project "
        },
        fadeIn: true,
        fadeInSpeed: 500
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
                <b>Demo: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
                <br/>
                <b>Github: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio Project "
        },
        fadeIn: true,
        fadeInSpeed: 500
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
                <b>Demo: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
                <br/>
                <b>Github: </b> 
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/DanielYankiver/rocket-fuel-frontend", "_blank")}
                >
                    https://github.com/DanielYankiver/rocket-fuel-frontend
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxTaskManager = {
        titleBar: {
            enable: true,
            text: "Portfolio Project "
        },
        fadeIn: true,
        fadeInSpeed: 500
    }




    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
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
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxPortfolio} />
            <PopupboxContainer {...popupboxTaskManager} />
        </div>
    )
}

export default Portfolio