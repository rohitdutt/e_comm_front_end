import React, {useEffect, useState} from "react";
import "./productsList.scss";
import Products from "../products";
import Axios from "axios";
// import Pagination from "../../Pagination/Pagination";
// import {Pagination} from "semantic-ui-react";
import Pagination from "react-js-pagination";


const ProductsList = ({subCategoryId}) =>{

    const [products , setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [currentPage , setCurrentPage] = useState(1);
    const [productPerPage ] = useState(12);

    // useEffect (()=>{
    //     setIsLoading(true);
    //     Axios.get(`http://localhost:8080/api/v1/product/product-sub-category/${subCategoryId}`)
    //            .then(response => {
    //                     setProducts(response.data)
    //                     console.log("got products");
    //                     setIsLoading(false);
    //                 }
    //             ).catch(error => {
    //             console.log(error)
    //         });
    // },[subCategoryId]);

    useEffect (()=>{
        const fetchProduct = async () => {
            setIsLoading(true);
            const res = await Axios.get(`http://localhost:8080/api/v1/product/product-sub-category/${subCategoryId}`);
            setProducts(res.data);
            setIsLoading(false);
        }
        fetchProduct().then(
            console.log("Stop scrapping my website")
        );
    },[subCategoryId]);

    console.log(products);

    if (isLoading) {
        return (
            <div className={"loading"}>
                <div className="progress">
                    <div className="indeterminate"/>
                </div>
            </div>
        )
    }

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

    return(
        <div className="ui grid">
            {
                currentProducts.map((product) => (
                    <div className="four wide column">
                        <Products className={"product"} key={product.productId} productId={product.productId}
                                  productName={product.productName}/>
                    </div>
                ))
            }
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={12}
                totalItemsCount={products.length}
                onChange={(pageNumber)=>{
                    console.log(`active page is ${currentPage}`);
                    setCurrentPage(pageNumber)
                }}
            />
        </div>
    )
}


export default ProductsList;
