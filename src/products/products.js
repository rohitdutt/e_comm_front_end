import React from "react";
import "./products.scss";
import {Link} from "@reach/router";

const Products = ({productId , productName }) => {

    let jsxToShow = (
        <div className={"products"}>
            <div className={"image"}/>
            <h2>{productName}</h2>
            <p> Rs.</p>
        </div>
    );

    return(
        <Link to={`/product/${productId}`} >
        {
            jsxToShow
        }
        </Link>

    )
};

export default Products;
