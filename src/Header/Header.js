import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import './Header.css'
import { LoginNavBar, Navbar } from "./Navbar";
import { Home } from '../Home/Home';
import { Client_Site } from '../ClientSite/Client_Site';
import { Panel_Site } from '../PanelSite/PanelSite';
import { Why_Join_Us } from '../WhyJoinUs/Why_Join_Us';
import { Contect_Us } from '../ContectUs/Contect_Us'
import { Refill_Rules } from "../Rule/Refill_Rules/Refill_Rules";
import { Withdrawl_Rules } from "../Rule/Withdrawl_Rules/Withdrawl_Rules";
import { Online_Gaming_Rules } from '../Rule/Online_gameing_Rules/Online_Gaming_Rules'
import { Login } from "../UserInformetion/Login/Login";
import { SignUp } from "../UserInformetion/SignUp/Sign_Up";
import { useSelector, } from "react-redux/es/exports";
import { Logout } from "../UserInformetion/LogOut/LogOUt";




export const Header = () => {
    const [isVerified, setIsVerified] = useState(false);
    const state = useSelector(state=> state.user)

    useEffect(()=>{
        if(state.length === 0 ){
            setIsVerified(false)
          
        }else{
            setIsVerified(true)
        }
    },[state])


    if (!isVerified) {
        return (
            <BrowserRouter>
        <LoginNavBar/>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={SignUp} />
            </BrowserRouter>
        )
    }
    else {
        return (<BrowserRouter>
            <div className="container">

                <hr className="hr-line" />
                <Navbar />
                <Route path="/" component={Home} exact />
                <Route path="/client_site" component={Client_Site} />
                <Route path="/panel_site" component={Panel_Site} />
                <Route path="/rules" />
                <Route path="/withdrawl_rules" component={Withdrawl_Rules} />
                <Route path="/refill_rules" component={Refill_Rules} />
                <Route path="/online_gaming_rules" component={Online_Gaming_Rules} />
                <Route path="/why_join_us" component={Why_Join_Us} />
                <Route path="/contect_us" component={Contect_Us} />
                <Route path="/logout" component={Logout} />
            </div>
        </BrowserRouter>


        )
    }
}