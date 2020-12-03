import React, {useState} from "react";
import Subcategory from "../subCategory/subCategory";
import Axios from "axios";

const Category = ({category}) =>{

    const [subCategories , setSubCategories] = useState([]);

    return(
        <div>
            <button onClick={()=>{
                Axios.get(`http://localhost:8081/api/v1/product/sub-category-category/${category.categoryId}`)
                            .then(response => {
                                console.log(response)
                                setSubCategories(response.data)
                            }).catch(error =>
                            console.log(error)
                        )
            }}>
                {category.categoryName}
            </button>
            {
                subCategories.map( subCategory =>(
                    <Subcategory key={subCategory.subCategoryId} subCategoryId={subCategory.subCategoryId} subCategory = {subCategory.subCategory}/>
                ))
            }
        </div>
    )
}

export default Category;
