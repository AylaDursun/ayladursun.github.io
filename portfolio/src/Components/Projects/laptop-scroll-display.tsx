import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";

type Input = {
    imagePath: string
    nextToMobile: boolean
}

const LaptopScrollDisplay = ({imagePath, nextToMobile}: Input) => {
    if(nextToMobile) {
        return (
            <div className="macbook" style={{ marginTop: '12rem'}}>
                <div className="screen">
                    <div className="viewport" style={{ backgroundImage: `url(${imagePath})` }}></div>
                </div>
                <div className="base"></div>
                <div className="notch"></div>
            </div>
        )
    }
    return (
        <div className="macbook">
            <div className="screen">
                <div className="viewport" style={{ backgroundImage: `url(${imagePath})` }}></div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
        </div>
    )
};

export default LaptopScrollDisplay;