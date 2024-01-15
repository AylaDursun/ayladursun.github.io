import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";
import Resume from "../../Resources/Ayla_Dursun_Resume_2024.pdf"

const ActionButtons = () => {
    return (
        <div>
            <div className="side-buttons">
                <div className="about-me-button">
                    <h3>
                        <a href={Resume} target="_blank">
                            RESUME
                        </a>
                    </h3>
                    <div className="about-me-nav"></div>
                </div>
                <div className="about-me-button">
                    <h5>
                        <a href="mailto:dursun.ayla@icloud.com">
                            CONTACT ME
                        </a>
                    </h5>
                    <div className="other-nav"></div>
                </div>
            </div>
        </div>
    )
};

export default ActionButtons;