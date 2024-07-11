
import React from 'react';
import Slider from 'react-slick'

export function MusicCarousel() {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    
    return (
       <div className='slider-container'>
           <Slider {...sliderSettings}> 
           <div style={{ width:"100%", overflow:'hidden'}}>
               <iframe 
               style={{ borderRadius: "12px"}} 
               src="https://open.spotify.com/embed/track/299qI1feXBUOAM05oCnizs?utm_source=generator"
               width="100%" 
               height="152" 
               frameBorder="0" 
               allowFullScreen="" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy"></iframe>
            </div>
            <div style={{ width:"100%", overflow:'hidden'}}>
               <iframe 
               style={{ borderRadius: "12px"}} 
               src="https://open.spotify.com/embed/track/6FCIsWVf5eXZIwKobyZfYS?utm_source=generator" 
               width="100%" 
               height="152" 
               frameBorder="0" 
               allow=" encrypted-media" ></iframe>
            </div>
            <div style={{ width:"100%", overflow:'hidden'}}>
               <iframe 
               style={{ borderRadius: "12px"}} 
               src="https://open.spotify.com/embed/track/621CFhl91BygHysX0igkyY?utm_source=generator" 
               width="100%" 
               height="152" 
               frameBorder="0" 
               allowFullScreen="" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy"></iframe>
            </div>
            <div style={{ width:"100%", overflow:'hidden'}}>
               <iframe 
               style={{ borderRadius: "12px"}} 
               src="https://open.spotify.com/embed/track/2lwwrWVKdf3LR9lbbhnr6R?utm_source=generator"
               width="100%" 
               height="152" 
               frameBorder="0" 
               allowFullScreen="" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy"></iframe>
            </div>
           </Slider>
       </div> 
    );
}