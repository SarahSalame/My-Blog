import React from 'react'
import './Footer.css'
const Footer = ({icon,info}) => {
  return (
    <>
    <footer className='footer' >
    <i className='icon'>{icon}</i>
    <p>{info}</p>
    </footer>
    </>
  )
}

export default Footer