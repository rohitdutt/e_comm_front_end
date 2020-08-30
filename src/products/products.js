import React, {Component} from "react";
import axios from "axios";
import ProductsList from "./productsList/productsList";
import 'bootstrap/dist/css/bootstrap.min.css';

class products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading:true,
        };
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData = () =>{
        axios.get("http://localhost:8080/api/v1/product-all")
            .then((response)=>{
                    this.setState({products:response.data})
                },
            );
        this.setState({isLoading:false})
    };


    render() {
        let load=null;
        const prod=this.state.products;
        if (!this.state.isLoading){
            load=(
                <div>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>)
        }else{
            console.log(prod+"--------")
            load=(
              prod.map((product)=>(
                  <ProductsList product={product}/>
              ))
            )
        }
        return (
            <div className="productList">
                {
                    load
                }
            </div>
        );
    }
}

export default products;
