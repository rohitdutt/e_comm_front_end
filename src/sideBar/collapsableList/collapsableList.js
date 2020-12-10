import React, {useEffect, useState} from "react";
import "./collapsableList.scss";
import Axios from "axios";
import Category from "./category/category";

const CollapsableList = () =>{

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
            Axios.get("http://localhost:8081/api/v1/product/category")
                .then(response => {
                        console.log(response)
                        setCategories(response.data)
                    }
            ).catch(error =>{
                console.log(error)
            });
    },[]);

    return(
            <div className={""}>
                {
                    categories.map( category => (
                        <Category key={category.categoryId} category={category}/>
                    )
                    )
                }
            </div>
    )
}
export default CollapsableList;
