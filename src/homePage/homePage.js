import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/Rohitdutt.png";
import "./homePage.scss";

const homePage = () =>(
<div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={Logo} alt="logo"/>
        </Link>
        <div className="options">
        <Link className={"option"} to="/">
            Home
        </Link>
        <Link className="option" to="/products">
            Products
        </Link>
        {/*<Link to="">*/}
        {/*        CONTACT*/}
        {/*</Link>*/}
    </div>
</div>
);
export default homePage;
