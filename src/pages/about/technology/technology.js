import React from "react";

import imageForCodeSection from "../images/techology/code";
import imageForToolSection from "../images/techology/tool";

import './index.css'

const TechnologyList = () => {
    return (
        <div className="col s12">
            <div className="card">
                <div className="card-content">
                    <div className="row">
                        <Technology title="Code"
                                    content="I am a multi-faceted person. I like backend and frontend development. I have had experience in mobile app development."
                                    images={imageForCodeSection}/>
                        <Technology title="Tool"
                                    content="Git is my daily friend. I have experience with Docker as well as the Atlassian software development tools."
                                    images={imageForToolSection}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


const getImages = (images) => {
    return images.map(img => {
        return (
            <img src={img}
                 key={img}
                 alt={img}
                 className="tech_image max-width_50"/>
        );
    });
}

const Technology = ({content, title, images}) => {

    return (
        <div className="tech center">
            <div className="col s6">
                <h4>
                    {title}
                </h4>
                {getImages(images)}
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default TechnologyList;