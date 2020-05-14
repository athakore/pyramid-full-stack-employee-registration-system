import axios from 'axios'

class EmployeeDataService {
  retrieveAllEmployees() {
    return axios.get(`http://localhost:8080/retrieveAllEmployees`)
  }
}
