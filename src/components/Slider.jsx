import React from 'react'
import {sliderItems} from '../data';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components';




const Image = styled.img `
width: 100%;
height: 100%;
object-fit: cover;
background-color: #fff;
`;



function App() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='App'>
        <Slider {...settings}>
            
            {sliderItems.map(item=>(
                
                    <Image src={item.img} alt="img"/>


            ))}

        </Slider>
    </div>
  )
}

export default App;
