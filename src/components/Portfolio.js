import React from 'react'
import rocketfuel from "../images/rocketfuel.png";
import yourseum from "../images/yourseum.png";
import iQueue from "../images/iQueue.png";
import friendSend from "../images/friendsend.png";
// FONTAWESOME IMPORTS 
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearchPlus, faLaptopCode, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// REACT POPUPBOX
import {PopupboxManager, PopupboxContainer} from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
import Filmmaker from './Filmmaker';

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
                            Website
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
                            Website
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
    
    // iQueue
    const openPopupboxIQueue = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={iQueue} 
                    alt="iQueue"
                />
                <p>
                    A single page  application that allows users to make a custom queue of 
                    movies/shows and see what platform they are streaming on. 
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=ilGNd3QnpZQ", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/IQueue_frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/IQueue_backend" , "_blank")}>
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
                    text: "iQueue"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    
    // Task Manager Project
    const openPopupboxFriendSend = () => {
        const content = (
            <>
                <img 
                    className="portfolio-image-popupbox" 
                    src={friendSend} 
                    alt="FriendSend..."
                />
                <p>
                    Schedule texts to friends and family on their birthday 
                    and other special days. Integrated Twilio API to send 
                    automated messages to contacts.
                </p>
                <div className="popup-icons">
                    <div className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=06UijRSIz6Q", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faPlayCircle} />
                            Demo
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/DanielYankiver/Forget-Me-Not", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Github
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
                    text: "Friend Send"
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
                <h3 className="text-uppercase text-center py-5">software engineer</h3>
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
                    <div className="portfolio-image-box" onClick={openPopupboxIQueue}>
                        <img className="portfolio-image" src={iQueue} alt="iQueue..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxFriendSend}>
                        <img className="portfolio-image" src={friendSend} alt="Friend Send..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer />
            <Filmmaker />
        </div>
    )
}

export default Portfolio
