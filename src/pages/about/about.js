import React from "react";

import Technology from "./technology";

import imageForCodeSection from "./images/techology/code"
import imageForToolSection from "./images/techology/tool"

import './index.css'

const About = () => {
    return (
        <div className="col s6 push-s2">
            <h4> About me</h4>
            <p>
                Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.
                Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.
                Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.Hi! This is my mock page.
            </p>
            <ToolsAndLanguage/>
        </div>
    );
}

const ToolsAndLanguage = () => {
    return (
        <div className="col s12">
            <Technology title="Code"
                        content="I am a multi-faceted person. I like backend and frontend development. I have had experience in mobile app development."
                        images={imageForCodeSection}/>
            <Technology title="Tool"
                        content="Git is my daily friend. I have experience with Docker as well as the Atlassian software development tools."
                        images={imageForToolSection}/>
        </div>
    );
}


export default About;