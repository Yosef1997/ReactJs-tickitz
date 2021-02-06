import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { autoLogin } from '../redux/action/auth'

class PrivateRoute extends Component {
  
  render() {
    const Component = this.props.privateComponent
    return (
      <Route {...this.props} render={(props)=> {
        if(this.props.auth.token) {
          return <Component {...props} />
        } else {
          return <Redirect to= {{pathname: '/sign-in', state:{ from: props.location} }} />
        }
      }}>
      </Route>
    )
  }
}

const mapStateToprops = state => ({
  auth: state.auth
})
const mapDispatchToProps = {autoLogin}

export default connect(mapStateToprops, mapDispatchToProps)(PrivateRoute)