import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import './styleMonth.css';

export default class BtnMonth extends Component {
    render() {
        return (
            <Col className="home-col6">
                <div>
                    <Button>January</Button>{' '}
                </div>
                <div>
                    <Button>February</Button>{' '}
                </div>
                <div>
                    <Button>March</Button>{' '}
                </div>
                <div>
                    <Button>April</Button>{' '}
                </div>
                <div>
                    <Button>May</Button>{' '}
                </div>
                <div>
                    <Button>June</Button>{' '}
                </div>
                <div>
                    <Button>July</Button>{' '}
                </div>
                <div>
                    <Button>August</Button>{' '}
                </div>
                <div>
                    <Button>September</Button>{' '}
                </div>
                <div>
                    <Button>October</Button>{' '}
                </div>
                <div>
                    <Button>November</Button>{' '}
                </div>
                <div>
                    <Button>December</Button>{' '}
                </div>
            </Col>
        )
    }
}
