import React, { Component } from 'react'
import './home.css'
import { Container, Row, Col, Button, Card, Form, FormControl } from 'react-bootstrap'
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


export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col md className="col1">
                            <p class="p1">Nearest Cinema, Newest Movie,</p>
                            <h1>Find out now!</h1>
                        </Col>
                        <Col md className="col2">
                            <img src={Spiderman} className="pt-5 mr-3" alt="..." />
                            <img src={Lion} className="pt-3 mt-1 mr-3" alt="..." />
                            <img src={Starwars} className="pt-0" alt="..." />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col3 text-left">
                            <h4>Now Showing</h4>
                        </Col>
                        <Col className="col3">
                            <p>View All</p>
                        </Col>
                    </Row>
                    <Row className="row3">
                        <Col className="col4">
                            <div >
                                <img src={Spiderman2} style={{ height: '10rem' }} className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Lion2} style={{ height: '10rem' }}  className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Johnwick} style={{ height: '10rem' }}  className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Lion2} style={{ height: '10rem' }}  className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Spiderman2} style={{ height: '10rem' }}  className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Lion2} style={{ height: '10rem' }}  className="Now-showing" alt="..." />
                            </div>
                            <div>
                                <img src={Johnwick} style={{ height: '10rem' }}  className="" alt="..." />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col3">
                            <h4>Upcoming Movies</h4>
                        </Col>
                        <Col className="col3">
                            <p>View All</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="col6">
                            <div>
                                <Button>January</Button>{' '}
                            </div>
                            <div>
                                <Button>February</Button>{' '}
                            </div>
                            <div>
                                <Button>March</Button>{' '}
                            </div>
                            <div>
                                <Button>April</Button>{' '}
                            </div>
                            <div>
                                <Button>May</Button>{' '}
                            </div>
                            <div>
                                <Button>June</Button>{' '}
                            </div>
                            <div>
                                <Button>July</Button>{' '}
                            </div>
                            <div>
                                <Button>August</Button>{' '}
                            </div>
                            <div>
                                <Button>September</Button>{' '}
                            </div>
                            <div>
                                <Button>October</Button>{' '}
                            </div>
                            <div>
                                <Button>November</Button>{' '}
                            </div>
                            <div>
                                <Button>December</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col7">
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
                    <Row className="mt-5 lastrow">
                        <Col className="col8">
                            <div>
                                <h5>Be the vanguard of the</h5>
                                <h1>Moviegoers</h1>
                            </div>
                            <Form inline className="mobile">
                                <FormControl type="text" placeholder="Write your email" className=" mr-sm-2" />
                                <Button className="btn-join" type="submit">Join Now</Button>
                            </Form>
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

