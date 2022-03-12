import React from 'react'
import Employee from '../Employee/Employee'

const Employees = ({employees, deleteEmployee,getEmployee}) => {
  return (
   <>
      { 
        employees.map(employee => 
        <Employee 
          employee={employee} 
          key={employee.Id} 
          deleteEmployee={deleteEmployee}
          getEmployee={getEmployee}
        />) 
      }
   </>
  )
}

export default Employees