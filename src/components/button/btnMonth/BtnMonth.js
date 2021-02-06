import React, { Component } from 'react'
import { Col, Button } from 'react-bootstrap'
import './styleMonth.css';

export default class BtnMonth extends Component {
    state = {
        month: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
    }
    render() {
        const { month } = this.state
        return (
            <Col className="colMonth">
                {month.map((month, index) => {
                    return (
                        <div>
                            <Button className="btnMonth">{month}</Button>{' '}
                        </div>
                    )
                })}
            </Col>
            // <Col className="home-col6">
            //     <div>
            //         <Button>January</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>February</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>March</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>April</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>May</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>June</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>July</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>August</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>September</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>October</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>November</Button>{' '}
            //     </div>
            //     <div>
            //         <Button>December</Button>{' '}
            //     </div>
            // </Col>
        )
    }
}
