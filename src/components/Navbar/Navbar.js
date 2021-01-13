import React, { Component } from 'react'
import './Navbar.css'
import { Navbar as NavbarBrowser, Nav, NavDropdown, FormControl, Button, Container } from 'react-bootstrap'
import Brand from '../../assets/tickitzpurple.png'
import Search from '../../assets/searchicon.png'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <Container fluid>
                <NavbarBrowser collapseOnSelect expand="lg" bg="white" variant="light">
                    <NavbarBrowser.Brand><Link to="/"><img src={Brand} alt="..." /></Link></NavbarBrowser.Brand>
                    <NavbarBrowser.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarBrowser.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className="search-mobile">
                                <FormControl type="text" placeholder="Search" className="input-search-mobile sm-2" />
                                <Button type="submit" className="btn-search"><img src={Search} alt=".." /></Button>{' '}
                            </div>
                            <Nav.Link href="#Movies" className="navlink">Movies</Nav.Link>
                            <Nav.Link href="#Cinemas" className="navlink">Cinemas</Nav.Link>
                            <Nav.Link href="#Buy-Ticket" className="navlink">Buy Ticket</Nav.Link>
                            <NavDropdown className="nav-mobile navlink mr-1" title="Location" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Jakarta Barat</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Jakarta Selatan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Jakarta Pusat</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Jawa Barat</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/sign-up"><Button className="btn-signup-mobile " type="submit">Sign up</Button>{' '}</Link>
                            <p className="nav-mobile">© 2020 Tickitz. All Rights Reserved.</p>
                        </Nav>
                        <Nav className="ml-auto nav-web">
                            <NavDropdown title="Location" id="collasible-nav-dropdown" className="navlink mr-1">
                                <NavDropdown.Item href="#action/3.1">Jakarta Barat</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Jakarta Selatan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Jakarta Pusat</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Jawa Barat</NavDropdown.Item>
                            </NavDropdown>
                            <div className="d-flex flex-row search-web">
                                <FormControl type="text" placeholder="Search" className="input-search-mobile sm-2" />
                                <Button type="submit" className="btn-search"><img src={Search} alt=".." /></Button>{' '}
                            </div>
                            <Link to="/sign-up"><Button type="submit" className="btn-signup ml-2 p-2">Sign up</Button>{' '}</Link>
                        </Nav>
                    </NavbarBrowser.Collapse>
                </NavbarBrowser>
            </Container>
        )
    }
}
export default Navbar