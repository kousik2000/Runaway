import React from 'react'
import './index.css'

const Card = (props) => {
    const {eachItem} = props;
    const {heading,content} = eachItem;
  return (
    <div class="container" data-aos="fade-up">
        <div class="circle" ></div>
        <div class="rectangle">
            <h1 className='card-heading'>{heading}</h1>
            <p className='card-description'>{content}</p>
        </div>
    </div>
  )
}

export default Card