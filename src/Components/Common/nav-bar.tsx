import React from "react";
import '../../styles.css'
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar">
            <nav>            
                <ul className="navigation">
                    <li className="name"><a href="/">Ayla Dursun</a></li>
                    <li><NavLink to="/about-me">About Me</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav>
        </div>    
        )
};

export default NavBar;