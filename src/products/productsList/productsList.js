import React, {useEffect, useState} from "react";
import "./productsList.scss";
import Products from "../products";
import Axios from "axios";

const ProductsList = ({subCategoryId}) =>{

    const [products , setProducts] = useState([]);

    useEffect(()=>{
        console.log(subCategoryId)
            Axios.get(`http://localhost:8081/api/v1/product/product-sub-category/${subCategoryId}`)
                .then(response => {
                        console.log(response)
                        setProducts(response.data)
                    }
                ).catch(error => {
                console.log(error)
            });
    },[subCategoryId]);

    return(
          <div className={"productList"}>
              {
                  products.map( product => (
                        <Products key={product.productId} products={product}/>
                  ))
              }
          </div>
     )
}


export default ProductsList;
