import { Link } from 'react-router-dom'
import './Employee.css'

const Employee = ({employee, deleteEmployee, getEmployee}) => {
  return (
    <div className='employee-container'>
    <div className="left">
        <div className="name">
          {`${employee.firstName} ${employee.lastName}`}
        </div>
        <div className="location">
            {employee.address}
        </div>
    </div>
    <div className="center">
        <div className="salary">
           <b>Salary</b>: ${employee.salary}
        </div>
    </div>
    <div className="right">
        <Link to={`profile/${employee.id}`} ><button type='button' className='view' onClick={() => getEmployee(employee.id)}>View</button></Link>
        
        <button type='button' className='edit'>Edit</button>
        <button type='button' className='delete' onClick={() => deleteEmployee(employee.id)}>Delete</button>
    </div>
</div>
  )
}

export default Employee