import React from "react";
import "./products.scss";
import  {Link} from "react-router-dom";

const Products = (props) => {
    return(
        <Link to={"/product"}>
        <div className={"products"}>
            <div className={"image"}/>
            <h2>{props.products.productName}</h2>
            <p>price</p>
            <div>
                ratings
            </div>
        </div>
        </Link>
    )
};

export default Products;
