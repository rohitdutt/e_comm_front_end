import React from "react";
import "./navbar.scss";
import SearchBar from "./searchBar/searchBar";
import {Icon} from "semantic-ui-react";
import Logo from "./../assets/ShopEasy.svg";
import {Link} from "@reach/router";

const navbar = () =>{

    const isUserLogedIn = localStorage.getItem()

    if()

    return(
        <div className={"navbar"}>
            <Link to={"/"} id={"image"}>
                <img src={Logo} alt={"ShopEasy"}/>
            </Link>
            <SearchBar className={"search-bar"}/>
                <Link to={"/"} id={"first"}>
                    Your Orders
                </Link>

                <Link to={"/"}>
                    <Icon className="shopping cart">
                        <span>
                            Cart
                        </span>
                    </Icon>
                </Link>
        </div>
    )
}

export default navbar;
