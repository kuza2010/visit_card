import React from "react";

import globalConstant from "../../utils/constant";

import './style.css'

const Header = () => {

    const {author} = globalConstant;

    return (
        <nav className="navbar-default">
            <div className="nav-wrapper white">
                <div className="container">
                    <div className="row">
                        <div className="col s8 push-s2">
                            <a href="#" className="brand-logo">
                                {author}
                            </a>
                            <ul className="right hide-on-med-and-down ">
                                <li>
                                    <a href="#">About me</a>
                                </li>
                                <li>
                                    <a href="#">Career</a>
                                </li>
                                <li>
                                    <a href="#">Project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header;