import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";
import Portrait from "../../images/portraitV3.jpg"

const Bio = () => {
    return (
        <div className="bio">
            <img src={Portrait} alt="Photo of Ayla Dursun" height="250rem"/>
            <div className="greeting">I am a motivated and passionate student studying Computer Science and Design seeking a full-time job for after I graduate</div>
        </div>
    )
};

export default Bio;