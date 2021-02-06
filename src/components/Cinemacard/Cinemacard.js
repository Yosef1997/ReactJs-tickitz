import React, { Component } from 'react'
import './Card.css'
import { Card, Col, Row, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default class Cinemacard extends Component {

    bookNow = (id) => {
        const { history} = this.props
        history.push(`/order/${id}`)
    }
    render() {
        const { REACT_APP_API_URL: API_URL } = process.env
        const { data } = this.props
        return (
            <Card body className="CinemaCard shadow">
                <Row>
                    <Col md={4} className="pt-4">
                        <img src={API_URL.concat(`/${data.picture}`)} class="img-fluid" alt="..." />
                    </Col>
                    <Col md={8} className="m-0">
                        <p className="h3 text-left text-dark p-0">{data.name}</p>
                        <p className="h6 text-muted text-left">{data.address}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <small>{data.time}</small>
                    </Col>

                </Row>
                <Row>

                    <Col md={3}>
                        <small>{data.time}</small>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        Price
                        </Col>
                    <Col className="text-right">
                        {data.priceOneSeat}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button onClick={() => this.bookNow(data.id)} className="btn-book">Book Now</Button>
                    </Col>
                    <Col className="text-center">
                        <Button className="btn-add">Add to Cart</Button>
                    </Col>
                </Row>
            </Card>

        )
    }
}
