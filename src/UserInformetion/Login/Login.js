import React, {  Fragment, useState, } from "react";
import '../Login_or_SignUp.css';
import { firestore } from "../FIrebase";
import {collection,getDocs} from '@firebase/firestore';
import { Fade } from "react-reveal";
import {useDispatch} from 'react-redux';
import {  useHistory,  } from "react-router-dom";
import { PasswordCheck } from "../SignUp/Sign_Up";

export const  Login=()=>{
       const [Login,setLogin]= useState({});
       const [Info,setInfo]= useState([]);
       const [Button, setButton] = useState(true);
       const [passwordType, setPasswordType] = useState("password");
       
       const [show, setShow] = useState(false);
       const dispatch = useDispatch();
       let history = useHistory();
 
       const handlerLogin=(event)=>{
              setShow(false)
              setButton(true)
              const names = event.target.name ;
              const values = event.target.value ;
              setLogin( data =>({...data,[names]: values}) )
       
       }
      
     
      const   getData=async()=>{
        const Data=[];
         await getDocs(collection(firestore,"Sign_Up")).then(querySnapshot=>{
              const newData = querySnapshot.docs.map((doc)=>({...doc.data()}))
        
              newData.forEach(data=>{
                if(data.Sign_Up.email   === Login.email ){
                    if(data.Sign_Up.password   === Login.password){
                           return Data.push(data.Sign_Up)
                    }else{
                           return Data
                    }
                  
             } 
              } )
         })
         
         Data.length === 0 ? setShow(true) : console.log("")
         setInfo(Data); 
       } 

let user = Info.length === 0 ? '' :  dispatch({type:'ADD',payload: Info}) ;

       const submitHandler=(event)=>{
              event.preventDefault(); 
               getData()
              setButton(false);
       }
      
            return (<Fragment>
              <Fade left>
              <div className='body'>
              <div className="container_slider_login">
                <div className="form-section">
                <div className="login-box"  >
                     <form onSubmit={submitHandler}>
                          
                      <input type="email" 
                             className="email ele" 
                             placeholder="youremail@email.com" name='email' value={Login.email || "" } onChange={handlerLogin} required />
                   
                             <div style={{display:'flex'}}>
                      <input type={passwordType}
                             className="password ele" 
                             placeholder="password" name='password' value={Login.password || "" } onChange={handlerLogin}  required />
                                <PasswordCheck setPasswordType={setPasswordType} passwordType={passwordType} />
                                                 </div>
                                                 
                      { Button && <button className="clkbtn" >Login</button> }
                      <br/>
                      <br/>

                     {show && <span style={{color:"rgb(250, 124, 124)"}}>Enter valid Email && Paasword</span> }
                     <br/>
                     <div className="toggle">  <span> You Don't have  Account ? go on  </span> <span id="toggle_id" onClick={()=>history.push('/signup')}> SignUp</span></div>
                      </form>
                  </div>
                  </div>
                  </div>
                  </div>
                  </Fade>
                  </Fragment>
            )
}