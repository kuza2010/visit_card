import React from "react";

import githubIcon from "./images/mark-github.svg";
import liIcon from "./images/linkedin.svg"
import homeIcon from "./images/home.svg"
import emailIcon from "./images/email.svg"

import './index.css'

const LinksList = () => {
    return (
        <ul>
            <Link icon={homeIcon}
                  title="RU Nizhny Novgorod"
                  link={null}/>
            <Link icon={githubIcon}
                  title="Github"
                  link="https://github.com/kuza2010"/>
            <Link icon={liIcon}
                  title="Linkedin"
                  link="https://ru.linkedin.com/"/>
            <Link icon={emailIcon}
                  title="Email"
                  link="mailto:kyza20106@yandex.ru"/>
        </ul>
    );
}


const Link = ({icon, title, link}) => {

    let aClass;

    if (link !== undefined && link !== null) {
        aClass = "animate_link"
    }

    return (
        <li className="collection-item">
            <div className="valign-wrapper ">
                <img src={icon}
                     alt="github_icon"
                     className="icon icon_margin"/>
                <a href={link}
                   className={aClass}
                >
                    {title}
                </a>
            </div>
        </li>
    );
}

export default LinksList;