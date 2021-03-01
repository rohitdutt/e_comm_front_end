import React, {useState} from "react";
import "./signIn.scss";
import {Link, navigate} from "@reach/router";
import axios from "axios";

const SignIn =()=>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    return(
        <div className="signIn">
            <h2>Sign In</h2>
            <br/>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                                <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </form>
            </div>
            <button className="waves-effect waves-teal btn-flat" onClick={async ()=>{
                const response = await axios.post("http://localhost:5001/api/login",{
                    email : email,
                    password : password
                });
                console.log(response.data['accessToken'])
                localStorage.setItem('user',response.data['accessToken']);
                if(response.status === 200){
                    await navigate('/')
                }
            }}>Sign In</button>
            <p>Haven't Signed Up yet , Click below</p>
            <Link to={"/signUp"}>
                <button className="waves-effect waves-teal btn-flat">Sign Up</button>
            </Link>
        </div>
    );
};

export default SignIn;
