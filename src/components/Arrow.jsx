import React, { Component } from 'react';
import './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


// Arrow: probably should get passed a callback to call when arrow is clicked!
// .. probably should have a handle click in this.props
class Arrow extends Component {

    // componentDidMount(): runs after constructor
    componentDidMount() {
        console.log("Arrow::componentDidMount()");
    }

    // renderLinkedArrow(): depending on if props is right or left, render appropriate direction
    renderLinkedArrow() {
        if (this.props.direction === "right") {
            return (
                <Link onClick={ this.props.onClick } to={ this.props.path }>
                    <div className="arrow right">
                        <span className="first"><FontAwesomeIcon icon={faChevronRight} /></span>
                        <span className="second"><FontAwesomeIcon icon={faChevronRight} /></span>
                    </div>
                </Link>
            );
        }
        else {
            return (
                <Link onClick={ this.props.onClick } to={ this.props.path }>
                    <div className="arrow left">
                        <span className="first"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        <span className="second"><FontAwesomeIcon icon={faChevronLeft} /></span>
                    </div>
                </Link>
            );
        }
    }

    // renderTargetText(): depending on props, render target text at appropriate position
    renderTargetText() {
        if (this.props.direction === "right") {
            return <div className="targetText right">{this.props.targetText}</div>
        }
        else {
            return <div className="targetText left">{this.props.targetText}</div>
        }
    }

    // renderArrow():
    renderArrow() {
        if (this.props.direction === "right") {
            return (
                <div className="next-arrow right">
                    {this.renderTargetText()}
                    <div className="round">
                        {this.renderLinkedArrow()}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="next-arrow left">
                    {this.renderTargetText()}
                    <div className="round">
                        {this.renderLinkedArrow()}
                    </div>
                </div>
            );
        }
    }

    // render():
    render() {
        return this.renderArrow();
    }
}

export default Arrow;