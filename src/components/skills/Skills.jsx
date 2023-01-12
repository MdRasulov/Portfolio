import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import React from 'react';
import './skills.scss';

function Skills() {
   const SPLIDE_PROPS = {
      pagination: false,
      type: 'loop',
      perPage: 3,
      perMove: 1,
      focus: 'center',
      wheel: true,
      snap: true,
      width: '100%',
      speed: 2000,
      gap: '1rem',
      heightRatio: 0.3,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,

      breakpoints: {
         1280: {
            perPage: 2,
            heightRatio: 0.4,
            fixedWidth: '50%',
            gap: '2rem',
         },
      },
   };

   return (
      <div className='skills'>
         <div className='carousel_container'>
            <Splide options={SPLIDE_PROPS}>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
               <SplideSlide>
                  <div className='slide'>
                     <img
                        src='https://images.pexels.com/photos/9866795/pexels-photo-9866795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                     />
                  </div>
               </SplideSlide>
            </Splide>
         </div>
      </div>
   );
}

export default Skills;
