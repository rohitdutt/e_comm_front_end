import React, {useEffect, useState} from "react";
import "./productsList.scss";
import Products from "../products";
import Axios from "axios";

const ProductsList = ({subCategoryId}) =>{

    const [products , setProducts] = useState([]);
    const [productPrice , setProductPrice] = useState([]);

    useEffect (()=>{
        console.log(subCategoryId)
        Axios.get(`http://localhost:8080/api/v1/product/product-sub-category/${subCategoryId}`)
               .then(response => {
                        setProducts(response.data)
                        Axios.get(`http://localhost:8080/api/v1/product/product-price-product-id/${response.data.productId}`)
                            .then(r =>{
                                const data = r.data;
                                setProducts(data)
                            })
                    console.log(products);
                    }
                ).catch(error => {
                console.log(error)
            });
    },[products, subCategoryId]);

    return(
              <div className="ui grid">
              {
                  products.map((product) =>(
                      <div className="four wide column">
                        <Products className={"product"} key={product.productId} productId={product.productId}
                                productName={product.productName} sellingPrice={product}/>
                      </div>
                  ))
              }
              </div>
    )
}


export default ProductsList;
