import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import AdminConsole from './AdminConsole'
import AddEmployee from '../employee/AddEmployee'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/adminConsole" component={AdminConsole}></Route>
            <Route path="/addEmployee" component={AddEmployee}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
