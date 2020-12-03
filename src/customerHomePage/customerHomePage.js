import React from "react";
import {Link} from "react-router-dom";
import "./customerHomePage.scss";

const customerHomePage = () =>{
    return(
        <div>
            <div className="dropdown">
                <button >Dropdown</button>
                <div className="dropdown-content">
                    <Link to={"/"}>Your Account</Link>
                    <Link to={"/"}>Orders</Link>
                    <Link to={"/"}>Sign Out</Link>
                </div>
            </div>
        </div>
    );
}

export default customerHomePage;
