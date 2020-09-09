import React from "react";
import "./signIn.scss";
import {Form , Col , Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const signIn = (props) =>(
    <div className="signIn">
        <h2>Sign In</h2>
        <br/>
        <Form>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email / Mobile</Form.Label>
                <Form.Control type="email" placeholder="Email / Mobile" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Tell me your Top Secret!" required/>
            </Form.Group>
        </Form>
        <Button variant="outline-dark">Sign In</Button>
        <p>Haven't Signed Up yet , Click below</p>
        <Link to={"/signUp"}>
            <Button variant="link">Sign Up</Button>
        </Link>
    </div>
);

export default signIn;
