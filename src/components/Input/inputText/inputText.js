import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import './text.css'

export default class inputEmail extends Component {
    render() {
        return (
            <div className="p-3">
                <Form.Control type="text" placeholder="" />
            </div>
        )
    }
}
