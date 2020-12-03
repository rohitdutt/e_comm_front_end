import React from "react";
import "./sideBar.scss";
import CollapsableList from "./collapsableList/collapsableList";

const sideBar = () =>{
    return(
        <div className={"sidebar"}>
            <h2>Trending</h2>
            <h2>Shop by Categories</h2>
            <CollapsableList/>
        </div>
    )
};

export default sideBar;
