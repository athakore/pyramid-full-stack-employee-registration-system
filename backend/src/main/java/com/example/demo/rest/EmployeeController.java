package com.example.demo.rest;

import com.example.demo.dao.EmployeeDaoImpl;
import com.example.demo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React... NOT IMPORTANT RIGHT NOW
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class EmployeeController {


    private final EmployeeDaoImpl employeeDaoImpl;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the employee DAO.
    @Autowired
    public EmployeeController(EmployeeDaoImpl employeeDaoImpl) {
        this.employeeDaoImpl = employeeDaoImpl;
    }

    //This is a GET request that will read a list of all the employees.
    //http://localhost:8080/retrieveAllEmployees
    @GetMapping("/retrieveAllEmployees")
    public List<Employee> findAll() {
        return employeeDaoImpl.findAll();
    }

    //This is a POST request to add a new employee.
    //http://localhost:8080/addEmployee
    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee theEmployee) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        theEmployee.setId(0);

        //This will call the employeeDqoImpl.save method to save a new employee
        employeeDaoImpl.save(theEmployee);
        return theEmployee;
    }

    //This is a PUT request to update an existing employee.
    //http://localhost:8080/updateEmployee
    @PutMapping("/updateEmployee")
    public Employee updateEmployee(@RequestBody Employee updateEmployee) {
        //No theEmployee.setId(0); this will execute an update instead of a create
        employeeDaoImpl.save(updateEmployee);
        return updateEmployee;
    }

    //This is a DELETE request to delete an existing employee.
    //http://localhost:8080/deleteEmployee/1
    @DeleteMapping("/deleteEmployee/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId) {

        //Creating a tempEmployee to check to see if an employee exists
        Employee tempEmployee = employeeDaoImpl.findById(employeeId);

        //This will throw an exception if the employee is null
        if(tempEmployee == null) {
            throw new RuntimeException("Employee is not found : " + employeeId);
        }

        //This will execute the deleteByID method in the employeeDaoImpl.
        employeeDaoImpl.deleteById(employeeId);
        return "Deleted employee id : " + employeeId;
    }

}
