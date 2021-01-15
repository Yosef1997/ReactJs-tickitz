import React, { Component } from 'react'
import './admin.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import Text from '../Input/inputText/inputText'

import Date from '../button/btnDate/btnDate'


export default class admin extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container fluid className="container-admin">
                    <Row>
                        <Col md={7} className="admin-row1">
                            <Row className="admin-row1">
                                Movie Description
                            </Row>
                            <Row className="admin-row2">
                                <Col sm={4} className="admin-row2-col1">
                                    <img src={Spiderman2} alt="..." className="" />
                                </Col>
                                <Col sm={8}>
                                    <div className="admin-row2-col2">
                                        <Form.Label>Movie Name</Form.Label>
                                        <Text />
                                    </div>
                                    <div className="admin-row2-col2 mt-3">
                                        <Form.Label>Category</Form.Label>
                                        <Text />
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="admin-row2-col2 ">
                                            <Form.Label>Date</Form.Label>
                                            <Date />
                                        </div>
                                        <div className="admin-row2-col2-duration">
                                            <Form.Label>Duration</Form.Label>
                                            <div className="admin-duration">
                                                <Text className="duration-detail" />
                                                <Text />
                                            </div>
                                        </div>

                                    </div>

                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>

            // {/* <Date /> */}

        )
    }
}
