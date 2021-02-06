import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Moviedetail.css'
import Footer from '../Footer/Footer'
import { Container, Row, Col, ButtonGroup, Dropdown } from 'react-bootstrap'
// import Spiderman2 from '../../assets/Rectangle119spiderman.png'
import Calender from '../../assets/calender-icon.png'
import checkPoint from '../../assets/location.png'
import Cinemacard from '../Cinemacard/Cinemacard'
// import cinemaList from '../dummy/CinemaList'
import http from '../helper/http'
import {parsingDMY} from '../helper/date'
// import { Link } from 'react-router-dom'

export default class Index extends Component {
    state = {
        movie: {},
        location: [],
        showdate: [],
        cinemas : []
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        const dataMovie = await http().get(`/movies/${id}`)
        const dataLocation = await http().get(`/location`)
        console.log(dataLocation)
        this.setState({
            movie: dataMovie.data.results,
            Location: dataLocation.data.results
        })
    }
    
    addBook = (id)=> {
        this.props.history.push(id, {movieId: id})
    }
    render() {
        const { movie, location, showdate, cinemas } = this.state
        const { REACT_APP_API_URL: API_URL } = process.env
        const { id } = this.props.match.params
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
                                    <h5 className="w-50">{parsingDMY(movie.releaseDate)}</h5>
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
                                        {showdate.map(showdate => {
                                            return(
                                                <Dropdown.Item >{parsingDMY(showdate.date)}</Dropdown.Item>
                                            )
                                        })}
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
                        {cinemas.map(item => {
                            return (
                                <Col md={4}>
                                    <Cinemacard data={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                    <Row className="sectionMovie-2 p-5">
                        {cinemas.map(item => {
                            return (
                                <Col key={String(item.id)} md={4}>
                                    <Cinemacard movieId={id} data={item} />
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

