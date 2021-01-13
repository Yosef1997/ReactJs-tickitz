import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Signin.css'
import Logo from '../../assets/tickitzwhite.png'
import Purplelogo from '../../assets/tickitzpurple.png'
import Eyelogo from '../../assets/eye 1eye1.jpg'
import Googlelogo from '../../assets/Google-logo.jpg'
import Facebooklogo from '../../assets/fb-logo.jpg'
import {Link} from 'react-router-dom'

class Signin extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="left" md={7}>
                        <Row className="signin-col1">
                            <Col>
                                <img src={Logo} className='white-tickitz' alt='...' />
                            </Col>
                        </Row>
                        <Row className="signin-col2">
                            <Col>
                                <p>wait, watch, wow!</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col classname="right" md={5}>
                        <Row>
                            <Col className="signin-col3">
                                <img src={Purplelogo} className='purple-tickitz' alt='...' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="signin-col4">
                                <p className="h3">Sign In</p>
                                <p className="text-left">Sign in with your data that you entered during your registration</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="p-3">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <span className="password">
                                            <Form.Control className="input-password" type="password" placeholder="Password"></Form.Control>
                                            <Button className="btn-password" type="submit">
                                                <img src={Eyelogo} alt="..." />
                                            </Button>
                                        </span>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I agree to terms & conditions" />
                                    </Form.Group>
                                    <Link to="/">
                                        <Button className="btn-join" type="submit">Sign In</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="signin-col5">
                                <p>Forgot your password?
                                    <span>
                                        <Link to="/Forgetpass">Reset now</Link>
                                    </span>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="signin-col6">
                                <span className="d-flex flex-row">
                                    <hr className="line2"></hr>
                                    <p className="ml-2 mr-2 pt-1">Or</p>
                                    <hr className="line2"></hr>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="signin-col7 d-flex flex-row justify-content-around">
                                <span>
                                    <Button className="btn-google" type="submit">
                                        <img src={Googlelogo} alt="..." />
                                    Google
                                    </Button>
                                </span>
                                <span>
                                    <Button className="btn-facebook" type="submit">
                                        <img src={Facebooklogo} alt="..." />
                                    Facebook
                                    </Button>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signin