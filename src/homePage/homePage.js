import React from "react";
import "./homePage.scss";
import Navbar from "../navbar/navbar";
import Sidebar from "../sideBar/sideBar";
import PosterCarousel from "../posterCarousel/posterCarousel";

const homePage = () =>(
    <div>
        <div>
            <Navbar/>
            <div className={"second-area"}>
                <Sidebar/>
                <PosterCarousel/>
            </div>
        </div>
    </div>
);
export default homePage;
