import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiRails, SiCss3, SiRuby, SiHtml5, SiAdobepremiere, SiAdobephotoshop } from 'react-icons/si';

const LinksCarousel = () => {
    return (
        <div className="carousel-div">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                // autoPlay={true}
                interval={3000}
            >
                <>
                    <div className="linksCarousel">
                        <h1><FaReact /></h1>
                        <h3>React</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiJavascript /></h1>
                        <h3>Javascript</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiRuby /></h1>
                        <h3>Ruby</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiRails /></h1>
                        <h3>Ruby on Rails</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiCss3 /></h1>
                        <h3>CSS</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiHtml5 /></h1>
                        <h3>HTML</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiAdobepremiere /></h1>
                        <h3>Adobe Premiere</h3>
                    </div>
                </>
                <>
                    <div className="linksCarousel">
                        <h1><SiAdobephotoshop /></h1>
                        <h3>Adobe Photoshop</h3>
                    </div>
                </>
            </Carousel>
        </div>
    )
}

export default LinksCarousel