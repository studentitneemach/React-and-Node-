import React, { Fragment } from "react";
import { Fade } from 'react-reveal';
import {Contect_Us} from '../ContectUs/Contect_Us'
import "./ClientSite.css"

export  const customer=[{site:"Abexch9.com",id:"Rajdemo98",pass:" 654321" ,image: require('../Images/image_6.PNG') ,
 panel_site:"https://www.skyexchange.com/",panel_name:"skyexchange.com"  , corruncy:"Skyexchange (INR/USD)"},

{site:"LotusBook247.io",id:"Rajdemo247",pass:"123456" ,image:  require('../Images/image_7.png') ,
 panel_site:"https://www.lotusbook247.com/d/index.html#/home",panel_name:"Lordexchange.com"  , corruncy:"Lotusbook247 (USD/INR)"},

{site:"Coexchange9.com",id:"Rajdemoco",pass:"Rajdemoco" ,image: require('../Images/image_8.PNG') ,
 panel_site:"https://www.hugedomains.com/domain_profile.cfm?d=lordexchange.com",panel_name:"Skyinplay.com"  , corruncy:"Lordexchange (INR)"},

{site:"Kingexchange.com",id:"Rajdemo1",pass:"Abcd1234" ,image: require('../Images/image_9.PNG') ,
 panel_site:"https://www.skyinplay.com/",panel_name:"Abexch9.com"  , corruncy:"SkyInPlay"},

{site:"Skyexchange.com",id:"Rajdemo1",pass:"Abcd1234" ,image : require('../Images/image_10.PNG') ,
 panel_site:"https://www.abexch9.com/",panel_name:"KingExchange.com"  , corruncy:"Abexch"},

{site:"Maxwin9.com",id:"Rajdemo78",pass:"Abcd1234" ,image: require('../Images/image_11.PNG') ,
 panel_site:"https://kingexchange.com/#/home",panel_name:"Coexchange9.com"  , corruncy:"King Exchange"},

{site:"theroyalexch.in",id:"Rajdemo78",pass:"Abcd1234" ,image : require('../Images/image_12.PNG') ,
 panel_site:"https://www.lotusbook247.io/d/index.html#/",panel_name:"LotusBook247.io"  ,image:  require('../Images/image_7.png') , corruncy:"Co Exchange 9"} ,

{ site:"theroyalexch.in",id:"Rajdemo78",pass:"Abcd1234" ,panel_site:"https://www.maxwin9.com/login",panel_name:"maxwin9.com"  ,image:  require('../Images/image_7.png') , corruncy:"maxwin9"},

{site:"theroyalexch.in",id:"Rajdemo78",pass:"Abcd1234" , panel_site:"https://www.lotusbook.io/d/index.html#/",panel_name:"Theroyalexch.com"  ,image:  require('../Images/image_7.png') , corruncy:"The Royal Exch"},

{site:"theroyalexch.in",id:"Rajdemo78",pass:"Abcd1234" , panel_site:"https://www.lotusbook.io/d/index.html#/",panel_name:"LotusBook.io"  ,image:  require('../Images/image_7.png') , corruncy:" Lotus Book.io"},

]

export const  Client_Site =()=> {
 
  return( 
<Fragment><>
  <section>

  <div className="about_us" style={{marginTop:"50px" }}>
  <span>Demo Sites / Client Sites</span>
                        <h3 className="line"></h3>
  </div>
  </section>
  <div>
    {
      customer.map((custom,index)=><div key={index} className="clientSite">
        <Fade  right cascadle>
        <div><img src={custom.image} />
        <span style={{marginTop:'10px'}} >
        ID - {custom.id}<br/>
         PASS - {custom.pass}</span></div>
        </Fade>
        <br/>
        <Fade left>
        <p className="p-site">{custom.site}</p>
        </Fade>
        <hr className="hr_line" style={{marginRight:"15rem" ,marginTop:'0px' }}  />
      </div>)
    }
  </div>
  <Contect_Us />
  </>
</Fragment>
    )
}