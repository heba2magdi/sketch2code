import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home=()=>{
    const navigate=useNavigate();
    const getStarted=()=>{
        navigate('/signup');
    }
    return(
        <div>
            <button onClick={getStarted}>Get Started</button>
        </div>

    );

}
export default Home