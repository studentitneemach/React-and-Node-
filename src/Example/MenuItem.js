import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./DropWown";
export  const MenuItoms=({items})=>{
   const [dropdown,setDropdown]= useState(false)

    return(
        <li  >
            {items.submenu  ? (<>
            <div type="button" aria-expanded={dropdown ? 'true' :"false"} 
            onClick={()=>setDropdown(!dropdown)}>{items.title}{' '}
             <Dropdown submenu={items.submenu} dropdown={dropdown} />
            </div></>):  <NavLink to={items.url}>{items.title}</NavLink> 
            }
        </li>
    )
}