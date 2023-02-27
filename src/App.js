import React from "react";
import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import Features from "./containers/features/Features";
import WhatGPT3 from "./containers/whatGpt3/WhatGPT3";
import Header from "./containers/header/Header";

import CTA from "./components/cta/CTA";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
