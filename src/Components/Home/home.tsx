import React, { Component } from "react";
import '../../styles.css'
import marbleSolitaireImage from '../../images/MarbleSolitaire.png'
import imageProcessorImage from '../../images/ImageProcessorDemo.jpg'
import NavBar from "../Common/nav-bar";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <NavBar/>
        <h1>HELLO <br/> WORLD</h1>
        <h2>My name is Ayla Dursun and I am a Computer Science and Design Student at Northeastern University.
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
                        {<div className="viewport" id="rize"></div>}
                    </div>
                    <div className="base"></div>
                    <div className="notch"></div>
                </div>
                <br/>
                <h6>Rize Tea Website Design</h6>
                <a href="https://www.figma.com/file/Xsj6w2PQ7iNnBxwfziZqLu/Rize-Tea?node-id=2%3A2">View Figma File →</a>
                <br/>
                <p>
                    This project consists of a prototyped website in Figma and various supplementary materials. The workflow for adding items to the cart and checking out is prototyped. There is also an attached style guide that contains information for the components, colors, interactions, and type.
                </p>
            </div>  
            <div className="feature">
                {<img src={marbleSolitaireImage} alt="Image of Project" id = "marble-solitaire"/>}
                <br/> <br/>
                <h6>Java Marble Solitaire</h6>
                <a>Code Available On Request</a>
                <br/>
                <p>
                    This game has support for multiple shapes of marble solitaire as well as the ability to set a custom size for the board and custom starting position for the empty slot. It follows MVC design patterns and has both a text view and GUI view.
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
        </div>
        <br/>
        <a href="Projects.html" id="viewAll">View All →</a>
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