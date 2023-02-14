import React, { Fragment, useState, } from "react";
import { v4 as uuid } from 'uuid';
import '../Login_or_SignUp.css';
import { addDoc, collection, getDocs } from '@firebase/firestore';
import { firestore } from "../FIrebase";
import { Fade } from "react-reveal";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import {BsFillEyeSlashFill} from 'react-icons/bs';


export const SignUp = () => {
       const [Sign_Up, setSign_Up] = useState({});
       const [Button, setButton] = useState(true);
       const [Info, setInfo] = useState([]);
       const dispatch = useDispatch();
       const history = useHistory();
       const [passwordType, setPasswordType] = useState("password");
       const [passwordType_confirm, setPasswordTypeConfirm] = useState("password");
       
       const [show, setShow] = useState(false);
       // const ref =collection(firestore,"Sign_Up")

       const getData = async () => {
              await getDocs(collection(firestore, "Sign_Up")).then(querySnapshot => {
                     const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }))
                     setInfo(newData)
              })

       }

  
       const Confirm_PasswordText=()=>{
             
              if(passwordType_confirm ==="password"){
                     setPasswordTypeConfirm("text")
              }else{
                     setPasswordTypeConfirm("password")
              }
            }
       const handlerSignUp = (event) => {
              getData()
              setButton(true);
              setShow(false)
            
              const uniqId = uuid()
              const names = event.target.name;
              const values = event.target.value;
              setSign_Up(data => ({ ...data, [names]: values, uniqId }))

       }
       const userData = async () => {
              alert('User not exist')
              // console.log(Sign_Up)
              // try {
              //        await addDoc(collection(firestore, "Sign_Up"), {
              //               Sign_Up
              //        })
              //        alert('Data Store Successfully')
              // } catch (e) {
              //        console.log(e)
              // }
              history.push('/')
              dispatch({ type: 'ADD', payload: Sign_Up })
       }
        
       /////https://console.firebase.google.com/project/userinfometion/firestore/data/~2FSign_Up~2Fgnf22xz4TRtsh83XNP8H

       const DataSaves = async () => {
              const Data = []
              await Info.forEach(data => {
                    
                     if (data.Sign_Up.email !== Sign_Up.email) {
                            if (data.Sign_Up.password !== Sign_Up.password) {
                                   return Data
                            } else {
                                   return Data.push(data)
                            }

                     } else {
                            return Data.push(data)
                     }
              }
              )
              Data.length !== 0 ? (setShow(true) && setButton(true)) : userData()
       }

       const submitHandler = (event) => {		
              event.preventDefault();
              
              Sign_Up.password !== Sign_Up.confirmPassword ? (alert('paasword not macth') && setButton(true)) : (DataSaves() && setButton(false))
       }


       return (<Fragment>
              <Fade right>
              <div className='body'>
              <div className="container_slider">
             
                    
                     <div className="form-section">
                            <div className="signup-box">
                                   <form onSubmit={submitHandler}>
                 		          <input type="text"
                                                 className="name ele"
                                                 placeholder="Enter your name" name='name' value={Sign_Up.name || ""} onChange={handlerSignUp} required />
                                                  <input type="email"
                                                 className="email ele"
                                                 placeholder="youremail@email.com" name='email' value={Sign_Up.email || ""} onChange={handlerSignUp} required />
                                  <div style={{display:'flex'}}>
                                          <input type={passwordType}
                                                 className="password ele"
                                   placeholder="password" name='password' value={Sign_Up.password || ""} onChange={handlerSignUp} required ></input>
                                     <PasswordCheck setPasswordType={setPasswordType} passwordType={passwordType} />
                                                 </div>

                                   <div style={{display:'flex'}}>
                                          <input type={passwordType_confirm}
                                                 className="password ele"
                                                 placeholder="Confirm password" name='confirmPassword' value={Sign_Up.confirmPassword || ""} onChange={handlerSignUp} required />
                                             <span className="eyesIcon"  >
                                                  { passwordType_confirm === "password" ? <BsFillEyeSlashFill size={25} onClick={Confirm_PasswordText} style={{cursor:'pointer'}} />:
                                                  <IoEyeSharp size={25} onClick={Confirm_PasswordText} style={{cursor:'pointer'}} />}</span>
                                                 </div>
                                          {Button && (<button className="clkbtn" >Signup</button>)}    
                                          <br/>
                                           <br/>      
                   {  show && <span style={{color:"rgb(250, 124, 124)"}}>Please Change Your Email && Paasword or
                     <br/> You Have an Account go on Login</span> }    
                    <br/>   
                   <div className="toggle"> <span> You  have an Account ! go on </span>
                            <span id="toggle_id"  onClick={()=>history.push('/')  }> Login</span></div>
                                   </form>
                            
                            </div>
                            
                     </div>
                     </div>
                     </div>
              </Fade>
       </Fragment>
       )
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PasswordCheck= ({setPasswordType,passwordType})=>{
  

       const PasswordText=()=>{
             
              if(passwordType === "password" ){
                   setPasswordType("text")
              }else{
                   setPasswordType("password")
              }
            }
     return <span className="eyesIcon"  >
     { passwordType === "password" ? <BsFillEyeSlashFill size={25} onClick={PasswordText} style={{cursor:'pointer'}} />:
     <IoEyeSharp size={25} onClick={PasswordText} style={{cursor:'pointer'}} />}</span>
}
///////////////https://www.youtube.com/watch?v=0gLr-pBIPhI&list=PLpPqplz6dKxUfvM22GXRvYA4s-mvJE0XF&index=6 