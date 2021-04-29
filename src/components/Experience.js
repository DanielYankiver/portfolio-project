import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Software Engineer</h3>
                        <h4>Flatiron School</h4>
                        <h6>( Nov 2020 - Mar 2021 )</h6>
                        <p>
                        Software Engineering Immersive Program designed to equip 
                        students with the skills necessary to launch careers in 
                        tech. This program includes three months of intensive, 
                        full-time training some of this training included 
                        classes/lectures, individual, pair and group programming 
                        projects, code challenges, presentations and more.
                        </p>
                        <p>
                            The curriculum encompasses a variety of languages, 
                            frameworks, and libraries in-depth, such as Ruby, 
                            Rails, SQL, PostgreSQL, JavaScript, React, Redux, 
                            Git, HTML, and CSS.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Lead Content Producer (Digital)</h3>
                        <h4>Sinclair Broadcast Group</h4>
                        <h6>( Jun 2017 – Mar 2020 )</h6>
                        <p>
                            Lead the content development and digital division for 
                            kids & family at Sinclair across all digital outlets 
                            (web, mobile, apps).
                        </p>
                        <p>
                            Approved content for purchase, conceptualized digital 
                            strategy, managed a team of developers, negotiated content 
                            acquisitions and oversaw rollout of all digital platforms.
                        </p>
                        <p>
                            Managed and maintained all digital outlets, while improving 
                            retention and revenue across all platforms by 300%.
                        </p>                    
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Independent Filmmaker</h3>
                        <h4>Director, Producer, Writer & Editor</h4>
                        <h6>( Jun 2006 - Jul 2017 )</h6>
                        <p>
                            Directed, produced, shot, edited and wrote award-winning 
                            films, commercials,  music videos, documentaries and video 
                            art. 
                        </p>
                        <p>
                            Clients included production companies, arts foundations, 
                            video platforms, distribution companies, etc.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Film & TV Production</h3>
                        <h4>New York University (BFA)</h4>
                        <h6>Sept 2007- Jun 2011</h6>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit voluptatibus sed consequuntur? Officiis dolor est nemo mollitia quod dolore quam, ducimus inventore atque culpa, neque odio, asperiores dolores dicta!
                        </p>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Experience
