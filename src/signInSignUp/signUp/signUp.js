import React from "react";
import "./signUp.scss";
import {Form , Col} from "react-bootstrap";

const signUp = () =>(
    <div className="signUp">
        <h2>Sign Up</h2>
        <br/>
        <Form>
            <Form.Group as={Col} controlId="formGridName">
                {/*<Form.Label>Email</Form.Label>*/}
                <Form.Control type="text" placeholder="Enter Your Name" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                {/*<Form.Label>Email</Form.Label>*/}
                <Form.Control type="email" placeholder="Enter Mobile Number" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                {/*<Form.Label>Email</Form.Label>*/}
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                {/*<Form.Label>Password</Form.Label>*/}
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                {/*<Form.Label>Password</Form.Label>*/}
                <Form.Control type="password" placeholder="Confirm Password" required/>
            </Form.Group>
        </Form>
    </div>
);

export default signUp;
