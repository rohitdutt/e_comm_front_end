import React, {useEffect, useState} from "react";
import "./product.scss";
import Axios from "axios";
import Reviews from "./reviews/reviews";

const Product = ({productId}) => {

    const [product,setProduct] = useState({
            productId:"",
            productName:"",
            brandId:{},
            categoryId :{},
            subCategoryId:{},
            sellerId:{}
    });

    const [productPrice,setProductPrice] = useState({
        productDetails:"",
        pricePerUnit:0
    });

   const [productDescription , setProductDescription] = useState({
            productDescription:"",
            color:"",
            description:"",
            image:"",
            productContains:[],
            size:0
   });


    useEffect(()=>{
        Axios.get(`http://localhost:8080/api/v1/product/product-id/${productId}`)
            .then(response => {
                    console.log(response)
                setProduct({...response.data});
                console.log(product.productName)
                }
            ).then(()=>{
            Axios.get(`http://localhost:8080/api/v1/product/product-description-product-id/${productId}`)
                .then(response => {
                        console.log(response)
                        setProductDescription({...response.data});
                    }
                )
        }).then(() =>{
            Axios.get(`http://localhost:8080/api/v1/product/product-price-product-id/${productId}`)
                .then(response => {
                        console.log(response)
                        setProductPrice({...response.data});
                        console.log(product.productName)
                    }
                )
        }).catch(error => {
            console.log(error)
        });
    },[product.productName, productId])

    return(
        <div>
            <div className={"product"}>
                <div className={"product-left"}>
                    <div className={"prod-image"}>
                        <img src={productDescription.image} alt={"img"}/>
                    </div>
                    <button className={"cart-button"}>Add to cart</button>
                </div>
                <div className={"product-right"}>
                    <h1>{product.productName}</h1>
                    <h3 className={"brand"}>by <span>{product.brandId.brandName}</span></h3>
                    <h1>{productPrice.sellingPrice} Rs.</h1>
                    <h3>Product Description</h3>
                    <h4>name : {product.productName}</h4>
                    <p>brand : {product.brandId.brandName}</p>
                    <p>size : {productDescription.size}</p>
                    <p>package contains : N/a</p>
                    <p>description : {productDescription.description}</p>
                </div>
            </div>
            <Reviews/>
        </div>
    )
};

export default Product;
