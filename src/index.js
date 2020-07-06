import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter} from "react-router-dom";

import App from './components/app/app';

import 'materialize-css/dist/css/materialize.min.css'
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
