import axios from 'axios'

class EmployeeDataService {

  retrieveAllEmployees() {
    return axios.get(`http://localhost:8080/retrieveAllEmployees`)
  }

  retrievePasswordByEmail(email) {
    return axios.get(`http://localhost:8080/email/${email}`)
  }

  addEmployee() {
    return axios.get(`http://localhost:8080/addEmployee`)
  }

  updateEmployee() {
    return axios.get(`http://localhost:8080/updateEmployee`)
  }

  deleteEmployee(id) {
    return axios.get(`http://localhost:8080/deleteEmployee/${id}`)
  }
}

export default new EmployeeDataService()
