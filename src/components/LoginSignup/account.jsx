import React, { useState } from 'react';
// import auth from '../firebase';
import { useNavigate } from 'react-router-dom';


const Account=()=>{
    const navigate=useNavigate();

    const signout=()=>{
        alert("you signed out :(");
        navigate('/');

    }
    return(
        <div>
            <header>This is your Account</header>
            <button onClick={signout}>Sign out!</button>
        </div>
    );
}

export default Account