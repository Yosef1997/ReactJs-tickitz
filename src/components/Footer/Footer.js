import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'
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
            <Container fluid className="sectionFooter pt-5">
                <Row>
                    <Col lg={4} className="col10">
                        <img src={Brand} alt="..." class="img1-footer" />
                        <p className="mt-3 text-left">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
                    </Col>
                    <Col lg={2} className="col12">
                        <p>Explore</p>
                        <Link to="#">Cinemas</Link>
                        <Link to="#">Movies List</Link>
                        <Link to="#">My Ticket</Link>
                        <Link to="#">Notification</Link>
                    </Col>
                    <Col lg={3} className="col3">
                        <p className="fw-bolder">Our Sponsor</p>
                        <Link to="#"><img src={Ebv} alt="..." className="img2-footer" /></Link>
                        <Link to="#"><img src={Cineone21} alt="..." className="img2-footer" /></Link>
                        <Link to="#"><img src={Hiflix} alt="..." className="img2-footer" /></Link>
                    </Col>
                    <Col lg={3} className="col11 footer-web">
                        <p>Follow Us</p>
                        <Link to="#">
                            <img src={Facebook} alt="..." />
                            Tickitz Cinema id
                        </Link>
                        <Link to="#">
                            <img src={Instagram} alt="..." />
                            tickitz.id
                        </Link>
                        <Link to="#">
                            <img src={Twitter} alt="..." />
                            tickitz.id
                        </Link>
                        <Link to="#">
                            <img src={Youtube} alt="..." />
                            Tickitz Cinema id
                        </Link>
                    </Col>    
                </Row>
                <Row>
                    <Col className="col5">
                        <p>© 2020 Tickitz. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer