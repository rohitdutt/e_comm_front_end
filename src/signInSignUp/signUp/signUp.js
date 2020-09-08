import React, {useState} from "react";
import "./signUp.scss";
import {Form , Col , Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [user , useUser] = useState({
        userName:null,
        mobileNo:null,
        email:null,
        password:null,
    });

    const HandleUserName = (e) =>{
        useUser({
            ...user,
            userName:e.target.value});
        console.log(user)
    }

    const HandleEmail = (e) =>{
        useUser({
            ...user,
            email:e.target.value});
        console.log(user)
    }

    const HandleMobileNo = (e) =>{
        useUser({
            ...user,
            mobileNo:e.target.value});
        console.log(user)
    }

    const HandlePassword = (e) =>{
        useUser({
            ...user,
            password:e.target.value});
        console.log(user)
    }

    const MatchPassword = () =>{


    }

    return <div className="signUp">
        <h2>Sign Up</h2>
        <br/>
        <div className="form-area">
            <Form>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required onChange={HandleUserName.bind(this)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Your Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile Number" required onChange={HandleMobileNo.bind(this)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={HandleEmail.bind(this)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword" onChange={HandlePassword.bind(this)}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="It Should be Top Secret!" required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required/>
                </Form.Group>
            </Form>
            <div className={"form-submission"}>
                <Button variant="outline-dark" onClick={()=>{window.alert(user.email)}}>Sign Up</Button>
                <p>Already a Customer , Click below</p>
                <Link to={"/signIn"}>
                    <Button variant="link">Sign In</Button>
                </Link>
            </div>
        </div>
    </div>;
}

export default SignUp;
