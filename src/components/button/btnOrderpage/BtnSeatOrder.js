import React, { Component } from 'react'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import './style.css'

export default class BtnSeatOrder extends Component {
    render() {
        return (
            <div className="nmobile-dropdown">
                <div>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">
                            A
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">B</Dropdown.Item>
                            <Dropdown.Item eventKey="2">C</Dropdown.Item>                        
                            <Dropdown.Item eventKey="3">D</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>{' '}
                </div>
                <div>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle className="btn-dropdown" id="dropdown-custom-1">
                            1
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">2</Dropdown.Item>
                            <Dropdown.Item eventKey="2">3</Dropdown.Item>                        
                            <Dropdown.Item eventKey="3">4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>{' '}
                </div>                
            </div>
        )
    }
}

