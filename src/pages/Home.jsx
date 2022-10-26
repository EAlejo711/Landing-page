

import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slidershow from '../components/Slideshow'


const Home = () => {
  return (
    <div className='container'>
        <Navbar/>
        
        <div><hr></hr></div> 
        <Slidershow/>
        <div className='categorias'>
          <h2 className='fontCategoria'>Nuestras Categorias</h2>
        </div> 
        <Categories/>
        <div className='slider'>
          <h2 className='fontSlider'>Nuevos Diseños</h2>
        </div> 
        <Slider/>
        <div><hr className='solid'></hr></div> 
        <Footer/>

        
    </div>
  )
}

export default Home