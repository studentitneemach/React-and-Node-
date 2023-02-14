// import React, { useState } from "react";
// import { Url_List } from "./UrlList";
// import './Header.css';
// import { NavLink } from "react-router-dom";
// import {IoList} from 'react-icons/io5'; 
// import {Dropdown} from './Dropdown.js'



// export const Navbar=()=>{
//     const [clicked ,setClick] = useState(false);
//     const [dropdown,setDropdown]= useState(false)
//     const menuList = Url_List.map(({url,title},index)=> {
//         return (
//             <li key={index}>
//                 <NavLink to={url} exact activeClassName="active">{title}</NavLink>
//                 <Dropdown />
//             </li>
//         )
//     } )

//     const handleCLick=()=>{
//         setClick(!clicked)
//     }
//     return (
//         <nav>
//             <div className="logo">
//                 Header<font>gg</font>
//             </div>
//             <div className="menu-icon" onClick={handleCLick}>
//             <i className={clicked ?  "fas fa-times"+<IoList size={50}/> : "fas fa-bars"+<IoList size={50}/>}   ></i><IoList size={50}/>
//             </div>
//           <ul className={clicked ? "menu-list" : "menu-list close"} onClick={handleCLick}>{menuList} </ul>
          
//         </nav>
//     )
// }
import React, {  useState } from "react";
import { Url_List } from "./UrlList";
import './Header.css';
import {IoList} from 'react-icons/io5'; 
import { MenuItem} from './Dropdown.js'



export const Navbar=()=>{
    const [clicked ,setClick] = useState(false);
   
    const handleCLick=()=>{
        setClick(!clicked)
    }
    const menuList = Url_List.map((menu,index)=> {
        return <MenuItem items={menu} key={index} onClickFun={handleCLick} />
    } )
  
    // useEffect(()=>{
   
       
    //     document.body.style.minHeight = '100vh';
    //     document.body.addEventListener ('click',handleCLick);
    //     return ()=>{
    //       document.body.removeEventListener ('click',handleCLick);
    //     }
    //   },[])
  
 
    // console.log(document.body.style.minHeight)
    
    return (
        <nav>
            <div className="logo">
                Header<font>gg</font>
            </div>
            <div className="menu-icon" onClick={handleCLick}>
            <i className={clicked ?  "fas fa-times"+<IoList size={50}/> : "fas fa-bars"+<IoList size={50}/>}   ></i><IoList size={50}/>
            </div>
          <ul className={clicked ? "menu-list" : "menu-list close"} >{menuList}</ul>
          
        </nav>
    )
}
export  const LoginNavBar=()=>{
    const [clicked ,setClick] = useState(false);
   
    const handleCLick=()=>{
        setClick(!clicked)
    }
    const Url_List = [  {title:"SignUp", url: "/signup"},
    {   title: "Login", url: "/"}];
    const menuList = Url_List.map((menu,index)=> {
        return <MenuItem items={menu} key={index} onClickFun={handleCLick} />
    } )
    return (
        <nav>
             <div className="logo">
                Header<font>gg</font>
            </div>
            <div className="menu-icon"  onClick={handleCLick}>
            <i className={clicked ?  "fas fa-times"+<IoList size={50}/> : "fas fa-bars"+<IoList size={50}/>}   ></i><IoList size={50}/>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"} >{menuList}</ul>
        </nav>
    )
} 