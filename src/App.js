import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import store from './components/redux/store'

import Index from './components/Home/Index'
import Signup from './components/Sign-up/Signup'
import Signin from './components/Sign-in/Signin'
import Forgetpass from './components/Forget-password/Forgetpassword'
import Movie from './components/Moviedetail/Index'
import Orderpage from './components/Orderpage/Orderpage'
import Payment from './components/Payment/Payment'
import Ticket from './components/Ticket/Ticket'
import Profil from './components/Profil/Profil'
import OrderHistory from './components/Order-History/orderHistory'
import Admin from './components/Admin/admin'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/Forgetpass" component={Forgetpass} />
            <PrivateRoute path='/movies/:id' privateComponent={Movie} />
            <Route path="/order/:id" component={Orderpage} />
            <Route path="/payment" component={Payment} />
            <Route path="/ticket" component={Ticket} />
            <Route path="/profil" component={Profil} />
            <Route path="/orderhistory" component={OrderHistory} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </Provider>


    )
  }
}

export default App