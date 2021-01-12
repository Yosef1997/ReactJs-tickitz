import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import Brand from '../../assets/tickitzpurple.png'
import Ebv from '../../assets/ebv.jpg'
import Cineone21 from '../../assets/cineone210.jpg'
import Hiflix from '../../assets/hiflix.jpg'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/ig-vector.png'
import Twitter from '../../assets/twitter.png'
import Facebook from '../../assets/facebook.png'


class Footer extends Component {
    render() {
        return (
            <Container className="container">
                <Row>
                    <Col md={4} className="row1">
                        <img src={Brand} alt="..." class="brand" />
                        <p className="mt-3 text-left">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
                    </Col>
                    <Col md={2} className="row2">
                        <h1 className="heading">Explore</h1>
                        <p>Cinemas</p>
                        <p>Movies List</p>
                        <p>My Ticket</p>
                        <p>Notification</p>
                    </Col>
                    <Col md={3} className="row3">
                        <h1 className="heading">Our Sponsor</h1>
                        <img src={Ebv} alt="..." class="Ebv" />
                        <img src={Cineone21} alt="..." class="Cineone21" />
                        <img src={Hiflix} alt="..." class="Hiflix" />
                    </Col>
                    <Col md={3} className="row4">
                        <h1 className="heading">Follow Us</h1>
                        <span>
                            <img src={Facebook} alt="..." />
                            <p>Tickitz Cinema id</p>
                        </span>
                        <span>
                            <img src={Instagram} alt="..." />
                            <p>tickitz.id</p>
                        </span>
                        <span>
                            <img src={Twitter} alt="..." />
                            <p>tickitz.id</p>
                        </span>
                        <span>
                            <img src={Youtube} alt="..." />
                            <p>Tickitz Cinema id</p>
                        </span>
                    </Col>    
                </Row>
                <Row>
                    <Col className="row5">
                        <p>© 2020 Tickitz. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer