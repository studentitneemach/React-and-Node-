import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './Slider.css'
const data = [{  image:require('../../Images/image_1.PNG') }, 
{  image: require('../../Images/image_2.PNG') }, 
{ image: require('../../Images/image_3.PNG') }, 
{image:require('../../Images/image_4.PNG')},
{ image:require('../../Images/image_5.PNG')}];
const Slider=()=>{

  return (
    <div className="App">
      <div style={{ textAlign: "center" ,width:"100%" }}>
      
          <Carousel
            data={data}
            time={2000}
            width="1999px"
            height="700px"
         
            radius="5px"
            automatic={true}
            dots={true}
            style={{
              textAlign: "center",
              maxWidth: "1999px",
              maxHeight: "700px",
             margin: "40px auto",
            }}
          />
        </div>
      </div>

  );
    }

    export default Slider;
 
   