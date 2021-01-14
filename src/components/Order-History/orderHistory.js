import React, { Component } from 'react'
import './orderHistory.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Container, Row, Col, Nav, Dropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cineone21 from '../../assets/cineone210.jpg'
import Hiflix from '../../assets/hiflix.jpg'
// import Password from '../Input/inputPassword/inputPassword'
// import Number from '../Input/inputNumber/inputNumber'
// import Email from '../Input/inputEmail/inputEmail'
// import Text from '../Input/inputText/inputText'
// import Phone from '../Input/inputPhone/inputPhone'
import ProfilImage from '../../assets/profil-icon.png'
import Star from '../../assets/star.png'


export default class orderHistory extends Component {
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
                                    <Nav.Link eventKey="link-2">Order History</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="box-order-history mt-5 d-flex">
                                <div className="orderHistory-row1">
                                    <p>Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p className="h4">Spider-Man: Homecoming</p>
                                </div>
                                <div>
                                    <img src={Cineone21} alt="..." className="pt-4" />
                                </div>
                            </div>
                            <div className="box-btn-order-history d-flex">
                                <div>
                                <Button variant="success">Ticker active</Button>{' '}
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Show Detail 
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="box-order-history mt-5 d-flex">
                                <div className="orderHistory-row1">
                                    <p>Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p className="h4">Spider-Man: Homecoming</p>
                                </div>
                                <div>
                                    <img src={Hiflix} alt="..." className="pt-4" />
                                </div>
                            </div>
                            <div className="box-btn-order-history d-flex">
                                <div>
                                    <Button variant="secondary">Ticker used</Button>{' '}
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            Show Detail 
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}
