import React, { Component } from 'react'
import './home.css'
import { Container, Row, Col, Button, Card, FormControl } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Spiderman from '../../assets/Rectanglespiderman.jpg'
import Lion from '../../assets/Rectanglelion.jpg'
import Starwars from '../../assets/RectangleStarwars.jpg'
import Johnwick from '../../assets/Rectanglejhonwick.jpg'
import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import Lion2 from '../../assets/Rectangle119lion.jpg'
import Blackwidow from '../../assets/Rectangle139blackwidow.jpg'
import Tenet from '../../assets/Rectangle139tenet.jpg'
import Witcher from '../../assets/Rectangle139thewitcher.jpg'
import { Link } from 'react-router-dom'
import BtnMonth from '../button/btnMonth/BtnMonth'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="containerHome">
                    <Row className="bgwhite p-5">
                        <Col md className="home-col1">
                            <p class="p1">Nearest Cinema, Newest Movie,</p>
                            <h1>Find out now!</h1>
                        </Col>
                        <Col md className="home-col2">
                            <img src={Spiderman} className="pt-5 mr-3" alt="..." />
                            <img src={Lion} className="pt-3 mt-1 mr-3" alt="..." />
                            <img src={Starwars} className="pt-0" alt="..." />
                        </Col>
                    </Row>
                    <Row className="p-3 home-row3">
                        <Col className="home-col3 text-left">
                            <p className="text-left">Now Showing</p>
                        </Col>
                        <Col className="home-col3">
                            <p className="text-right">View All</p>
                        </Col>
                    </Row>
                    <Row className="home-row3">
                        <Col className="home-col4">
                            <div >
                                <Link to="/movie">
                                    <img src={Spiderman2} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Lion2} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Johnwick} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Lion2} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Spiderman2} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Lion2} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie">
                                    <img src={Johnwick} style={{ height: '18rem' }} className="p-3" alt="..." />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="bgwhite p-3">
                        <Col className="home-col3">
                            <p className="text-left">Upcoming Movies</p>
                        </Col>
                        <Col className="home-col3">
                            <p className="text-right">View All</p>
                        </Col>
                    </Row>
                    <Row className="bgwhite p-3">
                        <BtnMonth />
                    </Row>
                    <Row className="bgwhite p-5">
                        <Col className="home-col7">
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Blackwidow} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">Black Widow</Card.Title>
                                        <Card.Text className="genre">
                                            Action, Adventure, Sci-Fi
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Witcher} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">The Witches</Card.Title>
                                        <Card.Text className="genre">
                                            Adventure, Comedy, Family
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Tenet} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">Tenet</Card.Title>
                                        <Card.Text className="genre">
                                            Action, Sci-Fi
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Blackwidow} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">Black Widow</Card.Title>
                                        <Card.Text className="genre">
                                            Action, Adventure, Sci-Fi
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Witcher} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">The Witches</Card.Title>
                                        <Card.Text className="genre">
                                            Adventure, Comedy, Family
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Tenet} />
                                    <Card.Body className="carbody w-100 p-0">
                                        <Card.Title className="title">Tenet</Card.Title>
                                        <Card.Text className="genre">
                                            Action, Sci-Fi
                                    </Card.Text>
                                        <Button className="btn-details">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-5 bgwhite">
                        <Col className="home-col8 shadow">
                            <div>
                                <h5>Be the vanguard of the</h5>
                                <h1>Moviegoers</h1>
                            </div>
                            <div className="home-mobile">
                                <FormControl type="text" placeholder="Write your email" className="input-email mr-sm-2" />
                                <Button className="btn-join" type="submit">Join Now</Button>
                            </div>
                            <div>
                                <p class="mb-0 p2">By joining you as a Tickitz member,</p>
                                <p class="p2">we will always send you the latest updates via email .</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

