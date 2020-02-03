import React, { Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Home';

class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route exact path = '/home' component={Home}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Content;