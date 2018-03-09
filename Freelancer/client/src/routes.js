import React from 'react';
import { Router, Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import Signup from './components/Signup';

var Routes = () => {
    return (
        <div>
            <Router> 
                <Route path="/" component={App} />
                <Route path="/signup" component={Signup} />
            </Router>
        </div>
    )
}

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default Routes;