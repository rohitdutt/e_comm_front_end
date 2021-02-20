import React, {useEffect, useState} from "react";
import "./productsList.scss";
import Products from "../products";
import Axios from "axios";
import Pagination from "react-js-pagination";


const ProductsList = ({subCategoryId}) =>{

    const [products , setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [currentPage , setCurrentPage] = useState(1);
    const [productPerPage ] = useState(12);

    useEffect (()=>{
        const fetchProduct = async () => {
            setIsLoading(true);
            const res = await Axios.get(`http://localhost:8080/api/v1/product/product-sub-category/${subCategoryId}`);
            setProducts(res.data);
            setIsLoading(false);
        }
        fetchProduct();
    },[subCategoryId]);

    console.log(products);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

    if (isLoading) {
        return (
            <div className={"loading"}>
                <div className="progress">
                    <div className="indeterminate"/>
                </div>
            </div>
        )
    }

    return(
        <div id={"product-list"} className={"product-list"}>
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
                    className={"pagination"}
                    activePage={currentPage}
                    itemsCountPerPage={12}
                    totalItemsCount={products.length}
                    onChange={(pageNumber)=>{
                        console.log(`active page is ${currentPage}`);
                        setCurrentPage(pageNumber)
                        document.getElementById("product-list").scrollIntoView({behavior:"smooth"})
                    }}
                />
            </div>
        </div>
    )
}


export default ProductsList;
