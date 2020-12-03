import React from "react";
import {Link} from "react-router-dom";

const Subcategory = ({subCategory,subCategoryId}) =>{
    return(
        <div>
            <Link to={`/productList/${subCategoryId}`}>
                <button>
                    {subCategory}
                </button>
            </Link>
        </div>
    )
}

export default Subcategory;
