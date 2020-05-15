import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import EmployeeDataService from '../../service/EmployeeDataService'
//import "./Login.css";

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      error: ""
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit() {
    EmployeeDataService.retrievePasswordByEmail(this.state.email).then(response => response.status === 200 ? (response.data === this.state.password ? this.props.history.push("/adminConsole") : this.props.history.push("/")) : this.props.history.push("/"))
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <h3 className="Error" style={{color: "red"}}>{this.state.error}</h3>
          <Button block bssize="large" disabled={!this.validateForm} type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
