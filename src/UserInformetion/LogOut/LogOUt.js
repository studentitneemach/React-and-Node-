import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export const Logout=()=>{
    const dispatch = useDispatch();
    const history = useHistory()
const LogoutFunction=()=>{
    dispatch({type:"REMOVE"});
    history.push('/');
}
    return (
        <div>
            <button onClick={LogoutFunction}>Logout</button>
        </div>
    )

} 