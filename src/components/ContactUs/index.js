import React from 'react'
import './index.css'
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { MdOutgoingMail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';

const ConatctUs = () => {
  return (
    <div className='contact-container' data-aos="flip-left">
        <div className='icons-container'>
            <div className='icon-paragraph-container'>
                <BsFillTelephoneForwardFill className='contact-icon'/>
                <a href="tel:8169961396" target="_blank" className="icon-paragraph" rel="noreferrer">+91 8169961396</a>
            </div>
            <div className='icon-paragraph-container'>
                <MdOutgoingMail className='contact-icon'/>
                <a href="mailto:patcoproductions@gmail.com" target="_blank" className="icon-paragraph" rel="noreferrer">patcoproductions@gmail.com</a>
            </div>
            <div className='icon-paragraph-container'>
                <ImLocation2 className='contact-icon'/>
                <a href="https://goo.gl/maps/gY6dpvQp459cBwCMA" target="_blank" className="icon-paragraph" rel="noreferrer">https://goo.gl/maps/gY6dpvQp459cBwCMA</a>
            </div>
        </div>
        <div className='image-container'>
            <img src="./Patco Productions.jpg" className='contact-image' alt="contactimage"/>
        </div>
    </div>
  )
}

export default ConatctUs