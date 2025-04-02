import React from 'react'

const Cards = ({cardImg,details,title,icon,description}) => {
  return (
    <>
    <div className="container">
    <div className='card' >
        <img src={cardImg} alt=''/>
        <p className='details'>{details}</p>
       <div className="more">
       <h2 className='title'>{title}</h2>
       <i className='icon'>{icon}</i>
       </div>
        <p className='description'>{description}</p>
    </div>
    </div>
    </>
  )
}

export default Cards