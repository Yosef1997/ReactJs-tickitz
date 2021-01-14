import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './email.css'

export default class inputEmail extends Component {
    render() {
        return (
            <div className="p-3">
                <Form.Control type="email" placeholder="Enter email" />
            </div>
        )
    }
}
