import React, {Component} from "react";
import "./reviews.scss";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:false
        }
    }

    componentDidMount() {
        Axios.get("")
    }

    render() {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

export default Reviews;
