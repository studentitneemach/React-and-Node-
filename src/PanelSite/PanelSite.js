import React,{ Fragment } from "react";
import './Panel_Site.css'
import {customer} from '../ClientSite/Client_Site';
import { Contect_Us } from "../ContectUs/Contect_Us";
import { Zoom } from "react-reveal";

export const  Panel_Site=()=>{
    const Panel_Site_Data= customer.map((data,index)=> <div key={index} >
        <div className="panelSite">
        <div>
            <div><img src={data.image} className="img" alt={index} /></div>
        </div>
        <div className="data-div">
            <a href="#">{data.corruncy}</a>
            <br/>
            <a href={data.panel_site}>{data.panel_name}</a>
        </div>
        </div>
       <br/>
    </div>)
  return (
    <Fragment><>
          <section>

<div className="about_us" style={{marginTop:"50px" }}>
<span>Panel Sites</span>
                      <h3 className="line"></h3>
</div>
</section>

      <Zoom><div style={{  marginTop: "50px"}}> {Panel_Site_Data}</div></Zoom> 
        <Contect_Us />
        </>
    </Fragment>
  )
}
