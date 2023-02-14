import React, { Fragment } from "react";
import { Roll } from "react-reveal";
import { Contect_Us } from "../../ContectUs/Contect_Us";
import './Withdrawl_Rules.css';

const Data = [ 
    'MONDAY TO SATURDAY EXCLUDING BANK HOLIDAY.',
    'FORM ACCEPTED TILL SHARP 8AM',
    'PAYMENT WILL BE DONE BEFORE 11AM',
    'NO EXTRA MESSAGES AFTER SUBMITTING FORM',
    'CLIENTS DEPOSITING IN PAYTM WILL BE GIVEN WITHDRAW ONLY IN PAYTM',
    'WE CANNOT PROVIDE WITHDRAWAL ON BANK HOLIDAY.',
    "WE CANNOT PROVIDE ANY KIND OF EMERGENCY WITHDRAWL."
    ]
export  const Withdrawl_Rules=()=>{
 
    const Infometion = Data.map((info,index)=><Roll right key={index} ><div  className='inform'>
    <p> {info}</p>
   </div></Roll>)
   return (
     <Fragment>
        <section>
   
   <div className="about_us" style={{marginTop:"50px" }}>
   <span>WITHDRAWL RULES</span>
                         <h3 className="line"></h3>
   </div>
   </section>
   
   <div style={{marginTop:"50px" ,marginLeft:'20px',marginRight:'20px' }}>
   {Infometion}
   </div>
   
   <Contect_Us />
     </Fragment>
     )
}