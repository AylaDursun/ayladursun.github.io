import React from "react";
import '../../styles.css'
import { NavLink } from "react-router-dom";
type ProjectContents = {
    title: string,
    linkText: string,
    linkUrl: string,
    description: string
  }

const Project = ({title, linkText, linkUrl, description}: ProjectContents) => {
    return (
            <div>
                <br/>
                <br/>
                <h6>{title}</h6>
                <a href={linkUrl} target="_blank">{linkText}</a>
                <details>
                    <summary>Details</summary>
                    <p>{description}</p>
                </details>
            </div>
        )
};

export default Project;