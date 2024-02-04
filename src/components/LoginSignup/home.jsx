//

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Home=()=>{
//     const navigate=useNavigate();
//     const getStarted=()=>{
//         navigate('/signup');
//     }
//     return(
//         <div>
//             <button onClick={getStarted}>Get Started</button>
//         </div>
//     );
// }
// export default Home

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mainStyles.css";
const Home = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="home-page">
        <div className="main">
          <div className="left-container">
            <h1>Get the code of your project in no time ..!</h1>
            <a onClick={getStarted}>Get started</a>
          </div>
          <div className="right-container">
            <div>
              <img src={require("../Assets/sketch.png")} alt="sketch-img" />
              <a href="index.html">Upload image</a>
            </div>
            <div>
              <img src={require("../Assets/code-img.jpg")} alt="code-img" />
              <a href="index.html">Download image</a>
            </div>
          </div>
        </div>
        <section class="about">
          <div class="about-content" id="about">
            <img src={require("../Assets/code-img.jpg")} alt="about-img" />
            <div class="about-text">
              <h1>About Us</h1>
              <h5>
                Sketch <span> 2 Code </span>
              </h5>
              <p class="about-p">
                Sketch2Code is an innovative project with the aim to change the
                way UI designs are translated into code. This project leverages
                machine learning algorithms and computer vision to interpret
                hand-drawn sketches and automatically generate corresponding
                HTML markup. The primary goal is to simplify and accelerate the
                transition from design concepts to functional code, reducing the
                time and effort required in the prototyping stage of
                software development.
              </p>
              <button type="button" className="btn-about">
                let's talk
              </button>
            </div>
          </div>
        </section>
        <section class="tech" sid="tech">
          <div class="tech">
            <h1>ML-Powered Image to HTML CSS Converter</h1>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
