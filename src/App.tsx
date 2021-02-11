import React from "react";
import {Home} from "./pages/Home";
import {Browse} from "./pages/Browse";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import * as ROUTES from "./constants/routes";

export const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/:type/:category?">
                <Browse/>
            </Route>
            <Route path={ROUTES.HOME}>
                <Home/>
            </Route>
        </Switch>
    </Router>
);
