import React, { useState} from "react";
import "./signUp.scss";
import {Link , navigate} from "@reach/router";
import axios from "axios";

const SignUp = (props) => {

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [mobileNo , setMobileNo] = useState("")
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [reEnterPassword , setReEnterPassword] = useState("");
    // const [passwordMatched , setPasswordMatched] = useState(true);
    // const [passLength ,setPassLength] = useState(false);


    const handleMobileNo = (e) => {
        setMobileNo(mobileNo + e.target.value)
        console.log(this.state)
    }

    return (
        <div className="signUp">
            <h2>Sign Up</h2>
            <br/>
                <div className="row">
                     <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" onChange={(e)=>{
                                    setFirstName(e.target.value);
                                    console.log(firstName);
                                }}/>
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" onChange={(e)=>{
                                    setLastName(e.target.value);
                                    console.log(lastName)
                                }}/>
                                    <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" onChange={(e)=>{
                                        setEmail(e.target.value );
                                        console.log(email)
                                    }
                                }/>
                                    <label htmlFor="email">Email</label>
                            </div>
                        </div>
                         <div className="row">
                             <div className="input-field col s6">
                                 <input id="password" type="password" className="validate" onChange={(e)=>{
                                     setPassword( e.target.value);
                                     console.log(password);
                                 }}/>
                                 <label htmlFor="password">Password</label>
                             </div>
                             <div className="input-field col s6">
                                 <input id="confirm_password" type="password" className="validate" onChange={(e)=>{
                                     setReEnterPassword(e.target.value);
                                     console.log(reEnterPassword);
                                 }}/>
                                 <label htmlFor="confirm_password">Confirm Password</label>
                             </div>
                         </div>
                         <div className={"form-bottom"}>
                             <a href={"#"} className="waves-effect waves-teal btn-flat" onClick={async ()=>{
                                 console.log(password + "  " + reEnterPassword)
                                 if(password === reEnterPassword){
                                    const response = await axios.post("http://localhost:5001/api/signUp",{
                                        email: email,
                                        password: password
                                    })
                                     if(response.status !== 201){
                                         window.alert("no");
                                         await navigate("/");
                                         console.log("-------------------")
                                     }else{
                                         window.alert("success");
                                         await navigate("/");
                                     }

                                 }
                             }
                             }>Sign Up</a>
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
export default SignUp;
