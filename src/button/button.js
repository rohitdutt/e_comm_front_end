import React from "react";
import "./button.scss";

const button = (props) =>(
        <button className="button">
            {props.children}
        </button>
);

export default button;
