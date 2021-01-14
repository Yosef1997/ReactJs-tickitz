import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './email.css'

export default class inputEmail extends Component {
    render() {
        return (
            
            <Form.Control type="email" placeholder="Enter email" />
            
        )
    }
}
