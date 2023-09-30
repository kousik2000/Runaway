import React from 'react'
import './index.css'

import DetailCard from '../DetailCard'

const cardData = [
    {
        id:1,
        heading:"EXPLAINER",
        description:"Unveil your brand's potential with our captivating explainer videos. Engaging visuals, seamless animations, and strategic storytelling that educates and inspires action. Elevate your brand with Patco Productions. Let's bring your story to life.",
    },
    {
        id:2,
        heading:"MOTION GRAPHICSR",
        description:"Captivating motion graphics that bring your brand to life. Enhance your content with dynamic visuals, engaging animations, and seamless transitions. Elevate your message with our expert motion graphics services.",
    },
    {
        id:3,
        heading:"3D/VFX",
        description:"Experience the power of 3D VFX. Mind-blowing visual effects, realistic simulations, and immersive virtual worlds. Take your visuals to new dimensions with cutting-edge 3D VFX.",
    },
    {
        id:4,
        heading:"LIVE SHOOT",
        description:"Immersive live shoots that capture the essence of the moment. Expertly crafted visuals, dynamic camera work, and captivating storytelling. Experience the magic of live shoots with us.",
    },
    {
        id:5,
        heading:"VIDEO EDITING",
        description:"Precise video editing that brings your story to life. Enhance your footage, add captivating effects, and deliver a polished final product. Elevate your videos with our expert editing services.",
    },
    {
        id:6,
        heading:"CONTENT WRITING",
        description:"Compelling content that captivates and engages. From website copy to blog posts, we craft words that leave a lasting impression. Ignite your brand with our expert content writing.",
    },
    {
        id:7,
        heading:"SOCIAL MEDIA CREATIVES",
        description:"Engaging social media content that sparks conversations and drives results. Stand out, connect with your audience, and make an impact with our strategic social media solutions.",
    },
]

const ServicesCard = () => {
  return (
    <div className='service-card-container' data-aos="fade-up">
        {cardData.map(eachData=>(
            <DetailCard eachData={eachData} key={eachData.id}/>
        ))}
    </div>
  )
}

export default ServicesCard