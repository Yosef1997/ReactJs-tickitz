import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Signup.css'
import Logo from '../../assets/tickitzwhite.png'
import Purplelogo from '../../assets/tickitzpurple.png'
import Eyelogo from '../../assets/eye 1eye1.jpg'
import Googlelogo from '../../assets/Google-logo.jpg'
import Facebooklogo from '../../assets/fb-logo.jpg'

class FirstComponent extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="left" md={7}>
                        <Row className="row1">
                            <img src={Logo} className='white-tickitz' alt='...' />
                        </Row>
                        <Row className="row2">
                            <p>Lets build your account</p>
                        </Row>
                        <Row className="row3">
                            <p className="">To be a loyal moviegoer and access all of features,your details are required.</p>
                        </Row>
                        <Row className="row4 d-flex flex-column">
                            <span>
                                <Button className="btn1" href="#">1</Button>
                                Fill your additional details
                            </span>
                            <Row className="line"></Row>
                            <span>
                                <Button className="btn1" href="#">2</Button>
                                Activate your account
                            </span>
                            <Row className="line"></Row>
                            <span>
                                <Button className="btn1" href="#">3</Button>
                                Done
                            </span>
                        </Row>
                    </Col>
                    <Col classname="right" md={5}>
                        <Row className="row5">
                            <img src={Purplelogo} className='purple-tickitz' alt='...' />
                        </Row>
                        <Row className="row6">
                            <p>Fill your additional details</p>
                        </Row>
                        <Form>
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
                            <Button className="btn-join" type="submit">
                                Join for free now
                            </Button>
                        </Form>
                        <Row className="row7">
                            <p>Do you already have an account?
                                <span>
                                    <a className="ml-2" href="./sign-in/index.html">Log in</a>
                                </span>
                            </p>
                        </Row>
                        <Row className="row8">
                            <span className="d-flex flex-row">
                                <hr className="line2"></hr>
                                    <p className="ml-2 mr-2 pt-1">Or</p>
                                <hr className="line2"></hr>
                            </span>
                        </Row>
                        <Row className="row9 d-flex flex-row justify-content-around">
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
                        </Row>


                    </Col>
                        </Row>
            </Container>
        )
    }
}

export default FirstComponent