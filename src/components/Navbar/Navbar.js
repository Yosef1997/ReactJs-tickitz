import React, { Component } from 'react'
import './Navbar.css'
import { Navbar as NavbarBrowser, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import Brand from '../../assets/tickitzpurple.png'
import Search from '../../assets/searchicon.png'

class Navbar extends Component {
    render() {
        return (
            <Container fluid>
                <NavbarBrowser collapseOnSelect expand="lg" bg="white" variant="light">
                    <NavbarBrowser.Brand href="#home"><img src={Brand} alt="..." /></NavbarBrowser.Brand>
                    <NavbarBrowser.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarBrowser.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Form className="search-mobile">
                                <FormControl type="text" placeholder="Search" className="input-search-mobile sm-2" />
                                <Button type="submit" className="btn-search"><img src={Search} alt=".." /></Button>{' '}
                            </Form>
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
                            <Button className="btn-signup-mobile " type="submit">Sign up</Button>{' '}
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
                            <Form inline className="search-web">
                                <FormControl type="text" placeholder="Search" className="input-search-web sm-2" />
                                <Button className="mr-2 btn-search" type="submit"><img src={Search} alt=".." /></Button>{' '}                                
                            </Form>
                            <Button type="submit" className="btn-signup ml-2">Sign up</Button>{' '}
                        </Nav>
                    </NavbarBrowser.Collapse>
                </NavbarBrowser>
            </Container>
        )
    }
}
export default Navbar