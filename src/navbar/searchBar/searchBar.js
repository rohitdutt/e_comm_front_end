import React from "react";
import "./searchBar.scss";
import i from "semantic-ui-react";

const searchBar = () => {
    return(
        <div className={"search-bar"}>
            <input
                type={"text"}
                placeholder={"Search for Products here"}
                onChange={(e)=>{
                    console.log(e.target.value)
                }}
            />
            <i className="search icon"/>
        </div>
    )
}

export default searchBar;
