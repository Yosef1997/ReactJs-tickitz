import React, { Component } from 'react'
import { Container, Col, Row, Button, Dropdown, ButtonGroup, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './orderpage.css'
import SeatOrder from '../Seat-order/SeatOrder'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cineone21 from '../../assets/cineone210.jpg'
import Toparrow from '../../assets/forwardarrow.png'
import Rightarrow from '../../assets/rightarrow.png'
export default class Orderpage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container fluid>
                    <Row className="p-3">
                        <Col md={8}>
                            <div className="Order-row1 oreder-web">
                                Movie Selected
                            </div>
                            <div className="Order-row2 p-2 oreder-web">
                                <div className="w-50 pt-2">
                                    Spider-Man: Homecoming
                                </div>
                                <div className="w-50 text-right pr-5">
                                    <Link to="/movie"><Button className="btn-join">Change Movie</Button></Link>
                                </div>
                            </div>
                            <div className="Order-row1">
                                Choose Your Seat
                            </div>
                            <div className="Order-row3 pt-5">
                                <div className="Order-row4">
                                    Screen
                                </div>
                                <div className="d-flex">
                                    <Col className="mr-0">
                                        <SeatOrder />
                                    </Col>
                                    <Col className="ml-0">
                                        <SeatOrder />
                                    </Col>
                                </div>
                                <div className="Order-row5 pl-5">
                                    Seating key
                                </div>
                                <div className="note-mobile p-5">
                                    <div class="raw d-flex justify-content-between">
                                        <span class="w-50">
                                            <img src={Toparrow} alt="" />
                                            A - G
                                        </span>
                                        <span class="w-50">
                                            <img src={Rightarrow} alt="" />
                                            1 - 14
                                        </span>
                                    </div>
                                    <div class="raw d-flex flex-column pt-3">
                                        <div class="raw d-flex justify-content-between">
                                            <span class="w-50">
                                                <input class="btn-available" type="button" value="" />
                                                Available
                                            </span>
                                            <span class="w-50">
                                                <input class="btn-selected" type="button" value="" />
                                                Selected
                                            </span>
                                        </div>
                                        <div class="raw d-flex justify-content-between pt-3">
                                            <span class="w-50">
                                                <input class="btn-lovenest" type="button" value="" />
                                                Love nest
                                            </span>
                                            <span class="w-50">
                                                <input class="btn-Sold" type="button" value="" />
                                                Sold
                                            </span>
                                        </div>
                                    </div>
                                    <div className="nmt-5">
                                        <div className="nmobile-dropdown">
                                            <Dropdown as={ButtonGroup}>
                                                <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">                                                
                                                    A
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors">
                                                    <Dropdown.Item eventKey="1">A</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">B</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>
                                                        Active Item
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>{' '}
                                            <Dropdown as={ButtonGroup}>
                                                <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">                                               
                                                1

                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="super-colors">
                                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>
                                                        Active Item
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>{' '}                                       
                                        </div>
                                        <div class="raw text-center mt-2">
                                            <input className="btn-addseat" type="button" value="Add new seat" />
                                        </div>
                                        <div class="raw pt-5">
                                                <button className="btn-checkout" type="submit">Checkout now</button>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="note-web text-center p-4">
                                    <Col>
                                        <input className="btn-available" type="button" value="" />
                                        Available
                                    </Col>
                                    <Col>
                                        <input className="btn-selected" type="button" value="" />
                                        Selected
                                    </Col>
                                    <Col>
                                        <input className="btn-lovenest" type="button" value="" />
                                        Love nest
                                    </Col>
                                    <Col>
                                        <input className="btn-Sold" type="button" value="" />
                                        Sold
                                    </Col>
                                </div>
                            </div>
                            <div class="Order-row6 pt-5 pb-5 oreder-web">
                                <div>
                                    <Link to="/movie"><Button className="btn-changemovie">Change your movie</Button></Link>
                                </div>
                                <div>
                                    <Link to="/movie"><Button  className="btn-join">Checkout now</Button></Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="oreder-web">
                            <div className="Order-row1 mb-4">
                                Order Info
                            </div>
                            <div>
                                <div class="text-center">
                                    <img src={Cineone21} alt="..." />
                                </div>
                                <div class="text-center pt-2">
                                    <h2>CineOne21 Cinema</h2>
                                </div>
                                <div className="Order-row9">
                                    <p>Movie selected</p>
                                    <p>Spider-Man: Homecoming</p>
                                </div>
                                <div className="Order-row9">
                                    <p>Tuesday, 07 July 2020</p>
                                    <p>02:00pm</p>
                                </div>
                                <div className="Order-row9">
                                    <p>One ticket price</p>
                                    <p>$10</p>
                                </div>
                                <div className="Order-row9">
                                    <p>Seat choosed</p>
                                    <p>C4, C5, C6</p>
                                </div>
                                <hr />
                                <div className="Order-row9">
                                    <p className="h3">Total Payment</p>
                                    <p class="fs-2">$30</p>
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
