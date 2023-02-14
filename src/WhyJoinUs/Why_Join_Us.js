import React, { Fragment,  } from 'react'
import { Contect_Us } from '../ContectUs/Contect_Us';
import Roll from 'react-reveal/Roll';
import './why_join.css';

const Data = [ 
'ONE OF THE MOST TRUSTED BOOK IN WHOLE MARKET.',
'AVAILABLE FOR 18 HOURS IN A DAY FOR ANY SERVICE.',
'ANY ISSUE RESOLVED IN VERY SHORTEST PERIOD.',
'WE PROVIDE CLIENT FRIENDLY SITES AND SERVICE.',
'WE DEAL ONLY WITH PREMIUM QUALITY SITES',
'ALL DOUBTS AND QUERIES SOLVED IN MINUTES.'
]

export  const Why_Join_Us=()=>{
    // useEffect(()=>{
   
    //   const FunctionCall=()=>{
    //     console.log('functioa is calling')
    //   }
    //   document.body.style.minHeight = '100vh';
    //   document.body.addEventListener ('click',FunctionCall);
    //   return ()=>{
    //     document.body.removeEventListener ('click',FunctionCall);
    //   }
    // },[])

  const Infometion = Data.map((info,index)=><Roll right key={index} ><div  className='inform'>
 <p> {info}</p>
</div></Roll>)

return (
  <Fragment>
     <section>

<div className="about_us" style={{marginTop:"50px" }}>
<span>Demo Sites / Client Sites</span>
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