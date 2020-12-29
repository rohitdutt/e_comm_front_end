import React from "react";
import "./signIn.scss";
import {Link} from "@reach/router";
import {Button} from "semantic-ui-react";

const signIn = () =>(
    <div className="signIn">
        <h2>Sign In</h2>
        <br/>
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
        <button className="waves-effect waves-teal btn-flat">Sign In</button>
        <p>Haven't Signed Up yet , Click below</p>
        <Link to={"/signUp"}>
            <button className="waves-effect waves-teal btn-flat">Sign Up</button>
        </Link>
    </div>
);

export default signIn;
