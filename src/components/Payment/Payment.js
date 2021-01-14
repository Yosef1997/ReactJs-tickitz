import React, { Component } from 'react'
import Email from '../Input/inputEmail/inputEmail'
import Password from '../Input/inputPassword/inputPassword'
import Number from '../Input/inputNumber/inputNumber'
import Text from '../Input/inputText/inputText'

export default class Payment extends Component {
    render() {
        return (
            <div>
               <Email />
               <Password />
               <Number />
               <Text /> 
            </div>
        )
    }
}
