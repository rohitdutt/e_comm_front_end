import React, {useEffect, useState} from "react";
import "./productsList.scss";
import Products from "../products";
import Axios from "axios";
import {Col} from "react-bootstrap";

const ProductsList = ({subCategoryId}) =>{

    const [products , setProducts] = useState([]);
    const [productPrice , setProductPrice] = useState([]);


    useEffect (()=>{
        console.log(subCategoryId)
            const one =`http://localhost:8080/api/v1/product/product-sub-category/${subCategoryId}`;
        Axios.get(one)
               .then(response => {
                        console.log(response)
                        setProducts(response.data)
                    }
                ).catch(error => {
                console.log(error)
            });
    },[subCategoryId,products.productId]);



    return(
              <div className="ui grid">
              {
                  products.map((product) =>(
                      <div className="four wide column">
                        <Products className={"product"} key={product.productId} productId={product.productId}
                                productName={product.productName} sellingPrice={productPrice.sellingPrice}/>
                      </div>
                  ))
              }
              </div>
     )
}


export default ProductsList;
