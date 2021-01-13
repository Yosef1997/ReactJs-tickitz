import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Forgetpassword.css'
import Logo from '../../assets/tickitzwhite.png'
import Purplelogo from '../../assets/tickitzpurple.png'

class Forgetpassword extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="left " md={7}>
                        <Row>
                            <Col className="forgetpass1">
                                <img src={Logo} className='white-tickitz' alt='...' />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="forgetpass2">
                                <p>Lets reset your password</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="forgetpass3">
                                <p className="">To be able to use your account again, please complete the following steps.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="row4 d-flex flex-column">
                                <span>
                                    <Button className="btn1" href="#">1</Button>
                                Fill your complete email
                                 </span>
                                <Row className="line"></Row>
                                <span>
                                    <Button className="btn1" href="#">2</Button>
                                Activate your email
                                </span>
                                <Row className="line"></Row>
                                <span>
                                    <Button className="btn1" href="#">3</Button>
                                Enter your new password
                                </span>
                                <Row className="line"></Row>
                                <span>
                                    <Button className="btn1" href="#">4</Button>
                                Done
                                </span>

                            </Col>
                        </Row>
                    </Col>
                    <Col classname="right" md={5}>
                        <Row>
                            <Col className="forgetpass5">
                                <img src={Purplelogo} className='purple-tickitz' alt='...' />
                            </Col>
                        </Row>
                        <Row className="forgetpass6">
                            <Col>
                                <p>Fill your complete email</p>
                                <p className="p2">we'll send a link to your email shortly</p>
                            </Col>
                        </Row>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button className="btn-join" type="submit">
                                Activate now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Forgetpassword