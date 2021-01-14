import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './password.css'
import Eye from '../../../assets/eye.jpg'

export default class inputEmail extends Component {
    render() {
        return (
            
                <div className="passSeek">
                    <input type="password" placeholder="Password" />
                    <Button variant="outline-light"><img src={Eye} alt="..." className="mb-2" /></Button>
                </div>
            
        )
    }
}
