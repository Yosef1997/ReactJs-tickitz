import React, { Component } from 'react'
import './ticket.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Logo from '../../assets/tickitzwhite.png'
import Barcode from '../../assets/QRBarcode.png'
import Download from '../../assets/download-icon.png'
import Print from '../../assets/print.png'


export default class Ticket extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container fluid className="containerTicket">
                    <Row className="ticket-paper">
                        <Col>
                            <div className="d-flex">
                                <div className="ticket-top-left">
                                    <div><img src={Logo} className="ticket-logo" alt="..." /></div>
                                    <p>Admit One</p>
                                </div>
                                <div className="ticket-top-right">
                                    <div><img src={Logo} className="ticket-logo" alt="..." /></div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="ticket-bottom-left">
                                    <div className="ticket-detail-1">
                                        <p>Movie</p>
                                        <p className="h5">Spider-Man: Homecoming</p>
                                    </div>
                                    <div className="ticket-detail-2">
                                        <div>
                                            <p>Date</p>
                                            <p className="h5">07 July</p>
                                        </div>
                                        <div>
                                            <p>Time</p>
                                            <p className="h5">02:00pm</p>
                                        </div>
                                        <div>
                                            <p>Category</p>
                                            <p className="h5">PG-13</p>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-3 pb-3">
                                        <div>
                                            <p>Count</p>
                                            <p className="h5">3 pieces</p>
                                        </div>
                                        <div>
                                            <p>Seats</p>
                                            <p className="h5">C4, C5, C6</p>
                                        </div>
                                        <div>
                                            <p>Price</p>
                                            <p className="h4">$30.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ticket-bottom-right">
                                    <div>
                                        <img src={Barcode} className="ticket-barcode" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="Ticker-btn mt-2">
                                <div className="m-3">
                                    <Button variant="light" size="lg">
                                        <img src={Download} alt="..." className="mr-2" />
                                        Download
                                    </Button>
                                </div>
                                <div className="m-3">
                                    <Button variant="light" size="lg">
                                        <img src={Print} alt="..." className="mr-2" />
                                        Print
                                    </Button>
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
