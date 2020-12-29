import React from "react";
import {Link} from "@reach/router";
import "./subCategory.scss";

const Subcategory = ({subCategory,subCategoryId}) =>{
    return(
        <div className={"item"}>
            <Link to={`/productList/${subCategoryId}`}>
                    {
                        subCategory
                    }
            </Link>
        </div>
    )
}

export default Subcategory;
