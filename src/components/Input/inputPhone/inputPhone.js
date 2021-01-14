import React, { Component } from 'react'
import './phone.css';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'

export default class inputPhone extends Component {
    render() {
        return (
            <div className="form-phone-number">
                <Form.Label>Phone Number</Form.Label>
                <span>
                    <DropdownButton id="dropdown-basic-button" title="+62">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <input className="inputphonenumber" type="text" placeholder="" />
                </span>
            </div>
        )
    }
}
