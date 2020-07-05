import React from 'react';

import Header from "../header";
import Main from "../main";
import ContainerHelper from "../hoc/container-helper";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
        </React.Fragment>
    );
}

export default ContainerHelper(App);
