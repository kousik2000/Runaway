import React from 'react'
import './index.css'

const Testimonial = () => {
  return (
    <div className='main-testimonial-container'>
        <div className="testimonial-container" data-aos="fade-right">
            <div class="horizontal-rectangle">
              <img src="./Patco Productions-31.jpg" alt="testimonial" className="testimonial-card-image"/>
              <p className="testimonial-description">Video lectures form the crux of IIDE's student & corporate training curriculums. So creating content matching global education standards is paramount. TRC promptly adapted to brand guidelines & delivered quality animation that brought our expert's explanation to life.</p>
              <p className='testimonial-head'>Bhumit Gor</p>
              <p className='person-designation'>Co-Founder & Guitarist, Last Minute Band</p>
            </div>
            <div class="vertical-rectangle"></div>
        </div>
        <div className="testimonal-heading-container" data-aos="fade-left">
            <h1 className="about-heading">TESTIMONIAL</h1>
            <div className="line-5"></div>
            <h1 className='testimonial-quote'>What they say about our passion?</h1>
        </div>
    </div>
  )
}

export default Testimonial