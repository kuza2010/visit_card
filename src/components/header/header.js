import React from "react";

import globalConstant from "../../utils/constant";

import './style.css'
import {Link} from "react-router-dom";

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
                                    <Link to={'/'}>
                                        About me
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/career'}>
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/project'}>
                                        Project
                                    </Link>
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