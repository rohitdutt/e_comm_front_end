import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/Rohitdutt.png";
import "./homePage.scss";
import SignUpPoster from "../assets/20200828_130959_0000.png"

const homePage = () =>(
    <div>
        <div className="header">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo"/>
                </Link>
                <div className="options">
                    <Link className={"option"} to="/">
                        Home
                    </Link>
                    <Link className="option" to="/products">
                        Products
                    </Link>
                    <Link className="option" to="/signIn">
                        Sign In/Up
                    </Link>
                </div>
        </div>
        <div className="posters">
            <Link to={"signUp"}>
                <img src={SignUpPoster} alt={"signUp"}/>
            </Link>
        </div>
    </div>
);
export default homePage;
