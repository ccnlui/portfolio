import React, { Component } from 'react';
import './Introduction.css';
import Arrow from './Arrow';

class Introduction extends Component {

    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            currHeading: '',
            currParagraph: '',
            typingHeading: false,
            typingParagraph: false,
            timeout: null,
        };

        // setup cursor reference
        this.headingCursor = React.createRef();
        this.paragraphCursor = React.createRef();

    }

    // componentDidMount(): called after constructor
    componentDidMount() {
        // hide first cursor
        this.headingCursor.current.style.opacity = 0;
        this.paragraphCursor.current.style.opacity = 0;

        // start animation (use callback after setting state!)
        if (!this.state.typingHeading) {

            // start animation
            this.headingCursor.current.classList.add("cursor");
            const nextTimeout = setTimeout(this.typeHeading, 2000);
            this.setState({
                typingHeading: true,
                timeout: nextTimeout
            });
        }
    }

    // componentWillUnmount():
    componentWillUnmount() {
        console.log("Introduction::componentWillUnmount()");
        clearTimeout(this.state.timeout);
    }

    // typeHeading():
    typeHeading = () => {
        if (this.state.typingHeading) {
            const heading = this.props.dataText[0];
            const currHeading = this.state.currHeading; // destructing
            const nextHeading = heading.substring(0, currHeading.length+1);

            // typing heading, just completed!
            if (nextHeading === heading && this.state.typingHeading) {

                // hide heading cursor
                this.headingCursor.current.classList.remove("cursor");
                this.headingCursor.current.style.opacity = 0;
                // start animation for paragraphCursor
                this.paragraphCursor.current.classList.add("cursor");

                const nextTimeout = setTimeout(this.typeParagraph, 2000);

                this.setState({
                    typingHeading: false,
                    typingParagraph: true,
                    currHeading: nextHeading,
                    timeout: nextTimeout
                });
            }
            else {
                // remove heading cursor animation
                if (this.headingCursor.current.classList.contains("cursor")) {
                    // stupid hack to pause animation and keep showing cursor
                    this.headingCursor.current.classList.remove("cursor");
                    this.headingCursor.current.style.opacity = 1;
                }

                const nextTimeout = setTimeout(this.typeHeading, 30);

                this.setState({
                    currHeading: nextHeading,
                    timeout: nextTimeout
                });
            }
        }
    }

    // typeParagraph():
    typeParagraph = () => {

        if (this.state.typingParagraph) {
            const paragraph = this.props.dataText[1];
            const currParagraph = this.state.currParagraph; // destructing
            const nextParagraph = paragraph.substring(0, currParagraph.length+1);

            // typing paragraph, just completed!
            if (nextParagraph === paragraph && this.state.typingParagraph) {

                // start animation for paragraphCursor
                this.paragraphCursor.current.classList.add("cursor");
                this.setState({
                    typingHeading: false,
                    typingParagraph: false,
                    currParagraph: nextParagraph,
                });
            }
            else {
                // remove cursor animation
                if (this.paragraphCursor.current.classList.contains("cursor")) {
                    // stupid hack to pause animation and keep showing cursor
                    this.paragraphCursor.current.classList.remove("cursor");
                    this.paragraphCursor.current.style.opacity = 1;
                }

                // keep typing
                const nextTimeout = setTimeout(this.typeParagraph, 30);

                // type every 30ms (set in componentDidUpdate)
                this.setState({
                    currParagraph: nextParagraph,
                    timeout: nextTimeout,
                });
            }
        }
    }

    // render():
    render() {

        return (
            <div id="landing-page" className="page-content">
                <div className="introduction">
                    <h3 className="heading">
                        {this.state.currHeading}
                        <span ref={this.headingCursor}>_</span>
                    </h3>
                    <h1 className="paragraph">
                        {this.state.currParagraph}
                        <span ref={this.paragraphCursor}>_</span>
                    </h1>
                </div>
                <div className="page-control-right">
                    <Arrow 
                        direction="right" 
                        path="/portfolio"
                        targetText="portfolio"
                        onClick={ this.doClick }
                    />
                </div>
            </div>
            
        );

    }

}

export default Introduction;