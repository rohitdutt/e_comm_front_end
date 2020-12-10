import React from "react";
import "./navbar.scss";
import SearchBar from "./searchBar/searchBar";
import {Icon} from "semantic-ui-react";
import Logo from "./../assets/ShopEasy.svg";
import {Link} from "@reach/router";

const navbar = () =>{
    return(
        <div className={"navbar"}>
            <Link to={"/"}>
                <img src={Logo} alt={"ShopEasy"}/>
            </Link>
            <SearchBar className={"search-bar"}/>
            <button className={"navbar-button"}>Your Orders</button>
            <button className={"navbar-button"}>Sign In/Up </button>
            <Icon className="shopping cart"><span>Cart</span></Icon>
        </div>
    )
}

export default navbar;
