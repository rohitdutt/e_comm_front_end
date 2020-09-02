import React from 'react';
import Products from "./products/products";
import './App.css';
import Product from "./products/product/product";
import ProductsList from "./products/productsList/productsList";
import HomePage from "./homePage/homePage";
import SignIn from "./signInSignUp/signIn/signIn";
import SignUp from "./signInSignUp/signUp/signUp"
import Reviews from "./products/product/reviews/reviews";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/product' component={Product}/>
            <Route path='/productsList' component={ProductsList}/>
            <Route path='/products' component={Products}/>
            <Route path='/reviews' component={Reviews}/>
            <Route path='/signIn' component={SignIn}/>
            <Route path='/signUp' component={SignUp}/>
        </Switch>
    </div>
  );
}

export default App;
