import React, { Component } from 'react';
import './Portfolio.css';
import typeReadImage from '../images/type-read.png';
import pictorialImage from '../images/project-pictorial.png';
import dinoGameImage from '../images/project-DinoGame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Arrow from './Arrow';

class Portfolio extends Component {

    // render():
    render() {
        return (
            <div id="portfolio-page" className="page-content">
                <div className="page-control-left">
                    <Arrow 
                        direction="left" 
                        path="/portfolio"
                        targetText="home"
                        onClick={ this.doClick }
                    />
                </div>
                <div className="main-content">
                    <div className="portfolio">
                        <h1 className="page-title">Developer Portfolio</h1>
                        <div className="projects">
                            <figure className="project-item">
                                <a href="https://github.com/ccnlui/DinoGame">
                                    <img src={dinoGameImage} alt="project-DinoGame.png"></img>
                                    <div className="image-overlay">
                                        <img src={typeReadImage} alt="type-read.png"></img>
                                    </div>
                                </a>
                                <figcaption>
                                    <strong>Dino Game</strong>
                                    <span>Clone of the Google Chrome's Dinosaur game</span>
                                </figcaption>
                            </figure>
                            <figure className="project-item">
                                <a href="https://github.com/ccnlui/MarioClone">
                                    <img src={pictorialImage} alt="pictorial.png"></img>
                                    <div className="image-overlay">
                                        <img src={typeReadImage} alt="type-read.png"></img>
                                    </div>
                                </a>
                                <figcaption>
                                    <strong>Super Mario</strong>
                                    <span>A random level of the Super Mario game</span>
                                </figcaption>
                            </figure>
                            <figure className="project-item">
                                <a href="https://github.com/ccnlui/Fotag">
                                    <img src={pictorialImage} alt="pictorial.png"></img>
                                    <div className="image-overlay">
                                        <img src={typeReadImage} alt="type-read.png"></img>
                                    </div>
                                </a>
                                <figcaption>
                                    <strong>Fotag</strong>
                                    <span>Android mobile app that can rate photos</span>
                                </figcaption>
                            </figure>
                            <figure className="project-item">
                                <a href="https://github.com/ccnlui/Chess2D">
                                    <img src={pictorialImage} alt="pictorial.png"></img>
                                    <div className="image-overlay">
                                        <img src={typeReadImage} alt="type-read.png"></img>
                                    </div>
                                </a>
                                <figcaption>
                                    <strong>2D Chess</strong>
                                    <span>Simple multiplayer chess game made in Unity</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="more">
                        <a className="button">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />&nbsp;Contact me
                        </a>
                    </div>
                </div>
                <div className="page-control-right">
                    <Arrow 
                        direction="right" 
                        path="/portfolio/timeline"
                        targetText="timeline"
                        onClick={ this.doClick }
                    />
                </div>

            </div>
        );
    }

}

export default Portfolio;