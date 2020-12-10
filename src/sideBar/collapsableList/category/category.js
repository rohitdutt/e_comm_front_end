import React, {useEffect, useState} from "react";
import Subcategory from "./subCategory/subCategory";
import Axios from "axios";
import "./category.scss";
import ArrowDown from "../../../assets/arrow_drop_down-black-18dp.svg";
import {DropdownButton} from "react-bootstrap";

const Category = ({categoryId , categoryName}) =>{

    const [subCategories , setSubCategories] = useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:8081/api/v1/product/sub-category-category/${categoryId}`)
            .then(response => {
                console.log(response)
                setSubCategories(response.data)
            }).catch(error =>
            console.log(error)
        )
    },[categoryId]);

    return(
        <div className={"category"}>
            <DropdownButton id="dropdown-basic-button" title={categoryName}>

                {
                    subCategories.map( subCategory =>(
                        <Subcategory key={subCategory.subCategoryId} subCategoryId={subCategory.subCategoryId} subCategory = {subCategory.subCategory}/>
                    ))
                }
            </DropdownButton>
        </div>
    )
}

export default Category;
