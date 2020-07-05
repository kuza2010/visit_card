import React, {Component} from "react";

import {combine, Container, ContainerRow} from "../hoc/container-helper/container";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="col s3">
                </div>
                <div class="col s9">
                </div>
            </React.Fragment>
        );
    }
}

export default combine(Container, ContainerRow)(Main);
