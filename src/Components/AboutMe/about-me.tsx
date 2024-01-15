import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";
import Circles from "./circles";
import ActionButtons from "./action-buttons";
import Bio from "./bio";
import Education from "./education";
import Skills from "./skills";
import Awards from "./awards";
import WorkExperiences from "./work-experiences";

const AboutMe = () => {
    return (
        <div>
            <NavBar/>
            <div className="section-header">ABOUT ME</div>
            <Bio/>
            <div className="content">
                <div className="left-col">
                    <WorkExperiences/>
                </div>
                <div className="right-col">
                    <Education/>
                    <Skills/>
                    <Awards/>
    </div>
    </div>
        <ActionButtons/>
        <Circles/>
        </div>
    )
};

export default AboutMe;