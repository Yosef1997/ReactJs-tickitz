import React, { Component } from 'react'
import './Profil.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Container, Row, Col, Button, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Password from '../Input/inputPassword/inputPassword'
// import Number from '../Input/inputNumber/inputNumber'
import Email from '../Input/inputEmail/inputEmail'
import Text from '../Input/inputText/inputText'
import Phone from '../Input/inputPhone/inputPhone'
import ProfilImage from '../../assets/profil-icon.png'
import Star from '../../assets/star.png'


export default class Profil extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container fluid className="container-profil">
                    <Row>
                        <Col md={4} className="profil-paper">
                            <div className="profil-left-row1">
                                <p className="h5">INFO</p>
                                <Link to="/">. . .</Link>
                            </div>
                            <div className="profil-left-row2 text-center mt-5">
                                <img src={ProfilImage} alt="..." />
                                <p className="h4">Jonas El Rodriguez</p>
                                <p className="text-muted">Moviegoers</p>
                            </div>
                            <hr />
                            <div className="profil-left-row3 mt-5 mb-4">
                                <p>Loyalty Points</p>
                            </div>
                            <div class="rectangle1">
                                <div class="rectangle2 pt-3">
                                    <p>Moviegoers</p>
                                    <p>320<span>points</span></p>
                                </div>
                                <div class="circle1 rounded-circle"></div>
                                <div class="circle2 rounded-circle"></div>
                                <div class="star">
                                    <img src={Star} alt="..." />
                                </div>
                            </div>
                            <div className="text-center text-muted h6 mt-4">
                                180 points become a master
                            </div>
                            <div class="progresBar1 ">
                                <div class="progresBar2">

                                </div>
                            </div>
                        </Col>
                        <Col md={7} className="profil-paper">
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1"><Link to="/profil">Account Settings</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2"><Link to="/orderhistory">Order History</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="profil-left-row4 pb-3 mt-5">
                                Details Information
                            </div>
                            <div className="profil-left-row5 d-flex mt-4">
                                <div className="dataInputProfil">
                                    <Form.Label>First Name</Form.Label>
                                    <Text />
                                </div>
                                <div className="dataInputProfil">
                                    <Form.Label>Last Name</Form.Label>
                                    <Text />
                                </div>
                            </div>
                            <div className="profil-left-row5 d-flex mt-4">
                                <div className="dataInputProfil">
                                    <Form.Label>Email</Form.Label>
                                    <Email />
                                </div>
                                <div className="dataInputProfil">
                                    <Phone />
                                </div>
                            </div>
                            <div className="profil-left-row4 pb-3 mt-5">
                                Account and Privacy
                            </div>
                            <div className="profil-left-row5 d-flex mt-4">
                                <div className="dataInputProfil">
                                    <Form.Label>New Password</Form.Label>
                                    <Password />
                                </div>
                                <div className="dataInputProfil">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Password />
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button className="btn-update-profil">Update changes</Button>
                            </div>


                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}
