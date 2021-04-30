import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FaReact } from "@react-icons/FaReact"
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiRails, SiCss3, SiRuby, SiHtml5, SiAdobepremiere, SiAdobephotoshop } from 'react-icons/si';


// AVATAR IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const SkillsCarousel = () => {
    return (
        <div className="carousel-div">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                <>
                    {/* <img src={avatar1} alt="John Doe 1"/> */}
                    <div className="myCarousel">
                        <h3><FaReact /></h3>
                        <h3>React</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar2} alt="Jane Doe 2"/> */}
                    <div className="myCarousel">
                        <h3><SiJavascript /></h3>
                        <h3>Javascript</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar3} alt="John Doe 3"/> */}
                    <div className="myCarousel">
                        <h3><SiRuby /></h3>
                        <h3>Ruby</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar4} alt="John Doe 4"/> */}
                    <div className="myCarousel">
                        <h3><SiRails /></h3>
                        <h3>Ruby on Rails</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar4} alt="John Doe 4"/> */}
                    <div className="myCarousel">
                        <h3><SiCss3 /></h3>
                        <h3>CSS</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar4} alt="John Doe 4"/> */}
                    <div className="myCarousel">
                        <h3><SiHtml5 /></h3>
                        <h3>HTML</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar4} alt="John Doe 4"/> */}
                    <div className="myCarousel">
                        <h3><SiAdobepremiere /></h3>
                        <h3>Adobe Premiere</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
                <>
                    {/* <img src={avatar4} alt="John Doe 4"/> */}
                    <div className="myCarousel">
                        <h3><SiAdobephotoshop /></h3>
                        <h3>Adobe Photoshop</h3>
                        {/* <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Iste aspernatur distinctio quae nostrum laborum doloremque 
                            assumenda excepturi, quibusdam omnis fuga!
                        </p> */}
                    </div>
                </>
            </Carousel>
        </div>
    )
}

export default SkillsCarousel
