import React ,{useRef} from 'react'
import './LoginSignup.css'
import  {useState } from "react";
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
// import '../..firebase.js'
    

export const LoginSignup = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const nameRef=useRef()
    const [action,setAction] = useState("Login");
  return (
    <div>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={person_icon} alt="" />
                    <input type="name" placeholder='Name' name={nameRef}/>
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' ref={emailRef}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' ref={passwordRef}/>
                </div>
            </div>
            {action==="Sign UP"?<div></div>:<div className="forgot-password">forgot-password?<span>Click here!</span></div>}
            <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
        </div>
        <div className="below"></div>
        </div>
  )
}
export default LoginSignup
