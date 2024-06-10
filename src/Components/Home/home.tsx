import React, { Component } from "react";
import '../../styles.css'
import marbleSolitaireImage from '../../images/MarbleSolitaire.png'
import imageProcessorImage from '../../images/ImageProcessorDemo.jpg'
import NavBar from "../Common/nav-bar";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <NavBar/>
        <h1>HELLO <br/> WORLD</h1>
        <h2>
        My name is Ayla Dursun and I am a recent graduate from Northeastern University 
        with a Degree in Computer Science and Design. I have multiple years of software 
        development experience and I am looking for a full-time job.
        </h2>

        <div className="about-me-button">
            <h3>
                <NavLink to="/about-me">About Me</NavLink>
            </h3>
            <div className="about-me-nav"></div>
        </div>
    
        <h4>FEATURED PROJECTS</h4>
        <div className="featured-projects">
            <div className="feature">
                <div className="macbook">
                    <div className="screen">
                        {<div className="viewport" id="lightscape"></div>}
                    </div>
                    <div className="base"></div>
                    <div className="notch"></div>
                </div>
                <br/>
                <h6>Lightscape Webpage</h6>
                <a href="https://ayladursun.com/lightscape/">View Webpage →</a>
                <br/>
                <p>
                This webpage was designed and coded for a class assignment. I particularly enjoyed working with animations to bring the page to life and represent the effect of seeing the lights at the actual event. To do this, I utilized css animations and transitions to create different glow effects.
                </p>
            </div>  
            <div className="feature">
                {<img src={imageProcessorImage} id="image-processor" alt="Image of Project"/>}
                <br/> <br/>
                <h6>Java Image Processor</h6>
                <a>Code Available On Request</a>
                <br/>
                <p>
                    This image processor has support for the following: uploading and saving files, greyscale and sepia filters, blurring, rbg component representations, histograms, luma value and intensity representations, flipping, brightening and darkening, and downscaling.
                </p>
            </div>
            <div className="feature">
                <div className="macbook">
                    <div className="screen">
                        {<div className="viewport" id="explorations"></div>}
                    </div>
                    <div className="base"></div>
                    <div className="notch"></div>
                </div>
                <br/>
                <h6>Art Program Webpage</h6>
                <a href="https://ayladursun.com/art-explorations-in-ireland/">View Webpage →</a>
                <br/>
                <p>
                This page was created to advertise a study abroad program offered by the art department of Northeastern University in partnership with the Burren College of Art. I created water color illustrations and worked with various scroll-based animations to add visual interest.                </p>
            </div>  
        </div>
        <br/>
        <Link to="/projects" id="viewAll">View All →</Link>
        <div className="background-circles">
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
            <div className="ellipse4"></div>
            <div className="ellipse5"></div>
            <div className="ellipse6"></div>
            <div className="ellipse7"></div>
            <div className="ellipse8"></div>
            <div className="ellipse9"></div>
            <div className="ellipse10"></div>
            <div className="ellipse11"></div>
            <div className="ellipse12"></div>
            <div className="ellipse13"></div>
            <div className="ellipse14"></div>
            <div className="ellipse15"></div>
            <div className="ellipse16"></div>
            <div className="ellipse17"></div>
            <div className="ellipse18"></div>
            <div className="ellipse19"></div>
            <div className="ellipse20"></div>
            <div className="ellipse21"></div>
            <div className="ellipse22"></div>
            <div className="ellipse23"></div>
            <div className="ellipse24"></div>
        </div>
        </div>
    )
};

export default Home;