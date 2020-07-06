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
                            <Link className="brand-logo"
                                to={'/'}>
                                {author}
                            </Link>
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
                                    <Link to={'/projects'}>
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