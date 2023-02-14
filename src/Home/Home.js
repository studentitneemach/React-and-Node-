import React, { Fragment, } from "react";
import { Fade, Zoom } from "react-reveal";
import ReactTyped from "react-typed";
import { AiTwotoneTrophy, AiTwotoneCrown, AiOutlineGlobal } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import "./Home.css";
// import  {} from '../Images/'
import { Contect_Us } from "../ContectUs/Contect_Us";
import Slider  from "./SliderFolder/Slider";
////////////////////////////////////////////////////////
 //import { Dropdown } from 'rsuite';
////////////////////////////////////////////////////////////////
const payment_Image = [
    { name: 'pay_1', image: require('../Images/payment_1.PNG') },
{ name: 'pay_2', image: require('../Images/payment_2.PNG') },
{ name: 'pay_3', image: require('../Images/payment_3.PNG')  },
{ name: 'pay_4', image: require('../Images/payment_4.PNG') }]
////////////////////////////////////////////////////////////



/////////////////////////////////////////////
export const Home = () => {

    return (
        <Fragment>
            <header>
                <div>
                  {
                <Slider/>
                  }
                </div>

                <div className="telegram-div" >
                    <Fade left cascade>    <div style={{ textAlign: "center" }}>
                        <div className="telegram"><a href="https://t.me/mahakalonlinebook11"><span>Join Telegram</span></a> </div>
                        <div className="telegram"><a href="http://localhost:3000/panel_site"><span>Book Panel Site</span></a> </div>
                        <div className="telegram"><a href="http://localhost:3000/client_site"><span>Demo Site / Client Sites</span> </a></div>
                        <div className="telegram"><a href="https://mahakalbookonline.com/demo-videos.html"><span>Demo Videos</span> </a></div>
                        <div className="telegram"><a href="https://api.whatsapp.com/send?phone=918579997578"><span>New Id / Refill</span> </a></div>
                        <div className="telegram"><a href="https://api.whatsapp.com/send?phone=918579997578"><span>Need Withdrawl</span></a> </div>
                        <div className="telegram"><a href="https://mahakalbookonline.com/user-screenshot.html"><span>User Screenshots</span> </a></div>
                    </div>
                    </Fade>
                </div>
                <Zoom cascade>
                    <div className="about_us">
                        <span>About Us</span>
                        <h3 className="line" />
                        <p> We provide various betting exchanges with more than 30 platforms to
                            play on different types of sports , games , casino and binary markets We
                            provide all the levels of Agency and client IDs Admin , Senior sup
                            er ,Super Master Master , Player ID . We provide white label of all
                            websites , Make your own website.</p>

                    </div>
                </Zoom>
                <div className="static">
                    <div className="static_div" > This Web    <ReactTyped style={{ color: "red" }}
                        strings={[
                            "I'm a Full Stack Developer",
                            "I Love Software Development",
                            "I Love All My Subscribers",
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    /> </div>



                </div>
            </header>
            <section>
                <div>
                    <div className="about_us" style={{ marginTop: "80px" }}>
                        <span style={{ fontSize: "28px", fontWeight: "bold", }}>IMPORTANT STATISTICS</span>
                        <h3 className="line" style={{ marginBottom: "17px" }}></h3></div>
                    <div>
                    </div>
                  <Fade left cascade>  <div className="about_us profile">
                        <div>
                            <span><AiOutlineGlobal size={40} color={"green"} /></span>
                            <h1 style={{ fontSize: "35px", color: "green" }}>1</h1>
                            <h4>Position In Market</h4>
                        </div>
                        <div>
                            <span><CgProfile size={40} color={"green"} /></span>
                            <h1 style={{ fontSize: "35px", color: "green" }}>20600</h1>
                            <h4>World-Wide Registered Punters</h4>
                        </div>
                        <div>
                            <span><AiTwotoneCrown size={40} color={"green"} /></span>
                            <h1 style={{ fontSize: "35px", color: "green" }}>2600</h1>
                            <h4>Total Active Punters</h4>
                        </div>
                        <div>
                            <span><AiTwotoneTrophy size={40} color={"green"} /></span>
                            <h1 style={{ fontSize: "35px", color: "green" }}>1500</h1>
                            <h4>Winners Every Month</h4>
                        </div>

                    </div>
                    </Fade>

                    <div>
                        <Zoom cascade><div className="about_us">
                            <span>DEALING TERMS</span>
                            <h3 className="line" style={{ marginBottom: "20px" }}></h3>
                        </div>
                            <center className="deling" >
                                <div style={{ display: 'flex' }} ><div className="deling_type"><span>MinDeposit</span></div><div className="deling_type" id="deling_4" ><span>₹500</span></div></div>
                                <hr className="hr_line" />

                                <div style={{ display: 'flex' }} ><div className="deling_type"><span>MinId</span></div><div className="deling_type" id="deling_4"><span>₹500</span></div></div>
                                <hr className="hr_line" />

                                <div style={{ display: 'flex' }} ><div className="deling_type"><span>MaxProcessTime</span></div><div className="deling_type" id="deling_4"><span>15min</span></div></div>
                                <hr className="hr_line" />

                                <div style={{ display: 'flex' }} ><div className="deling_type"><span>Timing</span></div><div className="deling_type" id="deling_4"><span>9amTo2pm</span></div></div>
                                <hr className="hr_line" />
                            </center>
                        </Zoom>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <div className="about_us">
                            <span>PAYMENTS ACCEPTED</span>
                            <h3 className="line" style={{ marginBottom: "20px" }}></h3>
                        </div>
                        <div>
                            <Fade right cascade> <center >
                                {
                                    payment_Image.map((image, index) => <div key={index} >
                                        <img src={image.image} alt={image.name} width="130px" height="auto" />
                                        <Zoom><hr className="hr_line" /></Zoom>
                                    </div>)
                                }
                            </center>
                            </Fade>
                        </div>
                    </div>

                    {/* <div style={{ marginTop: '6rem' }}>
                        <div className="about_us"><span>WHAT CUSTOMERS SAY..</span>
                            <h3 className="line" style={{ marginBottom: "20px" }}></h3></div>
                     <Zoom cascade> 
                      <div >
                           {/* <TextSlider /> 
                        </div>
                        </Zoom> 
                    </div> */}
                </div>
            </section>
            <section>
                <Contect_Us />
            </section>
        </Fragment>
    );
} 