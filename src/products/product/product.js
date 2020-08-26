import React from "react";
import "./product.scss";
import Button from "../../button/button";
import {Link} from "react-router-dom";

const product = (props) => {
        console.log(props.location.product);

        return (
        <div className="product">
            <div>
                <div className="product-image">
                    <h2>Image is not available at this moment</h2>
                </div>
                <div className="description">
                    <h1>{props.location.product.itemName}</h1>
                    <p>Rs. : {props.location.product.sellPrice}</p>
                    <p>available units : {props.location.product.availableUnit}</p>
                    <p>Description is not available at this moment</p>
                    <Button className={"button"}>
                        <Link className={"link"} to={
                            {
                                pathname:"/reviews",
                                productId:props.product
                            }
                        }>
                            Reviews
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default product;
