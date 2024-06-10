import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe/about-me';
import Home from './Components/Home/home';
import Projects from './Components/Projects/projects';
import CountryData from './Components/SingleView/country-data';
import EmbroideryProcess from './Components/SingleView/embroidery-process';
import ThreeTrips from './Components/SingleView/3-trips';

import { BrowserRouter, Routes } from "react-router-dom"
import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import ScrollToTop from './Components/Common/scroll-to-top';


function App() {
    return (
      <div>
          <BrowserRouter>
          <ScrollToTop />
                    <Routes>
                        <Route path={'/*'} element={<Home/>}/>
                        <Route path={"/about-me"} element={<AboutMe/>}/>
                        <Route path={"/projects"} element={<Projects/>}/>
                        <Route path={"/country-data"} element={<CountryData/>}/>
                        <Route path={"/3-trips"} element={<ThreeTrips/>}/>
                        <Route path={"/embroidery-process"} element={<EmbroideryProcess/>}/>
                    </Routes>
            </BrowserRouter>
        </div>    
    );
  }

export default App;
