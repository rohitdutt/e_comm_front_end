import React, {useEffect, useState} from "react";
import "./sideBar.scss";
import Axios from "axios";
import Category from "./collapsableList/category/category";
// import ArrowDown from "../assets/arrow_drop_down-black-18dp.svg";

const SideBar = () =>{

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/api/v1/product/category")
            .then(response => {
                    console.log(response)
                    setCategories(response.data)
                }
            ).catch(error =>{
            console.log(error)
        });
    },[]);

    return(
        <div className={"sidebar"}>
            {
                categories.map( category => (
                    <Category key={category.categoryId} categoryId={category.categoryId} categoryName={category.categoryName}/>
                ))
            }
        </div>
    )
};

export default SideBar;
