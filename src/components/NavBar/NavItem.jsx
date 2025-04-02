import { NavLink } from 'react-router-dom'
import './NavItem.css'
const NavItem = ({href,icon,content}) => {
  return (
    <NavLink
    className={({isActive})=>isActive && "active"}
     to={href}>
    {content}
    </NavLink>
  )
}

export default NavItem