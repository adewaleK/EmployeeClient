import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="left">
        <h3>EmpMN</h3>
      </div>
      <div className="right">
        <NavLink to="/"><p>Home</p></NavLink>
        
        <NavLink to="addemployee"><p>Create Employer</p></NavLink>
      </div>
    </div>
  )
}

export default Navbar