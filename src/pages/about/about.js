import React from "react";

import TechnologyList from "./technology";

import './index.css'

const About = () => {
    return (
        <div className="col s6 push-s2 text-medium">
            <h4> About me</h4>
            <p>
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
            </p>
            <TechnologyList/>
            <h4> My background and history</h4>
            <p>
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
                Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page. Hi! This is my mock page.
            </p>
        </div>
    );
}


export default About;