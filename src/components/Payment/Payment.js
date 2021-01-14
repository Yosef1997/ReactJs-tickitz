import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, } from 'react-bootstrap'
import './Payment.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import BCA from '../../assets/bca.png'
import BRI from '../../assets/bri.png'
import Dana from '../../assets/dana.png'
import Googlepay from '../../assets/googlepay.png'
import gopay from '../../assets/gopay.png'
import Paypal from '../../assets/paypal.png'
import OVO from '../../assets/ovo.png'
import Visa from '../../assets/visa.png'
import { Link } from 'react-router-dom'
import Email from '../Input/inputEmail/inputEmail'
import Warning from '../../assets/warning-logo.png'
// import Password from '../Input/inputPassword/inputPassword'
// import Number from '../Input/inputNumber/inputNumber'
import Text from '../Input/inputText/inputText'
import Phone from '../Input/inputPhone/inputPhone'

export default class Payment extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container fluid className='containerPayment'>
                    <Row className="payment-mobile pt-3 pb-3">
                        <Col>
                            <div className="pay-detail">
                                <p className="text-muted">Total payment</p>
                                <p className="text-dark h3">$30,00</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="payment-paper p-5">
                        <Col md={8}>

                            <div className="Payment-row1 payment-web">
                                Payment Info
                            </div>
                            <div className="Payment-row2 payment-web p-5 mt-3">
                                <div className="pay-detail">
                                    <p className="text-muted">Date & time</p>
                                    <p className="text-dark">Tuesday, 07 July 2020 at 02:00pm</p>
                                </div>
                                <hr></hr>
                                <div className="pay-detail">
                                    <p className="text-muted">Movie title</p>
                                    <p className="text-dark">Spider-Man: Homecoming</p>
                                </div>
                                <hr></hr>
                                <div className="pay-detail">
                                    <p className="text-muted">Cinema name</p>
                                    <p className="text-dark">CineOne21 Cinema</p>
                                </div>
                                <hr></hr>
                                <div className="pay-detail">
                                    <p className="text-muted">Number of tickets</p>
                                    <p className="text-dark">3 pieces</p>
                                </div>
                                <hr></hr>
                                <div className="pay-detail">
                                    <p className="text-muted">Total payment</p>
                                    <p className="text-dark h3">$30,00</p>
                                </div>
                            </div>
                            <div className="Payment-row1 mt-5">
                                Choose a Payment Method
                            </div>
                            <div className="Payment-row2 p-5 mt-3">
                                <div className="Paylist">
                                    <div>
                                        <Button variant="outline-light" className="btn-pay"><img src={Googlepay} alt="..." /></Button>
                                    </div>
                                    <div>
                                        <Button variant="outline-light" className="btn-pay"><img src={Visa} alt="..." /></Button>
                                    </div>
                                    <div>
                                        <Button variant="outline-light" className="btn-pay"><img src={gopay} alt="..." /></Button>
                                    </div>
                                    <div className="payment-web">
                                        <Button variant="outline-light" className="btn-pay"><img src={Paypal} alt="..." /></Button>
                                    </div>
                                </div>
                                <div className="Paylist mt-5">
                                    <div className="Paylist">
                                        <Button variant="outline-light" className="btn-pay"><img src={Dana} alt="..." /></Button>
                                    </div>
                                    <div>
                                        <Button variant="outline-light" className="btn-pay"><img src={BCA} alt="..." /></Button>
                                    </div>
                                    <div>
                                        <Button variant="outline-light" className="btn-pay"><img src={BRI} alt="..." /></Button>
                                    </div>
                                    <div className="payment-web">
                                        <Button variant="outline-light" className="btn-pay"><img src={OVO} alt="..." /></Button>
                                    </div>
                                </div>
                                <Row className="Payment-row3 mt-4">
                                    <Col xs={5}><hr /></Col>
                                    <Col xs={2} className="line-payment">or</Col>
                                    <Col xs={5}><hr /></Col>
                                </Row>
                                <div className="paycash m-3">
                                    Pay via cash.
                                    <Link to="/" className="text-link ml-1">See how it work</Link>
                                </div>
                            </div>
                            <div className="Payment-row4 payment-web mt-5">
                                <div>
                                    <Link to="/movie"><Button className="btn-previous">Previous step</Button></Link>
                                </div>
                                <div>
                                    <Link to="/ticket"><Button className="btn-pay-your-order">Pay your order</Button></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="Payment-row1">
                                Personal Info
                            </div>
                            <div className="Payment-row2 p-5 mt-3">
                                <div>
                                    <Form.Label>Full Name</Form.Label>
                                    <Text />
                                </div>
                                <div className="mt-3 mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Email />
                                </div>
                                <Phone />
                                <div className="warning-box mt-4 pt-2">
                                    <div className="ml-3">
                                        <img src={Warning} alt=".." />
                                    </div>
                                    <div className="ml-3 warning-text">
                                        <p>Fill your data correctly.</p>
                                    </div>
                                </div>
                            </div>                            
                            <Link to="/ticket" className=""><Button className="btn-pay-your-order-mobile w-100 mt-4">Pay your order</Button></Link>                          
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}
