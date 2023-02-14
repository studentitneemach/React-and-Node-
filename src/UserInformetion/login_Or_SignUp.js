import React, { Fragment, useEffect, useState } from "react";
import { Login } from './Login/Login';
import { SignUp } from "./SignUp/Sign_Up";
import './Login_or_SignUp.css'
import { Zoom } from "react-reveal";
import { Route } from "react-router-dom";
export const Slider = () => {
    const [toggle, setToggle] = useState(<SignUp/>);
    
    useEffect(() => {
        let signup = document.querySelector('.signup');
        let login = document.querySelector(".login");
        let slider = document.querySelector(".slider");
        let formSection = document.querySelector(".form-section");
        signup.addEventListener("click", () => {
            slider.classList.add("moveslider");
            formSection.classList.add("form-section-move");
        });

        login.addEventListener("click", () => {
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
        });

    }, [])
    
    return (
        <Fragment>
            {/* <div className="container_slider">

                <div className="slider"></div>
                <div className="btn">
                    <button className="login" onClick={() => setToggle(<SignUp />)}>Signup</button>
                    <button className="signup" onClick={() => setToggle(<Login />)}>Login</button>
                </div>

                {toggle}

            </div> */}

         <Zoom>  
             <div className='body'>
           <div className="container_slider">
<div className="slider"></div>
<div className="btn">

    <div type= "button" className="login" onClick={() => setToggle(<SignUp />)}>Signup</div>
    <div type= "button" className="signup" onClick={() => setToggle(<Login />)}>Login</div>
</div>
{toggle } 


</div>  </div>
</Zoom>
        </Fragment>
    )
}