import React from "react";
import { Fade } from "react-reveal";

import './Contect_Us.css';


export const Contect_Us = () => {

    return (<div> 
 
        <section className="contect_section"   >
            <div className="container_section"> 
                <header className="section-header"><span>CONTACT US </span></header>
                
                <h3 className="line" style={{ marginBottom: "20px" }}></h3>
                <div className="info" >
                <div className="row"  > <Fade  left >
                              
                    <div className="email">
                        <p  className="phone-p"><span>✉</span></p>
                        <p className="email_p"> Email: </p>
                        <p className="info-ptag">abcd12345@gmail.com</p>
                    </div>

                    <div className="phone">
                        <p className="phone-p" ><span>📞</span></p>
                        <p className="call_p"> Call: </p>
                        <p className="info-ptag">1234567890 </p>
                    </div>
                    
                    </Fade>
                     
                </div>
                <hr style={{ background: "red", height: "5px", border: "none" }} />
                </div>
            </div>
        </section>
        <footer>
             
            <div className="footer-top">
                <div className="footer_container">
                    <div className="row">
                    <Fade top cascade >       
                    <div className="footer-info"> 
                        <center>MAHAKAL ONLINE BOOK</center>
                        <p style={{textAlign:"center"}}>
                        <strong>Phone:</strong> 1234567890<br/>
                <strong>Email:</strong> abcd12345@gmail.com<br/>
                        </p>
                        <center>
                            <div className="button_div"  >
                           <a href="https://t.me/mahakalonlinebook11" style={{cursor:"pointer" , }} className="telegram-contact"> 
                          Telegram Channel </a>   
                            </div>
                            
                        </center>
                       
                        </div>
                        </Fade>
                    </div>
                    <div className="footer_container">
                    <center className="copyright">
    &copy; Copyright <strong><span>ABCDEFGHILKKKKKKK</span></strong>. All Rights Reserved<br/>
    
  </center>
                    </div>
                </div>
            </div>
                                
        </footer>
    </div>
    )
                        }