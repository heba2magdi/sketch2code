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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./mainStyles.css";
const  Home=()=> {
    const navigate=useNavigate();
    const getStarted=()=>{
                 navigate('/signup');
             }
    return(
        <>
        <div className="main"> 
            <div className="left-container">
                <h1>Get the code of your project in no time ..!</h1>
                <a  onClick={getStarted}>Get started</a>
            </div>
            <div className="right-container">
                <div>
                <img src={require("../Assets/sketch-img.jpg") } alt="sketch-img" />
                <a href="index.html">Upload image</a>
                </div>
                <div>
                <img src={require("../Assets/code-img.jpg") } alt="code-img" />
                <a href="index.html">Download image</a>
                </div>

                
            </div>
        </div>
        </>
    )  
}
export default Home