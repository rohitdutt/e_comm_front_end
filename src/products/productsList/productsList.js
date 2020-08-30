import React from "react";
import Button from "../../button/button";
import {Link} from "react-router-dom";
import "./productsList.scss";

const productsList =(props)=>(
     <div className="productsList">
                <div className="image">
                    <h1>image</h1>
                </div>
                <div>
                    <h5>{props.product.itemName}</h5>
                    <p>Rs. : {props.product.pricePerUnit}</p>
                    <Button className={"button"}>
                        <Link className={"link"} to={
                            {
                                pathname:"/product",
                                product:props.product
                            }
                        }>
                            Buy Now
                        </Link>
                    </Button>
                </div>
            </div>
);


export default productsList;
