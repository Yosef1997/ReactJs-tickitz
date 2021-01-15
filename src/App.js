import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/Sign-in" component={Signin} />
          <Route path="/Forgetpass" component={Forgetpass} />
          <Route path="/movie" component={Movie} />
          <Route path="/order" component={Orderpage} />
          <Route path="/payment" component={Payment} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/profil" component={Profil} />
          <Route path="/orderhistory" component={OrderHistory} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>


    )
  }
}

export default App