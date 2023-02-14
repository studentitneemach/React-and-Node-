import React ,{Fragment} from "react";
import { Roll } from "react-reveal";
import { Contect_Us } from "../../ContectUs/Contect_Us";
import './Online_Gaming_Rules.css';
const Data = [ 
    `THERE IS A CHANCE OF 1-2% THAT SITE WILL BE DOWN DUE TO SOME REASON AT ANY POINT OF TIME.IN SU
    CH CASES ALL THE BETS WILL BE VALID.WE WILL NOT 
    BE HELD RESPONSIBLE FOR SITE ERROR AT ANY POINT OF TIME.PROFIT/LOSS IN SUCH SCENARIOS WILL BE COMPLETELY VALID.`,
   `CASINO SETTLING IS DONE BY THE SITE.SO ANY ERROR IN SETTLING WILL NOT BE OUR RESPONSIBILITY.PROFIT/LOSS IN SUCH CASES WILL TOTALLY BELONG TO THE CLIENT.`,
   `IN CASE OF A BET NOT BEING SETTLED AND LEFT IN EXPOSURE.PLEASE WAIT FOR 48-72 HOURS FOR THE SETTLEMENT.IF IT DOES NOT GET SETTLED EVEN AFTER THAT PLEASE CONTACT US.`,
   `ONLY TWO BETS VALID ON TIE.IF YOU PLACE MORE THAN TWO BETS,LOSS WILL BE VALID & PROFIT WILL BE VOID.`,
   `WE DO NOT ACCEPT BETS ON HORSE AND DOG RACE.`,
   `WE DO NOT ACCEPT BETS ON ANY TENNIS FANCY.LOSS WILL BE VALID,PROFIT WILL BE VOID IF YOU PLAY.`,
    ]
export  const Online_Gaming_Rules=()=>{
    const Infometion = Data.map((info,index)=><Roll right key={index} ><div  className='inform'>
    <p> {info}</p>
   </div></Roll>)
   return (
     <Fragment>
        <section>
   
   <div className="about_us" style={{marginTop:"50px" }}>
   <span>ONLINE GAMING RULES</span>
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