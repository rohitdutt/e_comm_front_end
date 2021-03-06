import React from "react";
import {Link} from "@reach/router";
import "./subCategory.scss";

const Subcategory = ({subCategory,subCategoryId}) =>{
    return(
        <div className={"item"}>
            <div className={"sub-category"}>
            <Link to={`/productList/${subCategoryId}`}>
                    {
                        subCategory
                    }
            </Link>
            </div>
        </div>
    )
}

export default Subcategory;
