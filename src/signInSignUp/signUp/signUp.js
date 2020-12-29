import React, {Component} from "react";
import "./signUp.scss";
import {Link} from "@reach/router";

class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state={
                userName: null,
                mobileNo: null,
                email: null,
                password:null,
                reEnterPassword: null,
                passwordMatched: true,
                passLength:false
        }
    }
    HandleUserName = (e) => {
        this.setState({userName:e.target.value})
        console.log(this.state.userName)
    }

    HandleMobileNo = (e) => {
        this.setState({mobileNo:e.target.value})
        console.log(this.state)
    }

    HandleEmail = (e) => {
        this.setState({email:e.target.value})
        console.log(this.state.email)
    }

    HandlePassword = (e) => {
        this.setState({password:e.target.value})
        console.log(this.state.password)
    }

    HandleReEnterPassword = (e) => {
        this.setState({reEnterPassword:e.target.value})
        console.log(this.state.reEnterPassword)
    }


    MatchPassword = () => {
        const t1=this.state.password;
        const t2=this.state.reEnterPassword;
        let t3;
        t3 = t1 === t2;
        this.setState({passwordMatched: t3});

    }

    render() {
        return (
            <div className="signUp">
                <h2>Sign Up</h2>
                <br/>
                    <div className="row">
                         <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"/>
                                        <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"/>
                                        <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                        <label htmlFor="email">Email</label>
                                </div>
                            </div>
                             <div className="row">
                                 <div className="input-field col s6">
                                     <input id="password" type="password" className="validate"/>
                                     <label htmlFor="password">Password</label>
                                 </div>
                                 <div className="input-field col s6">
                                     <input id="confirm_password" type="password" className="validate"/>
                                     <label htmlFor="confirm_password">Confirm Password</label>
                                 </div>
                             </div>
                             <div className={"form-bottom"}>
                                 <a href={"/"} className="waves-effect waves-teal btn-flat" onClick={this.MatchPassword}>Sign Up</a>
                                 <div>
                                     <p>Already a Customer , Click below</p>
                                     <Link to={"/signIn"}>
                                         <a href={"signIn"} className="waves-effect waves-teal btn-flat">Sign In</a>
                                     </Link>
                                 </div>
                             </div>
                        </form>
                    </div>
            </div>
    )
}
}
export default SignUp;
