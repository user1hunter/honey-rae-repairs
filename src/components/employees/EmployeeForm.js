import React, {useState} from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {

  const [employee, submitEmployee] = useState({
    name: "",
    specialty: ""
  })
  const history = useHistory()

  const hireEmployee = (event) => {
    event.preventDefault()

    const newEmployee = {
      name: employee.name,
      specialty: employee.specialty
    }

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
      .then(() => {
        history.push("/employees")
      })
  }

  return ( 
    <form className="ticketForm">
      <h2 className="ticketForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            onChange={
              (event) => {
                const copyOfEmployees = {...employee}
                copyOfEmployees.name = event.target.value
                submitEmployee(copyOfEmployees)
              }
              }
            required autoFocus 
            type="text" id="description"
            className="form-control"
            placeholder="Full Name"
            />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input 
            required autoFocus 
            type="text" 
            className="form-control"
            placeholder="Technical Specialty"
            onChange={
              (event) => {
                const copyOfEmployees = {...employee}
                copyOfEmployees.specialty = event.target.value
                submitEmployee(copyOfEmployees)
              }
              }
            />
        </div>
      </fieldset>
      <button onClick={hireEmployee} className="btn btn-primary">
        Finish Hiring
      </button>
    </form>
  )
}