import React from "react";

import LinksList from "./links";

import logo from './author-face.jpg'

import './index.css'

const Sidebar = () => {

    return (
        <div className="col s2 push-s2 center">
            <img src={logo}
                 alt="author_awesome_face"
                 className="circle max-width_200"/>
            <div className="left-align">
                <h6>
                    Danilin Artyom
                </h6>
                <blockquote>
                    <p>Software engineer at MERA NN.<br/>
                        NNTU Student.</p>
                </blockquote>
                <LinksList/>
            </div>
        </div>
    );
}

export default Sidebar;
