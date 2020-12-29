import React, {useEffect, useState} from "react";
import "./product.scss";
import Axios from "axios";

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
                        console.log(product.productName)
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
        <div className={"product"}>
            <div className={"product-left"}>
                <div className={"prod-image"}>
                    <img src={productDescription.image} alt={"img"}/>
                </div>
                <button className={"cart-button"}>Add to cart</button>
            </div>
            <div>
                <h1>{product.productName}</h1>
                <h3>by {product.brandId.brandName}</h3>
                <h1>{productPrice.sellingPrice} Rs.</h1>
                <div>
                    <h3>Product Description</h3>
                    <h4>name : {product.productName}</h4>
                    <p>brand : {product.brandId.brandName}</p>
                    <p>size : {productDescription.size}</p>
                    <p>package contains : N/a</p>
                    <p>description : {productDescription.description}</p>

                </div>
            </div>
        </div>
    )
};

export default Product;
