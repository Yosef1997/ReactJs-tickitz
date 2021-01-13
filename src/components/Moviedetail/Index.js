import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Moviedetail.css'
import Footer from '../Footer/Footer'
import { Container, Row, Col, ButtonGroup, Dropdown } from 'react-bootstrap'
import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import Calender from '../../assets/calender-icon.png'
import Location from '../../assets/location.png'
import Cinemacard from '../Cinemacard/Cinemacard'
import cinemaList from '../dummy/CinemaList'
// import { Link } from 'react-router-dom'

export default class Index extends Component {
    state = {
        cinemaList: cinemaList
    }
    render() {
        return (
            <div>
                <Navbar />
                <Container fluid>
                    <Row className="mt-5">
                        <Col md={4} className="col1">
                            <div>
                                <img src={Spiderman2} className="poster" alt="..." />
                            </div>
                        </Col>
                        <Col md={8} className="col2">
                            <div className="detail1 d-flex flex-column justify-content-start">
                                <h3>Spider-Man: Homecoming</h3>
                                <p>Adventure, Action, Sci-Fi</p>
                            </div>
                            <div className="detail2 d-flex flex">
                                <div className="w-50">
                                    <p className="w-50">Release date</p>
                                    <h5 className="w-50">June 28, 2017</h5>
                                </div>
                                <div className="w-50">
                                    <p className="w-50">Directed by</p>
                                    <h5 className="w-50">Jon Watss</h5>
                                </div>
                            </div>
                            <div className="detail2  d-flex flex">
                                <div className="w-50">
                                    <p className="w-50">Duration</p>
                                    <h5 className="w-50">2 hours 13 minutes</h5>
                                </div>
                                <div className="w-50">
                                    <p className="w-50">Casts</p>
                                    <h5 className="w-100">Tom Holland, Michael Keaton, Robert Downey Jr., ...</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="Synopsis">
                                <h3>Synopsis</h3>
                                <p>
                                    Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt
                                    May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his
                                    normal daily routine -
                                    distracted by thoughts of proving himself to be more than just your friendly neighborhood
                                    Spider-Man -
                                    but when the Vulture emerges as a new villain, everything that Peter holds most important will
                                    be threatened.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="col3">
                            <div>
                                <p>Showtimes and Tickets</p>
                            </div>
                            <div className="d-flex dropdown">
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">
                                        <img src={Calender} class="img-fluid" alt="..." />
                                        Date
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Active Item
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">
                                        <img src={Location} class="img-fluid" alt="..." />
                                    Location

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Active Item
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </Col>
                    </Row>
                    <Row className="p-5">
                        {this.state.cinemaList.map((item, index)=>{
                            return(
                                <Col md={4}>
                                    <Cinemacard data={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <Row className="p-5">
                        {this.state.cinemaList.map((item, index)=>{
                            return(
                                <Col md={4}>
                                    <Cinemacard data={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <Row className="row8 p-5 text-center">
                        <Col>
                            View All
                        </Col>
                       
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

