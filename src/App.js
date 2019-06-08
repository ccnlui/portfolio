import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import { HashRouter as Router, Route } from "react-router-dom";

//////////////////////////////////////
//
// Constant
//
//////////////////////////////////////

const dataText = [
    "Hi, I'm Calvin!",
    "My calling is that of an arch wizard, one who controls explosion magic, \
    the strongest of all offensive magic! \
    Do you also desire my forbidden strength, which is so almighty, \
    I've been ostracized by the entire world?"
]

function App() {
    return (
        <Router>
            <Route
                exact
                path='/portfolio'
                render={ (props) => (<Introduction dataText={dataText} {...props}/>) }
            />
            <Route path="/portfolio/developer-portfolio" component={Portfolio} />
            <Route path="/portfolio/timeline" component={Timeline} />

        </Router>
    );
}

export default App;
