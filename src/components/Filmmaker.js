import React from 'react'

const Filmmaker = () => {
    return (
        <div id="filmmaker" className="filmmaker-wrapper">
            <h1 className="text-uppercase text-center py-5"> Reel</h1>
            <div className="image-box-wrapper row justify-content-center">
                <iframe
                    className="reel" 
                    src="https://player.vimeo.com/video/375538495" 
                    width="400" 
                    height="180" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default Filmmaker
