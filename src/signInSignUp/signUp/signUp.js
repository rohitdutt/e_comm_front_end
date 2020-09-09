import React, {Component} from "react";
import "./signUp.scss";
import {Form , Col , Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state={
                userName: null,
                mobileNo: null,
                email: null,
                password: null,
                reEnterPassword: null,
                passwordMatched: false
        }
    }

    render() {

        const HandleUserName = (e) => {
            this.setState({userName:e.target.value})
            console.log(this.state.userName)
        }

        const HandleEmail = (e) => {
            this.setState({email:e.target.value})
            console.log(this.state.email)
        }

        const HandleMobileNo = (e) => {
            this.setState({mobileNo:e.target.value})
            console.log(this.state.mobileNo)
        }

        const HandlePassword = (e) => {
            this.setState({password:e.target.value})
            console.log(this.state.password)
        }

        const HandleReEnterPassword = (e) => {
            this.setState({reEnterPassword:e.target.value})
            console.log(this.state.reEnterPassword)
        }


        const MatchPassword = () => {
            if (this.state.password === this.state.reEnterPassword) {
                this.setState({passwordMatched: true});
            }else{
                this.setState({passwordMatched: false});
            }
            console.log(this.state.passwordMatched)
        }

        return (
            <div className="signUp">
                <h2>Sign Up</h2>
                <br/>
                <div className="form-area">
                    <Form>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" required
                                          onChange={HandleUserName.bind(this)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Label>Your Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile Number" required
                                          onChange={HandleMobileNo.bind(this)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required
                                          onChange={HandleEmail.bind(this)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="It Should be Top Secret!" required
                                          onChange={HandlePassword.bind(this)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required
                                          onChange={HandleReEnterPassword.bind(this)}/>
                        </Form.Group>
                    </Form>
                    <div className={"form-submission"}>
                        <Button variant="outline-dark" onClick={MatchPassword}>Sign Up</Button>
                        <p>Already a Customer , Click below</p>
                        <Link to={"/signIn"}>
                            <Button variant="link">Sign In</Button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
}
export default SignUp;
