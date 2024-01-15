import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe/about-me';
import Home from './Components/Home/home';
import Projects from './Components/Projects/projects';
import { BrowserRouter, Routes } from "react-router-dom"
import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";


function App() {
    return (
      <div>
          <BrowserRouter>
                    <Routes>
                        <Route path={'/*'} element={<Home/>}/>
                        <Route path={"/about-me"} element={<AboutMe/>}/>
                        <Route path={"/projects"} element={<Projects/>}/>
                    </Routes>
            </BrowserRouter>
        </div>    
    );
  }

export default App;
