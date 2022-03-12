import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './SingleEmployee.css'

const SingleEmployee = (props) => {
  const {id} = useParams();
  const [employee, setEmployee] = useState({});

  const fetchEmployee = async () => {
    const response = await axios.get("http://localhost:60485/api/Employee/get-employee-by-Id?employeeId="+id);
    
    setEmployee(response.data);
    
  }

  useEffect(
    () =>{
        fetchEmployee();
    }, []
  )
  
  return (
     
    <div className='details'>
        <h1>Employee Details</h1>
        <p>Firstname: {employee.firstName}</p>
        <p>Lastname {employee.lastName}</p>
        <p>Address: {employee.address}</p>
        <p>Salary: ${employee.salary}</p>
    </div>
  )
}

export default SingleEmployee