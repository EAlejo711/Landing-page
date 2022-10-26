import React from "react";


import HeroSlider, {Slide} from "hero-slider";




const sample1 = "https://firebasestorage.googleapis.com/v0/b/floristeria-honduras-dev.appspot.com/o/carousel%2FBanner2%20(1).jpg?alt=media&token=448e8f6b-abd9-4a6e-99ec-e3074465b730"
const sample2= "https://firebasestorage.googleapis.com/v0/b/floristeria-honduras-dev.appspot.com/o/carousel%2FBanner1%20(1).jpg?alt=media&token=906c8a60-724c-45a7-9753-c4d1dedb2c10"
const sample3 = "https://firebasestorage.googleapis.com/v0/b/floristeria-honduras-dev.appspot.com/o/carousel%2FBanner3%20(1).jpg?alt=media&token=f191ab83-3af0-4080-b724-06aea68f1bbc"





const Slidershow =()=>{
    
     
    return (
         <HeroSlider
        
        height={"75vh"}
        
       
        
            autoplay
            slidingAnimation="left_to_right"
            orientation="horizontal"
            
            
            
         
            style={{
                backgroundColor: "rgba(0,0,0,0.33)"
                
            }}
            settings = {{
                initialSlide:1,
                slidingDuration: 500,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5,
                height: "75vh",
                onBeforeChange:(previousSlide, nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide),
                onChange:nextSlide => console.log("onChange",nextSlide ),
                onAfterChange:nextSlide => console.log("onAfterChange", nextSlide)
               
            }}
        >

            <Slide
                background={{
                    backgroundImageSrc: sample1,
                    backgroundAttachment: "fixed"
                }}
            Slide/>
                
            
            <Slide
                background={{
                    backgroundImageSrc: sample2,
                    backgroundAttachment: "fixed"
                }}
            Slide/>
             

              <Slide
                background={{
                    backgroundImageSrc: sample3,
                    backgroundAttachment: "fixed"
                }}
                Slide/>
                
                
        </HeroSlider>
        
    )
    
};



    


export default Slidershow;