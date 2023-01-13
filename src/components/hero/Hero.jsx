import React from 'react';
import bannerImg from '../../assets/images/banner.png';
import './hero.scss';

const Hero = () => {
   return (
      <div className='hero'>
         <div className='intro'>
            <div className='welocome'>
               <h1>Welcome to my Portfolio</h1>
            </div>
            <div className='typing_text'>Hello! I'm Makhmud, Web Developer</div>
            <div className='description'>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime qui amet
                  aperiam quibusdam culpa sit incidunt ut saepe nihil minus non impedit
                  eius repellat aut, fugit optio modi officia illum!
               </p>
            </div>
         </div>
         <div className='banner_image'>
            <img src={bannerImg} alt='' />
         </div>
      </div>
   );
};

export default Hero;
