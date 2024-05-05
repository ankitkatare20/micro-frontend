import React from "react";
import { Switch, Router, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from "./components/Pricing";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route exact path='/' component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}