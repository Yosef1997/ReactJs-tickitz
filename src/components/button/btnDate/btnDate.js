import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
import './btnDate.css'
import Calender from '../../../assets/calender-icon.png'

export default class btnDate extends Component {
    render() {
        return (
            <div className="btn-Date">
                <img src={Calender} alt="..." className="p-1 mr-2" />
                <input type="date" className="date" />
            </div>


        )
    }
}
