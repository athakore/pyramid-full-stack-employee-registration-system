import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import EmployeeDataService from '../../service/EmployeeDataService'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      age: null,
      gender: '',
      administrator: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    let employee = {
      id: -1,
      date: this.state.date,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      age: this.state.age,
      gender: this.state.gender,
      administrator: this.state.administrator
    }
    EmployeeDataService.addEmployee(employee).then(this.props.history.push(`/`))
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Employee</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Date:</label>
                            <input className="form-control" type="text" name="date" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input className="form-control" type="text" name="firstName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control" type="text" name="lastName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input className="form-control" type="text" name="email" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="text" name="password" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input className="form-control" type="text" name="phoneNumber" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Age:</label>
                            <input className="form-control" type="text" name="age" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Gender:</label>
                            <input className="form-control" type="text" name="gender" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Administrator:</label>
                            <input className="form-control" type="text" name="administrator" onChange={this.handleChange}></input>
                        </div><br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddEmployee)
