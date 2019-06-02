import React, { Component } from 'react';
import './Timeline.css';
import Arrow from './Arrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

class Timeline extends Component {

    // render():
    render() {
        return (
            <div id="timeline-page" className="page-content">
                <div className="page-control-left">
                    <Arrow 
                        direction="left" 
                        path="/portfolio"
                        targetText="portfolio"
                        onClick={ this.doClick }
                    />
                </div>
                <div className="main-content">
                    <h1 className="page-title">Timeline</h1>
                    <div className="timeline">
                    <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="big-circle">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Apr. 2019</span>
                                        Recevied Degree: Bachelor of Computing and Financial Management (CFM)
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p></p>
                                        </div>
                                        <div className="tags">
                                            <p></p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="circle"></div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Sep. 2019</span>
                                        Developer - Ctrl V
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p>Interned at a Virtual Reality Arcade as a developer. I worked on the booking software,
                                                spending majority of my time on the desktop GUI, both frontend and backend of the website.
                                                Gained a little bit of exposure to Unity development as well!
                                            </p>
                                        </div>
                                        <div className="tags">
                                            <p>
                                                <span>Qt</span>
                                                <span>C++</span>
                                                <span>Node.js</span>
                                                <span>Express</span>
                                                <span>PostgreSQL</span>
                                                <span>Unity</span>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="circle"></div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Jan. 2018</span>
                                        Automation Developer - Unata
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p>Landed my first tech internship! Spent most of the time automating test cases on the frontend by
                                                writing Robot Framework scripts. Unata was so successful it got acquired by
                                                Instacart 3 weeks after I started the internship.
                                            </p>
                                        </div>
                                        <div className="tags">
                                            <p>
                                                <span>Robot Framework</span>
                                                <span>Selenium WebDriver</span>
                                                <span>Python</span>
                                                <span>Javascript</span>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="circle"></div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Jan. 2017</span>
                                        Equity Research - Cambridge Global Asset Management
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p>Worked as a trading assistant at a buy-side investment firm. Other than performing
                                                industry analyses, I spent time developing Excel spreadsheets and writing VBA macros 
                                                to analyze trade P/L and portfolio risks.
                                            </p>
                                        </div>
                                        <div className="tags">
                                            <p>
                                                <span>VBA</span>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="big-circle">
                                        <FontAwesomeIcon icon={faSyncAlt} />
                                    </div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Jan. 2016</span>
                                        Program switch from AFM to CFM
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p></p>
                                        </div>
                                        <div className="tags">
                                            <p></p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="top">
                                <div className="top-left">
                                    <div className="hline-invisible"></div>
                                    <div className="big-circle">
                                        <FontAwesomeIcon icon={faSchool} />
                                    </div>
                                    <div className="hline"></div>
                                </div>
                                <div className="top-right">
                                    <div className="item-heading">
                                        <span className="date">Sep. 2013</span>
                                        Started University: Accounting and Financial Management (AFM)
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-left">
                                    <div className="vline"></div>
                                </div>
                                <div className="bottom-right">
                                    <div className="item-content">
                                        <div className="description">
                                            <p></p>
                                        </div>
                                        <div className="tags">
                                            <p></p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="page-control-right">
                    <Arrow 
                        direction="right"
                        path="/"
                        targetText="home"
                        onClick={ this.doClick }
                    />
                </div>
            </div>
        );
    }

}

export default Timeline;