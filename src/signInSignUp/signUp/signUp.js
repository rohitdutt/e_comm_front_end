import React from "react";
import "./signUp.scss";
import {Form , Col , Button} from "react-bootstrap";

const signUp = () =>(
    <div className="signUp">
        <h2>Sign Up</h2>
        <br/>
        <div className="form-area">
            <Form>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Your Mobile Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter Mobile Number" required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="It Should be Top Secret!" required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required/>
                </Form.Group>
            </Form>
            <div className={"form-submission"}>
                <Button variant="outline-dark">Sign Up</Button>
                <p>Already a Customer , Click below</p>
                <Button variant="link">Sign In</Button>
            </div>
        </div>
    </div>
);

export default signUp;
