import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import bannerImg from '../../assets/images/banner.png';
import './hero.scss';

const Hero = () => {
   return (
      <div className='hero'>
         <div className='intro'>
            <div className='welocome'>
               <h1>Welcome to my Portfolio</h1>
            </div>
            <div className='typing_text'>
               <p>Hello! I'm Makhmud,</p>
               <Typed
                  strings={['Web Developer 💻', 'I like coding 💖']}
                  typeSpeed={150}
                  backSpeed={150}
                  backDelay={3000}
                  startDelay={1000}
                  loop
               />
            </div>
            <div className='description'>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime qui amet
                  aperiam quibusdam culpa sit incidunt ut saepe nihil minus non impedit
                  eius repellat aut, fugit optio modi officia illum!
               </p>
            </div>
            <div className='contact_link'>
               <Link to='#contact_section'>Contact me</Link>
            </div>
         </div>
         <div className='banner_image'></div>
      </div>
   );
};

export default Hero;
