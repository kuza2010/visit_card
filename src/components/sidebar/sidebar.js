import React from "react";

import logo from './author-face.jpg'
import './index.css'

const Sidebar = () => {

    return (
        <div className="col s2 push-s2 center">
            <img src={logo}
                 alt="author_awesome_face"
                 className="circle"/>
        </div>
    );
}

export default Sidebar;
