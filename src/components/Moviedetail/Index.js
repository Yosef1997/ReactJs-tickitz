import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Moviedetail.css'
import Footer from '../Footer/Footer'
import { Container, Row, Col, ButtonGroup, Dropdown } from 'react-bootstrap'
// import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import Calender from '../../assets/calender-icon.png'
import checkPoint from '../../assets/location.png'
import Cinemacard from '../Cinemacard/Cinemacard'
import cinemaList from '../dummy/CinemaList'
import http from '../helper/http'
// import { Link } from 'react-router-dom'

export default class Index extends Component {
    state = {
        movie: {},
        location: {},
        cinemaList
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const response = await http().get(`/movies/${id}`)
        const responseLocation = await http().get(`/location`)
        // const responseCinemas = await http().get('/cinemas')
        this.setState({
            movie: response.data.results
        })
        this.setState({
            location: responseLocation.data.results
        })
        // this.setState({
        //     cinemas: responseCinemas.data.results
        // })
    }
    render() {
        const { movie, location } = this.state
        const { REACT_APP_API_URL: API_URL } = process.env
        return (
            <div>
                <Navbar />
                <Container fluid>
                    <Row className="mt-5">
                        <Col md={4} className="col1">
                            <div>
                                <img src={API_URL.concat(`/${movie.picture}`)} className="poster" alt="..." />
                            </div>
                        </Col>
                        <Col md={8} className="col2">
                            <div className="detail1 d-flex flex-column justify-content-start">
                                <h3>{movie.name}</h3>
                                <p>{movie.genre}</p>
                            </div>
                            <div className="detail2 d-flex flex">
                                <div className="w-50">
                                    <p className="w-50">Release date</p>
                                    <h5 className="w-50">{movie.releaseDate}</h5>
                                </div>
                                <div className="w-50">
                                    <p className="w-50">Directed by</p>
                                    <h5 className="w-50">{movie.director}</h5>
                                </div>
                            </div>
                            <div className="detail2  d-flex flex">
                                <div className="w-50">
                                    <p className="w-50">Duration</p>
                                    <h5 className="w-50">{movie.duration}</h5>
                                </div>
                                <div className="w-50">
                                    <p className="w-50">Casts</p>
                                    <h5 className="w-100">{movie.stars}</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="Synopsis">
                                <h3>Synopsis</h3>
                                <p>{movie.description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="sectionMovie-2 mt-5">
                        <Col className="col3">
                            <div>
                                <p>Showtimes and Tickets</p>
                            </div>
                            <div className="d-flex dropdown">
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle className="btn-dropmovie" id="dropdown-custom-1">
                                        <img src={Calender} class="img-fluid" alt="..." />
                                        Date
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                                <Dropdown as={ButtonGroup}>
                                    <Dropdown.Toggle className="btn-dropmovie" id="dropdown-custom-1">
                                        <img src={checkPoint} class="img-fluid" alt="..." />
                                    Location
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        {location.map(location => {
                                            return (
                                                <Dropdown.Item >{location.city}</Dropdown.Item>
                                            )
                                        })}



                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </Col>
                    </Row>
                    <Row className="sectionMovie-2 p-5">
                        {this.state.cinemaList.map((item, index) => {
                            return (
                                <Col md={4}>
                                    <Cinemacard data={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <Row className="sectionMovie-2 p-5">
                        {this.state.cinemaList.map((item, index) => {
                            return (
                                <Col md={4}>
                                    <Cinemacard data={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <Row className="row8 p-5 sectionMovie-2 text-center">
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

