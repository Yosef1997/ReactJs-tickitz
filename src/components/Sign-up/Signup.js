import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Signup.css'
import Logo from '../../assets/tickitzwhite.png'
import Purplelogo from '../../assets/tickitzpurple.png'
import Eyelogo from '../../assets/eye.jpg'
import Googlelogo from '../../assets/Google-logo.jpg'
import Facebooklogo from '../../assets/fb-logo.jpg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../redux/action/register'

class Signup extends Component {
    state = {
        email: '',
        password: ''
    }
    submitData = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        this.props.register(email, password)
    }
    componentDidUpdate() {
        if (this.props.regis.results) {
            this.props.history.push('/sign-in')
        }
    }
    changeText = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="singUp-left" lg={7}>
                        <div>
                            <img src={Logo} className='white-tickitz' alt='...' />
                        </div>
                        <div className="signUp1">
                            Lets build your account
                        </div>

                        <div className="signUp2">
                            To be a loyal moviegoer and access all of features, your details are required.
                        </div>
                        <div className="mt-5">
                            <div className="d-flex">
                                <Button className="btnNumber-signUp" href="#">1</Button>
                                <div className="btn-signUp-detail">Fill your additional details</div>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex">
                                <Button className="btnNumber-signUp" href="#">2</Button>
                                <div className="btn-signUp-detail">Activate your account</div>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex">
                                <Button className="btnNumber-signUp" href="#">3</Button>
                                <div className="btn-signUp-detail">Done</div>
                            </div>
                        </div>
                    </Col>
                    <Col classname="singUp-right" lg={5}>
                        <Row>
                            <Col className="signUp-Mobile">
                                <img src={Purplelogo} alt='...' />
                            </Col>
                        </Row>
                        <Row>
                            <div className="signUp3">
                                Fill your additional detail
                            </div>

                        </Row>
                        <Row>
                            <Col>
                                <Form onSubmit={this.submitData} >
                                    {this.props.regis.errorMsg !== '' && <Alert variant="danger">{this.props.regis.errorMsg}</Alert>}           
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control name="email" onChange={(event) => this.changeText(event)} type="text" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <div className="passwordGroup">
                                            <Form.Control name="password" onChange={(event) => this.changeText(event)} type="password" placeholder="Password" className="input-password" />
                                            <Button className="btn-password" type="submit">
                                                <img src={Eyelogo} alt="..." />
                                            </Button>
                                        </div>
                                    </Form.Group>
                                    <Button className="registerBtn" type="submit">
                                        Register
                                </Button>
                                </Form>
                            </Col>
                            {/* <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control className="input-password" type="password" placeholder="Password"></Form.Control>
                                    <Button className="btn-password" type="submit">
                                        <img src={Eyelogo} alt="..." />
                                    </Button>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className="btn-joinSignUp" type="submit">
                                    Join for free now
                            </Button>
                            </Form> */}
                        </Row>
                        <div className="signUp4">
                            Do you already have an account?
                            <span>
                                <Link className="logIn" to="/Sign-in">Log in</Link>
                            </span>
                        </div>
                        <div className="d-flex justify-content-around">
                            <div className="line2"></div>
                            <div className="">Or</div>
                            <div className="line2"></div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="btn-SignUp">
                                <Button className="btn-signUpGoogle" type="submit">
                                    <img src={Googlelogo} alt="..." />
                                    Google
                                </Button>
                            </div>
                            <div className="btn-SignUp">
                                <Button className="btn-signUpFacebook" type="submit">
                                    <img src={Facebooklogo} alt="..." />
                                    Facebook
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    regis: state.register
})
const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)