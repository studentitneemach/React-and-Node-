import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import {Home} from './Home';
import {Servies} from './Servies';
import {About} from './About';
import {First} from './FIrst';
import {Second} from './Second';
import {Third} from './Third' 
export  const Example=()=>{
    return(
<Fragment>
    <Navbar />
    <Route path='/' component={Home} exact />
    <Route path='/first' component={First}  />
    <Route path='/second' component={Second}  />
    <Route path='/third' component={Third}  />
    <Route path='/about' component={About}  />
    <Route path='/service' component={Servies}  />

</Fragment>
    )
}