import React from "react";
import './dropdown.css'
import { NavLink } from "react-router-dom";
export  const  Dropdown=({submenu ,dropdown})=>{
    return (
        <ul className={`dropdown${dropdown ? "show":''}`} > {
            submenu.map((submenu,index)=>(
                <li key={index}>
                    <NavLink to={submenu.url}>{submenu.title}</NavLink>

                </li>
            ))
            }</ul>
    )
}