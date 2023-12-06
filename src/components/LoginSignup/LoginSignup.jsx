import React ,{useRef} from 'react'
import './LoginSignup.css'
import  {useState } from "react";
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
import auth from '../../firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// import '../..firebase.js'
// import {
//     getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup
// } from "firebase/auth";
    

    // const register=()=>{
    //     const emailRef=useRef("");
    // const passwordRef=useRef()
    // const nameRef=useRef()
    //     const auth=getAuth();
    //     createUserWithEmailAndPassword(auth,emailRef.value,passwordRef.value, nameRef.value)
    //     .then((data)=>{
    //         console.log("you are successfully registered!");
    //         console.log(auth.currentUser);
    //         // router.push('/Account');
    //         console.log(data);
    //     })
    //     .catch((error)=> {
    //         console.log(error.code);
    //         alert(error.message);
    //     });
    
    
    // };
    // const signInWithGoogle=()=>{
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(getAuth(),provider)
    // .then((result)=>{
    // console.log(result.user);
    // // router.push('/Account');
    
    // })
    // .catch((error)=>{
    //     console.log(error.code);
    //         alert(error.message);
    // });
    // };
export const LoginSignup = () => {
    // const emailRef=useRef("");
    // const passwordRef=useRef()
    // const nameRef=useRef()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName]=useState('');
    const errMsg=useState('');
    const navigate=useNavigate();

    const handleSignup = async () => {
    //   try {
    //     const userCredential = await createUserWithEmailAndPassword(auth,name, email, password);
    //     console.log('User signed up:', userCredential.user);
    //   } catch (error) {
    //     console.error('Error signing up:', error.message);
    //   }
    navigate("/signup");
    //   setAction("Sign Up");
    };
    const handleLogin = async () => {
        // try {
        //   const userCredential = await signInWithEmailAndPassword(auth, email, password);
        //   console.log('User logged in:', userCredential.user);
        // } catch (error) {
        //   console.error('Error logging in:', error.message);
        // }
        try {
        
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in!', userCredential.user);
            console.log("you are successfully signed in!");
            console.log(auth.currentUser);
            alert('User logged in!', userCredential.user);
            // navigate('/account');
          } catch (error) {
            console.error('Error logging in!', error.message);
            console.log(error.code);
          switch (error.code){
              case"auth/invalid-email":
              errMsg.value="invalid email";
              alert(errMsg.value);
              break;
              case"auth/user-not-found":
              errMsg.value="no account with that email was found";
              alert(errMsg.value);
              break;
              case"auth/wrong-password":
              errMsg.value="incorrect password";
              alert(errMsg.value);
              break;
              default:
              errMsg.value="Email or password was incorrect";
              alert(errMsg.value);
              break;
          }
          }
          navigate("/account");
      };
    // const [action,setAction] = useState("Login");
  return (
    <div>
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="forgot-password">forgot-password?<span>Click here!</span></div>
            <div className="submit-container">
            
            <div className="submit gray" onClick={handleSignup} >Sign Up</div>
            <div className="submit" onClick={handleLogin}>Login</div>
        </div>
        </div>
        <div className="below"></div>
        </div>
  )
}
export default LoginSignup
