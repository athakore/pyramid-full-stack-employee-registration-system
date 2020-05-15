import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import EmployeeDataService from '../../service/EmployeeDataService'

class AdminConsole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      employees: [],
      message: null
    }
    this.refreshEmployeeRegistry = this.refreshEmployeeRegistry.bind(this)
    this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
    this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
  }

  componentDidMount() {
    this.refreshEmployeeRegistry();
  }

  refreshEmployeeRegistry() {
    EmployeeDataService.retrieveAllEmployees().then(response => {this.setState({employees: response.data})})
  }

  deleteEmployeeClicked(id, email) {
    EmployeeDataService.deleteEmployee(id).then(response => {
      this.setState({message: `Deleted Employee: ${email}`})
      alert(this.this.state.message)
      this.refreshEmployeeRegistry()
    })
  }

  addEmployeeClicked() {
    this.props.history.push(`/addEmployee/`)
  }

  render() {
    return(
      <div className="container">
        <h1 style={{textAlign:"center"}}>Employee Registry</h1><br></br>
        <div className="imax" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Id</th>
                <th>Date</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
                <th>Age</th>
                <th>Gender</th>
                <th>User Access</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.employees.map(employees =>
                <tr style={{textAlign: "center"}} key={employees.id}>
                  <td>{employees.id}</td>
                  <td>{employees.date}</td>
                  <td>{employees.firstName}</td>
                  <td>{employees.lastName}</td>
                  <td>{employees.email}</td>
                  <td>{employees.password}</td>
                  <td>{employees.phoneNumber}</td>
                  <td>{employees.age}</td>
                  <td>{employees.gender}</td>
                  <td>{employees.administrator === 1 ? `Administrator` : `User`}</td>
                  <td><button className="btn btn-warning" onClick={() => this.deleteEmployeeClicked(employees.id, employees.email)}>Delete</button></td>
                </tr>
              )
            }
            </tbody>
          </table>
          <div className="row">
            <br/>
            <button className="btn btn-success" onClick={this.addEmployeeClicked}>Add Employee</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AdminConsole);
