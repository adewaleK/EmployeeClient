import React,{ useState, useEffect} from "react"
import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Employees from './components/Employees/Employees';
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import SingleEmployee from "./components/SingleEmployee/SingleEmployee";

function App() {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const response = await axios.get("http://localhost:60485/api/Employee/get-all-employees");
    setEmployees(response.data);
  }

  useEffect(
    () =>{
        fetchEmployees();
    }, []
  )

  const deleteEmployee = async (id) => {
    await axios.delete("http://localhost:60485/api/Employee/delete-employee?EmployeeId="+id);
    const newEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(newEmployees); 
  }

  const getEmployee = async (id) => {
    const response = await axios.get("http://localhost:60485/api/Employee/get-employee-by-Id?employeeId="+id);
    console.log(response.data.id);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" 
          element={
            <Employees 
              employees={employees} 
              deleteEmployee={deleteEmployee} 
              getEmployee={getEmployee}
            />
          }
        >
        </Route>
        <Route path="addemployee" element={<CreateEmployee />}  employees={employees} ></Route>
        <Route path="profile/:id" element={<SingleEmployee />}></Route>
      </Routes>
    </div>
  );
}

export default App;
