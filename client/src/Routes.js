import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignUp } from './components/SignUp';
import Tracker from './components/Tracker'

const NotFound = () => {
    return <div>Not Found</div>
}

export default ({ childProps }) => (
    <Switch>
        <Route
            path="/"
            exact
            component={Tracker}
            props={childProps}
        />
        <Route
            path="/signup"
            exact
            component={SignUp}
            props={childProps}
        />
        <Route
            path="/signin"
            exact
            component={SignUp}
            props={childProps}
        />
        <Route
            path="/logout"
            exact
            component={SignUp}
            props={childProps}
        />

        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>
);