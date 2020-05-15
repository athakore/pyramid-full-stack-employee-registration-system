import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import EmployeeDataService from "../../service/EmployeeDataService"
import "./Login.css";

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      error: "",
      isValid: true,
      statusCheck:"status",
      passwordCheck: "password"
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    if(this.state.email.length === 0) this.setState({isValid: true});
    else if(this.state.password.length === 0) this.setState({isValid: true});
    else this.setState({isValid: false});
  }

  handleSubmit(event) {
    event.preventDefault()
    EmployeeDataService.retrievePasswordByEmail(this.state.email).then(
      response =>{this.setState({passwordCheck: response.data, statusCheck: response.status})},
      reason =>{this.setState({error:"The email and/or password you have entered is not correct, please try again."})}
    );
    if(this.state.password !== this.state.passwordCheck) this.setState({error:"The email and/or password you have entered is not correct, please try again."})
    else this.props.history.push("/adminConsole/")
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    this.validateForm();
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
          <b className="error" style={{color: "red"}}>{this.state.error}</b>
          <Button block bssize="large" disabled={this.state.isValid} type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
