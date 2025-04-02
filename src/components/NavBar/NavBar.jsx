import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import NavItem from "./NavItem"
const NavBar = ({logo,navItems,btn}) => {
  const navigate=useNavigate()
  const goToSignInPage=()=>{
    navigate("/signin")
  }
  return (
    <nav>
      <div className="items">
        <h1>{logo}</h1>
      
      <ul>
        {navItems?.map((item,index)=>{
          return(
            <li key={index}>
              <NavItem  
              href={item.href} 
              content={item.content} 
              />
              </li>
          )
        }
        )}
        </ul>
        </div>
        <button className='menu'>
        <i className="fa fa-bars menu"></i>
        </button>
      <button className='primary-btn' onClick={()=>goToSignInPage()}>{btn}</button>
      
    </nav>
  )
}

export default NavBar