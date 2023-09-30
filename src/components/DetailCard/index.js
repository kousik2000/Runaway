import React from 'react'
import './index.css'

const DetailCard = (props) => {
    const {eachData} = props
    const {heading,description}=eachData
  return (
    <div className='service-card'>
        <h1 className='service-card-heading'>{heading}</h1>
        <hr className='card-line'/>
        <p className='service-card-description'>{description}</p>
    </div>
  )
}

export default DetailCard