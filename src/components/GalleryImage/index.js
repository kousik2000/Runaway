import React from 'react'
import { Gallery } from "react-grid-gallery";
import './index.css'

const images =[
    {
        src: "./Patco Productions-6.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-7.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-8.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-9.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-11.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-12.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-13.jpg",
        width: 320,
        height: 212,
     },
     {
        src: "./Patco Productions-14.jpg",
        width: 320,
        height: 212,
     },
]

const GalleryImage = () => {
  return (
    <div className='gallery' data-aos="zoom-in-up">
    <Gallery images={images}/>
    </div>
  )
}

export default GalleryImage