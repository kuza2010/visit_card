import React from "react";

import "./index.css"

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row without-bottom-margin">
                    <div className="col s6 push-s2">
                        <h5>© Artyom Danilin</h5>
                        <p>I hope one day I became full stack programmer :)</p>
                        <p>
                            Made with
                            <span className="love"> ❤ </span>
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12 bottom-margin">
                        <h5>Follow me:</h5>
                        <ul>
                            <li><a className="animate_link" href="https://github.com/kuza2010">Github</a></li>
                            <li><a className="animate_link" href="https://ru.linkedin.com/">LinkedIn</a></li>
                            <li><a className="animate_link" href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;