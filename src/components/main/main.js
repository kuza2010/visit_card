import React, {Component} from "react";

import Sidebar from "../sidebar";
import About from "../../pages/about";
import {combine, Container, ContainerRow} from "../hoc/container-helper/container";

import './index.css'

class Main extends Component {

    render() {
        return (
            <div className="main">
                <Sidebar/>
                <About/>
            </div>
        );
    }
}

export default combine(Container, ContainerRow)(Main);
