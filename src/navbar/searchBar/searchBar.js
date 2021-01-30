import React from "react";
import "./searchBar.scss";

const searchBar = () => {
    return(
        <nav className={"search"}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required placeholder={"Search here"}/>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default searchBar;
