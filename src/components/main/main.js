import React, {Component} from "react";

import {Route, Switch} from "react-router-dom";
import Sidebar from "../sidebar";
import About from "../../pages/about";
import Career from "../../pages/career";
import Projects from "../../pages/projects";

import './index.css'

class Main extends Component {

    render() {
        return (
            <main className="container">
                <div className="row">
                    <Sidebar/>
                    <Switch>
                        <Route exact
                               path={'/'}
                               component={About}/>
                        <Route exact
                               path={'/career'}
                               component={Career}/>
                        <Route exact
                               path={'/projects'}
                               component={Projects}/>
                        <Route path={'*'}
                               render={() => <div>404 Not Found</div>}/>
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main;
