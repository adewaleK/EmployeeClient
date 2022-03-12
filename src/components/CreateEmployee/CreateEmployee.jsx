import React, {useState} from 'react'
import axios from 'axios'

import './CreateEmployee.css'

const CreateEmployee = ({employees}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [phonenumber, setPhone] = useState('');


  const submithandler = async (e) => {
    e.preventDefault();
    if(
       firstname === "" 
       || lastname === ""
       || address === ""
       || salary === ""
       || phonenumber === "")
    {
        alert("all fields are required");
        return;
    }
    
    const employee = {
        firstname,lastname,address,salary,phonenumber
    }

    try {
        console.log(employee)
        await axios.post("http://localhost:60485/api/Employee/add-employee", employee);
    } catch (error) {
        console.log(error);
    } 

  }

  return (
    <>
    <div className="title"><h3>Add an Employee</h3></div>
    <div className='form-box'>  
        <form action="" onSubmit={submithandler}>           
          <div className='input-box'>
            <input 
                    type="text" 
                    onChange={(e) => setFirstname(e.target.value)} 
                    value={firstname}
                    placeholder="Firstname"
            /> 
          </div>   
            <div className='input-box'>
                <input 
                    type="text" 
                    onChange={(e) => setLastname(e.target.value)} 
                    value={lastname}
                    placeholder="Lastname"
                />
            </div>
           <div className='input-box'>
            <input 
                    type="text" 
                    onChange={(e) => setAddress(e.target.value)} 
                    value={address} 
                    placeholder="Address"
                />
           </div>
           <div className='input-box'>
            <input 
                    type="text" 
                    onChange={(e) => setSalary(e.target.value)} 
                    value={salary}
                    placeholder="salary"
                />
           </div>
            <div className='input-box'>
                <input 
                    type="text" 
                    onChange={(e) => setPhone(e.target.value)} 
                    value={phonenumber} 
                    placeholder="Mobile number"
                />
            </div>
            <div className='input-box'><button className="">Add Job</button></div>
    </form>
    </div>
    </>
  )
}

export default CreateEmployee