import React, { Component } from 'react'
import './Card.css'
import { Card, Col, Row, Button } from 'react-bootstrap'
// import Ebv from '../../assets/ebv.jpg'
// // import Cineone21 from '../../assets/cineone210.jpg'
// // import Hiflix from '../../assets/hiflix.jpg'
// import CinemaList from '../dummy/CinemaList'
import { Link } from 'react-router-dom'

export default class Cinemacard extends Component {
    render() {
        return (           
                <Card body className="CinemaCard shadow">
                    <Row>
                        <Col md={4} className="pt-4">
                            <img src={this.props.data.image} class="img-fluid" alt="..." />
                        </Col>
                        <Col md={8} className="m-0">
                            <p className="h3 text-left text-dark p-0">{this.props.data.name}</p>
                            <p className="h6 text-muted text-left">{this.props.data.address}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-2">
                            08:30am
                        </Col>
                        <Col className="p-2">
                            10:30am
                        </Col>
                        <Col className="p-2">
                            12:00pm
                        </Col>
                        <Col className="p-2">
                            02:00pm
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-2">
                            08:30am
                        </Col>
                        <Col className="p-2">
                            10:30am
                        </Col>
                        <Col className="p-2">
                            12:00pm
                        </Col>
                        <Col className="p-2">
                            02:00pm
                        </Col>
                    </Row>

                    
                    <Row className="mt-3">
                        <Col>
                            Price
                        </Col>
                        <Col className="text-right">
                            $10.00/seat
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                        <Link to="/order"><Button className="btn-book">Book Now</Button></Link>
                        </Col>
                        <Col className="text-center">
                            <Button className="btn-add">Add to Cart</Button>
                        </Col>                                            
                    </Row>
                </Card>
            
        )
    }
}
