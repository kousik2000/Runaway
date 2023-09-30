import React,{useEffect} from 'react'
import './index.css'

const LogoCarousel = () => {
    useEffect(() => {
        // Clone the logos and append them to the parent element
        const logosContainer = document.querySelector('.logos');
        const logosSlide = document.querySelector('.logos-slide');
        const copy = logosSlide.cloneNode(true);
        logosContainer.appendChild(copy);
      }, []);
  return (
    <div class="logos">
    <div class="logos-slide">
        <img class="logo-cls" src="./1 (1).png" alt=""/>
        <img class="logo-cls" src="./1 (2).png" alt=""/>
        {/* <img class="logo-cls" src="./1 (3).png" alt=""/> */}
        <img class="logo-cls" src="./1 (4).png" alt=""/>
        <img class="logo-cls" src="./1 (5).png" alt=""/>
        <img class="logo-cls" src="./1 (6).png" alt=""/>
    </div>
  </div>
  )
}

export default LogoCarousel