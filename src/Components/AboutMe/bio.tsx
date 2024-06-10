import React from "react";
import '../../styles.css'
import Portrait from "../../images/headshot.png"

const Bio = () => {
    return (
        <div className="bio">
            <img src={Portrait} alt="Photo of Ayla Dursun" height="250rem"/>
            <div className="greeting">
            Hi, I'm Ayla, I blend technical knowledge with an eye for user experience design and 
            I am ready to tackle complex challenges and adapt to a new work environment.
                </div>
        </div>
    )
};

export default Bio;