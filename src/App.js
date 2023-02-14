import React, { Fragment, useEffect, useState,   } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Slider } from './UserInformetion/login_Or_SignUp';
import { Header } from './Header/Header';


function App() { 
  const [TotalAmount, setTotleAmount] = useState('');

const data = [{price:500,amount: 20 ,discount:10 },{price:600,amount: 30 ,discount:10 },{price:700,amount: 40 ,discount:10 }] ;
function Total(){
const total=[];

 data.map((data)=> total.push(data.price+data.amount-data.discount));
 const TotalAmount = total.reduce((a,b)=>a+b,0)
 
 return  setTotleAmount(TotalAmount)
}
useEffect(()=>{Total()},[])
// console.log(TotalAmount);


  return (
    <Fragment>
      {/* <Slider/> */}
    {/* {state.length !== 0  ? <Header />  : <Slider/> } */}
    {/* <Header /> */}
{TotalAmount}
    </Fragment>
  );
}

export default App;