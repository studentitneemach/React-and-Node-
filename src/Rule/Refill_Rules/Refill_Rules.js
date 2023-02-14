import React ,{Fragment} from "react";
import { Roll } from "react-reveal";
import { Contect_Us } from "../../ContectUs/Contect_Us";
import './Refill_Rules.css';

const Data = [ 
    'DEPOSIT DONE WITH PAYMENT DETAILS WILL ONLY BE VALID.',
    "PAYMENT SLIP-ID SITE TO BE GIVEN FOR DEPOSIT",
    'PAYMENT WILL BE DONE BEFORE 11AM',
  [`WAITING TIME FOR REFILL` ,` MINIMUM 10MINS`,` MAXIMUM 30MINS`,],
    'DO NOT WASTE YOUR TIME AND OURS BY GIVING FAKE SLIP',
    ]

export  const Refill_Rules=()=>{

    const Infometion = Data.map((info,index)=><Roll right key={index} ><div  className='inform'>
  <p> { index === 3  ? info.map((data,id)=><span key={id} >{data}<br/><br/></span>) : info }</p>

      {/* <div> 
      {
     (index === 3 && index === 4 && index ===5 )  ? userStore.push(info) && userStore    : (<p> {info}</p>)
      }</div> */}
{/* <p> {info }<br/></p> */}

</div></Roll>)
 
return (
  <Fragment>
     <section>

<div className="about_us" style={{marginTop:"50px" }}>
<span>REFILL RULES</span>
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
