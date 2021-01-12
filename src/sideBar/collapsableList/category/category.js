import React, {useEffect, useState} from "react";
import Subcategory from "./subCategory/subCategory";
import Axios from "axios";
import "./category.scss";

const Category = ({categoryId , categoryName}) =>{

    const [subCategories , setSubCategories] = useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:8080/api/v1/product/sub-category-category/${categoryId}`)
            .then(response => {
                setSubCategories(response.data)
            }).catch(error =>
            console.log(error)
        )
    },[categoryId]);

    return(
        <div className={"category"}>
            <div className="ui compact menu">
                <div className="ui simple dropdown item">
                    <span>
                        {
                            categoryName
                        }
                    </span>
                    <i className="dropdown icon" />
                        <div className="menu">
                            <div className={"sub-category"}>
                            {
                                    subCategories.map(subCategory => (
                                        <Subcategory key={subCategory.subCategoryId} subCategoryId={subCategory.subCategoryId}
                                                     subCategory={subCategory.subCategory}/>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
