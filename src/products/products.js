import React from "react";
import "./products.scss";
import {Link} from "@reach/router";

const Products = ({productId , productName , sellingPrice}) => {
    return(
        <Link to={`/product/${productId}`}>
            <div className={"products"}>
                <div className={"image"}/>
                <h2>{productName}</h2>
                <p>{sellingPrice} Rs.</p>
            </div>
        </Link>
    )
};

export default Products;
