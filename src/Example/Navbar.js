import React from "react";
import { MenuItoms } from "./MenuItem";
import { menuIcons } from "./Url";
export  const Navbar=()=>{
    return (
        <nav>
            <ul>{
                menuIcons.map((menu,index)=>{
                    return <MenuItoms items={menu} key={index} />
                })}</ul>
        </nav>
    )
}