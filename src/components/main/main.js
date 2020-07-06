import React, {Component} from "react";

import Sidebar from "../sidebar";
import About from "../../pages/about";
import {combine, Container, ContainerRow} from "../hoc/container-helper/container";

import './index.css'
import {Route, Switch} from "react-router-dom";
import Career from "../../pages/career";
import Projects from "../../pages/projects";

class Main extends Component {

    render() {
        return (
            <main>
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
            </main>
        );
    }
}

export default combine(Container, ContainerRow)(Main);
