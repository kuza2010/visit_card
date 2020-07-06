import React from "react";

import './index.css'


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

export default Technology;