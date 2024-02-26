import React from "react";
import '../../styles.css'
import NavBar from "../Common/nav-bar";
import Project from "./project";
import LaptopScrollDisplay from "./laptop-scroll-display";
import RizeTeaImage from "../../images/RizeTeaHome.png";
import CreationStationImage from "../../images/CreationStationHome.png";
import ImageProcessorImage from "../../images/ImageProcessorDemo.jpg";
import MarbleSolitaireImage from "../../images/MarbleSolitaire2.png";
import BabyNamesAnalysisImage from "../../images/BabyNamesAnalysis.png";
import ReflectionsOfUsCover from "../../images/ReflectionsOfUsFront.png";
import AlteredBreathCover from "../../images/AlteredBreath.png";
import UnderTheRundarPage from "../../images/UnderTheRundar.png";
import TicTacToeImage from "../../images/TicTacToe.png";
import SeaFloorAnalysisImage from "../../images/SeaFloorAnalysis.png";
import FishyImage from "../../images/Fishy.png";
import SquirtleHuntImage from "../../images/SquirtleHunt.png";
import MemoryGameImage from "../../images/Memory.png";
import PhysicsSimulatorImage from "../../images/PhysicsSimulator.png";
import LightscapeDesktopImage from "../../images/LightscapeDesktop.png";
import SpreadsheetImage from "../../images/Spreadsheet.png";
import ArtExplorationsInIrelandDesktop from "../../images/ArtExplorationsInIrelandDesktop.png";
import PlanetPromotionalWebpage from "../../images/PlanetPromotionalWebsite.png";


const Projects = () => {
    return (
        <div>
            <NavBar/>
            <header className="section-header">
                PROJECTS
            </header>   
            <section className="threeCol">
                <div className="project">
                    <LaptopScrollDisplay 
                    imagePath={LightscapeDesktopImage}
                    nextToMobile={true}
                    ></LaptopScrollDisplay>
                    <Project 
                    title={"Lightscape Webpage"} 
                    linkText={"View Webpage →"} 
                    linkUrl={"https://ayladursun.com/lightscape/"} 
                    description={"This webpage was designed and coded for a class assignment. I particularly enjoyed working with animations to bring the page to life and represent the effect of seeing the lights at the actual event."}
                    />
                </div>
                <div className="project">
                    <iframe className="mobilePrototype" width="300em" height="86%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0y4t8jsuchj1e6UbIwVA95%2FMobile-App%3Ftype%3Ddesign%26node-id%3D9-5%26t%3DA8mMwZkiIbGSkS1t-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D9%253A5%26show-proto-sidebar%3D1%26hide-ui%3D1" allowFullScreen></iframe>
                    <Project 
                    title={"Planning App Design"} 
                    linkText={"View Figma File →"} 
                    linkUrl={"https://www.figma.com/file/0y4t8jsuchj1e6UbIwVA95/Mobile-App?type=design&node-id=0%3A1&mode=design&t=bQGxp7buNjo9AAdf-1"} 
                    description={"This planning app design was created as part of a larger project. The Figma file includes pages for the other deliverables including a promotional webpage design, app listing materials, and process presentations."}
                    />
                </div>
                <div className="project">
                    <LaptopScrollDisplay 
                    imagePath={ArtExplorationsInIrelandDesktop}
                    nextToMobile={true}
                    ></LaptopScrollDisplay>
                    <Project 
                    title={"Art Program Webpage"} 
                    linkText={"View Webpage →"} 
                    linkUrl={"https://ayladursun.com/art-explorations-in-ireland/"} 
                    description={"This page was created to advertise a study abroad program offered by the art department of Northeastern University in partnership with the Burren College of Art. I created water color illustrations and worked with various scroll-based animations to add visual interest."}
                    />
                </div>
            </section>
            <section className="threeCol">
                <div className="project">
                    <LaptopScrollDisplay 
                    imagePath={PlanetPromotionalWebpage}
                    nextToMobile={false}
                    ></LaptopScrollDisplay>
                    <Project 
                    title={"Promotional Webpage Design"} 
                    linkText={"View Figma File →"} 
                    linkUrl={"https://www.figma.com/file/0y4t8jsuchj1e6UbIwVA95/Mobile-App?type=design&node-id=138%3A950&mode=design&t=lqeuyUWcDtB7kMds-1"} 
                    description={"This design was created as part of a larger project with other deliverables and was made to promote the app designed as another deliverable. The Figma file includes pages for the other deliverables including the app design, app listing materials, and process presentations."}
                    />
                </div>

                <div className="project">
                    <img src={SpreadsheetImage} className="project-shadow" id="spreadsheetImage"/>
                    <Project 
                    title={"Spreadsheet Web App"} 
                    linkText={"View Webpage →"} 
                    linkUrl={"https://ayladursun.com/spreadsheet/"} 
                    description={"This spreadsheet web app was made as a group project. It includes traditional mathematical spreadsheet operations, options for finding and replacing values, custom data validation rules, and formatting."}
                    />
                </div>

                <div className="project">
                    <LaptopScrollDisplay 
                    imagePath={RizeTeaImage}
                    nextToMobile={false}
                    ></LaptopScrollDisplay>
                    <Project 
                    title={"Rize Tea Website Design"} 
                    linkText={"View Figma File →"} 
                    linkUrl={"https://www.figma.com/file/Xsj6w2PQ7iNnBxwfziZqLu/Rize-Tea?node-id=2%3A2"} 
                    description={"This project consists of a prototyped website in Figma and various supplementary materials. The workflow for adding items to the cart and checking out is prototyped. There is also an attached style guide that contains information for the components, colors, interactions, and type."}
                    />
                </div>

                {/* <div className="project">
                    <iframe className="mobilePrototype" width="300em" height="86%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6o6OyIGZzwdHdZUv1Y1LXU%2FPlanet%3Fnode-id%3D4%253A56%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A5%26show-proto-sidebar%3D1%26hide-ui%3D1" allowFullScreen></iframe>
                    <h6>Planet Mobile App Design</h6>
                    <a href="https://www.figma.com/file/6o6OyIGZzwdHdZUv1Y1LXU/Planet?node-id=0%3A1">View Figma File →</a>
                    <details>
                        <summary>Details</summary>
                        <p>This project consists of a prototyped mobile app for planning in Figma and various supplementary materials. It includes the workflows for signing up and logging in as well as using the planning functions of the app. There is also an attached style guide that contains information for the components, colors, interactions, type, and a sitemap.</p>
                    </details>
                </div> */}
                {/* <div className="project">
                    <LaptopScrollDisplay imagePath={CreationStationImage}></LaptopScrollDisplay>
                    <br/>
                    <br/>
                    <h6>Creation Station Responsive Website Design</h6>
                    <a href="https://www.figma.com/file/6M3083rlM7o92I8e4pMgH9/Creation-Station?node-id=1%3A8791">View Figma File →</a>
                    <details>
                        <summary>Details</summary>
                        <p>This project consists of a prototyped website in Figma for both desktop and mobile views. It contains workflows for finding challenges, submitting projects, and finding other makers to work with. There is also an attached style guide that contains information for the components, colors, interactions, and type.</p>
                </details>
                </div> */}
            </section>
            <section className="threeCol">
                <div className="project">
                    <img src={MarbleSolitaireImage}/>
                    <Project 
                    title={"Java Marble Solitaire"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={"This game has support for multiple shapes of marble solitaire as well as the ability to set a custom size for the board and custom starting position for the empty slot. It follows MVC design patterns and has both a text view and GUI view."}
                    />
                </div>
                <div className="project">
                    <img src={ImageProcessorImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"Java Image Processor"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={"This image processor has support for the following: uploading and saving files, greyscale and sepia filters, blurring, rbg component representations, histograms, luma value and intensity representations, flipping, brightening and darkening, and downscaling."}
                    />
                </div>
                <div className="project">
                    <img src={FishyImage} alt="Image of Project"/>
                    <Project 
                    title={"Java Fish Game"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={"This game is played by a user that controls one fish as it navigates a sea of randomly generated fish. The user's fish can grow by eating smaller fish but will be eaten by larger fish. The movements are controlled by the arrows on the keyboard and incorporate acceleration and inetia into the speed."}
                    />
                </div>
            </section>
            <section className="threeCol">
                <div className="project">
                    <img src={SquirtleHuntImage}/>
                    <Project 
                    title={"Unity Squirtle Game"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={
                        "This game is currently in progress. In the game the user will be able to control a character as they navigate through the forest and try to find a squirtle. Once they find one they will be able to attempt to capture it. The game is made in Unity with C# scripts. The animations were done through Mixamo and the assets were from various sources."
                    }
                    />
                </div>
                <div className="project">
                    <img src={TicTacToeImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"Matlab Tic Tac Toe"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={
                        "This game allows two users to play a game of tic tac toe in the console. The users sumbit their names which are then rendered on the board and their order of play is determined through random selection. The state of the board is rendered through MatLab's graphing functionality. There are also animations that play throughout."
                    }
                    />
                </div>
                <div className="project">
                    <img src={MemoryGameImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"Java Memory Game"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={
                        "This game allowed users to press on cards to reveal what is on the other side. If they select two cards that match in rank and color the cards disappear. Their turns are counted and limited to a certain number. Their score from matching the cards and a current time playing are also recorded and displayed to the user."
                    }
                    />
                </div>
            </section>
            <section className="threeCol">
                <div className="project">
                    <img src={ReflectionsOfUsCover}/>
                    <Project 
                    title={"Reflections Of Us Cover"} 
                    linkText={""} 
                    linkUrl={""} 
                    description={
                        "This design was created for the cover of a school newspaper issue focusing on diversity. It received First-Place Honor in the Front Page category of the 2020 Illinois Journalism Educators Association Contest."
                    }
                    />
                </div>
                <div className="project">
                    <img src={AlteredBreathCover} alt="Image of Project"/>
                    <Project 
                    title={"Altered Breath Cover"} 
                    linkText={""} 
                    linkUrl={""} 
                    description={
                        "This design was created for the cover of a school newspaper issue focusing on vaping. This design received a Superior Award in Ball State University’s 65th annual Journalism Day newspaper contest."
                    }
                    />
                </div>
                <div className="project">
                    <img src={UnderTheRundarPage} alt="Image of Project"/>
                    <Project 
                    title={"Under The Rundar Page"} 
                    linkText={""} 
                    linkUrl={""} 
                    description={
                        "This page was created for a school newspaper infographic on the track team."
                    }
                    />
                </div>
            </section>
            <section className="threeCol">
                <div className="project">
                    <img src={SeaFloorAnalysisImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"C++ Sea Floor Analysis"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={
                        "This program allowed users to upload data an in return produced the deepest point and where it occurs, the deepest 2x2 area and its bounds, and the volume of the surveyed area. It also writes the produced information to a new file."
                    }
                    />
                </div>
                <div className="project">
                    <img src={PhysicsSimulatorImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"MatLab Physics Simulator"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={
                        "This project allows users to input starting heights, velocities, and angles of projectiles and returns information about their trajectories including two graphs representing the projectile's motion."
                    }
                    />
                </div>
                <div className="project">
                    <img src={BabyNamesAnalysisImage} alt="Image of Project" className="project-shadow"/>
                    <Project 
                    title={"C++ Baby Names Analysis"} 
                    linkText={"Code Available On Request"} 
                    linkUrl={""} 
                    description={"This project allows users to submit a file and have the program analyze the most popular baby names for a particular gender and year."}
                    ></Project>
                </div>
            </section>
            <div className="ellipse39"></div>
            <div className="ellipse40"></div>
            <div className="ellipse41"></div>
            <div className="ellipse42"></div>
            <div className="ellipse43"></div>
            <div className="ellipse44"></div>
            <div className="ellipse45"></div>
            <div className="ellipse46"></div>
            <div className="ellipse47"></div>
            <div className="ellipse48"></div>
        </div>

    )
};

export default Projects;