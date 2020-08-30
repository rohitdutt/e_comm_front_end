import React from "react";
import signInUpImage from "../assets/signInUp.jpg";
import "./signInSignUp.scss";

const signInSignUp = () =>(
    <div>
        <div className={"container"}>
            <img src={signInUpImage} alt={"signin"}/>
        </div>
    </div>
)

export default signInSignUp;
