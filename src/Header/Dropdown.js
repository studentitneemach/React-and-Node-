import React, { useState } from "react";

import './dropdown.css'
import { NavLink } from "react-router-dom";

export const  MenuItem=({items ,onClickFun})=>{
    const [dropdown,setDropdown]= useState(false) ;

    return (
        <li className="menu-items">
        {
            items.submenu ? (<> 
            
            <div tuye="button" className="drop_div" aria-expanded={dropdown ? 'true' :"false"}  onClick={()=>{setDropdown(!dropdown) }} >{items.title}{" "}
          <Dropdown submenu={items.submenu} dropdown={dropdown} onClickFun={onClickFun}  />
            </div> </>) : <NavLink to={items.url} exact  onClick={()=>{setDropdown(!dropdown); onClickFun() }}  >{items.title}</NavLink>
        }
        </li>
    )
} 
// 
export  const  Dropdown=({submenu ,dropdown,onClickFun})=>{
 
    return (
        <ul className={`dropdown${dropdown ? "show":''} li_Tage `}   > {
            submenu.map((submenu,index)=>(
                <li key={index}   >

                    <NavLink to={submenu.url}  className="drop_div" onClick={()=>onClickFun()} >{submenu.title}</NavLink>

                </li>
            ))
            }</ul>
    )
}