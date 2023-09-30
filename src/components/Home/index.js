import "./index.css";
import React,{useEffect} from 'react'

import Header from "../Header";
// import Line from '../Line';
import Card from '../Card'
import GalleryImage from '../GalleryImage'
import ServicesCard from '../ServicesCard'
import LogoCarousel from '../LogoCarousel'
import Testimonial from '../Testimonial'
import ContactUs from '../ContactUs'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';



const cardData = [
  {id:1,
    heading:"Scripting and Story boarding:",
  content:"Crafting compelling scripts and detailed storyboards that breathe life into your vision. With our Transforming ideas into captivating stories through expert scripting and meticulous storyboarding. Every word and frame is carefully crafted to captivate and engage your audience. Trust us to bring your vision to life with precision and creativity. Elevate your project with our comprehensive scripting and storyboarding services."},
  {id:2,
    heading:"Pre-production and Shoot:",
  content:"We focus on key elements to ensure a seamless shoot or video production. Our experienced team conducts thorough location scouting to find captivating settings that align with your creative vision. With a team of skilled professionals and state-of-the-art equipment, we ensure a seamless and high-quality production experience. During production, we meticulously execute the plans and creative concepts developed during pre-production."},
  {id:3,
    heading:"Post production:",
  content:"In the post-production phase, we bring together all the elements to polish and enhance your video, ensuring a seamless and captivating final product. Our skilled team utilises advanced editing, color grading, animation, and sound integration techniques to elevate your footage. We strive for excellence, continuously refining and polishing your video until it reaches its full potential. Let us transform your raw footage into a polished masterpiece."}
];

const Home=()=> {
  useEffect(() => {
    AOS.init({ once: true,duration: 2000 });
  }, []);

  const isPortfolioClicked = () => {
    document.getElementById("about-us").scrollIntoView();
  };
  const isContactClicked = () => {
    document.getElementById("contact").scrollIntoView();
  };
    return (
        <div class="bg-container">
          <Header
            isPortfolioClicked={isPortfolioClicked}
            isContactClicked={isContactClicked}
          />
          <section className="section-1">
            <h1 className="section1-heading animate__animated animate__rubberBand" data-aos="zoom-in" >PATCO PRODUCTIONS</h1>
          </section>
          <section className="section-2" id="about-us">
            <div className="about-container" data-aos="fade-right">
              <h1 className="about-heading" >ABOUT US</h1>

              <div className="line"></div>

              <p className="about-quote">“Delivering Stunning<br/> Visual Narratives”</p>
              <p className="about-description">From concept to final edit, we tailor our production process to suit your unique needs, ensuring the highest quality results.</p>
            </div>
            <div className="about-text-container" data-aos="fade-left">
              <p className="about-text"><span>PATCO PRODUCTIONS</span> has earned its reputation in the market for its services. We aim to grow as the most prominent firm for our Customers, Business Associates & Stakeholders and we take pride that the intense vision of our experienced personnel encourages us to create a niche in the industry by serving clients across the globe.</p>
              <h1 className="about-second-heading">OUR STORY</h1>
              <div className="line-2"></div>
            </div>
          </section>
          <div class="about-background">about</div>

          <section className="section-3">
            <h1 className="section-3-heading" data-aos="fade-right">Our creative video production process</h1>
            <div className="line-3" data-aos="fade-right"></div>

            <div className="card-container">
              {cardData.map(eachItem=>(
                <Card eachItem={eachItem} key={eachItem.id}/>
              ))}
            </div>
            <div class="workprocess-background">process</div>
          </section>



          <section className="section-4" >
          <h1 className="about-heading" data-aos="fade-left">OUR WORK</h1>
          <div className="line-4" data-aos="fade-left"></div>

          <GalleryImage/>

          </section>

          <section className="section-5" id="services" >
            <h1 className="section-3-heading" data-aos="fade-right">Our services</h1>
            <div className="line-3"  data-aos="fade-right"></div>
            <ServicesCard/>
            <div class="services-background">process</div>
          </section>

          <section className="section-6" id="clients">
            <h1 className="about-heading" data-aos="fade-left">CLIENTS</h1>
            <div className="line-4" data-aos="fade-left"></div>
            <LogoCarousel/>
          </section>

          <section className="section-7" id="testimonial">
          <Testimonial/>
          </section>

          <section className="section-8" id="contact">
            <h1 className="about-heading" data-aos="fade-right">CONTACT US</h1>
            <div className="line-4" data-aos="fade-right"></div>
            <ContactUs/>
          </section>

          
          </div>
    );
}

export default Home;