import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            {/* <a href="tel:555-555-5555">+7(960)555-5555</a> */}
                            <p>..........................................</p>
                        </div> 
                        <div className="d-flex">
                            <p>..........................................</p>
                        </div>
                        <div className="d-flex">
                            <p>© 2021 By Daniel Yankiver</p>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default Footer
