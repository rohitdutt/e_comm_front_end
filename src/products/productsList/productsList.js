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
            const one =`http://localhost:8081/api/v1/product/product-sub-category/${subCategoryId}`;
            // const two = `http://localhost:8081/api/v1/product/product-price-product-id/${products.productId}`;
        Axios.get(one)
               .then(response => {
                        console.log(response)
                        setProducts(response.data)
                    }
                ).catch(error => {
                console.log(error)
            });
    },[subCategoryId,products.productId]);

   let columns = [];
   products.forEach((product,idx)=>{
       columns.push(
           <Products className={"product"} key={product.productId} productId={product.productId}
                                 productName={product.productName} sellingPrice={productPrice.sellingPrice}/>
       )
       if((idx+1)%4===0){
           columns.push(
               // <div className="w-100" key={null}/>
               <Col/>
               )
       }
   })
    // products.forEach( (product,index) => {
    //     if ((index+1)%4 === 0) {
    //         row.push(
    //             <div className={"product-row"}>
    //                 <Products className={"product"} key={product.productId} productId={product.productId}
    //                           productName={product.productName} sellingPrice={productPrice.sellingPrice}/>
    //             </div>
    //         )
    //     }else {
    //         row.push(
    //         <Products className={"product"} key={product.productId} productId={product.productId}
    //                   productName={product.productName} sellingPrice={productPrice.sellingPrice}/>
    //         )
    //     }
    // })

    return(
          <div className={"productList"}>
              {
                  columns
              }
          </div>
     )
}


export default ProductsList;
