import React from "react";
import {Link} from "@reach/router";
import "./subCategory.scss";

const Subcategory = ({subCategory,subCategoryId}) =>{
    return(
        <div className={"sub-category"}>
            <Link to={`/productList/${subCategoryId}`}>
                <button>
                    {subCategory}
                </button>
            </Link>
        </div>
    )
}

export default Subcategory;
