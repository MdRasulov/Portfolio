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
               <p>
                  Hello! <span className='name'>I'm Makhmud,</span>
               </p>
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
                  Hi! 👋 My name is Makhmud and I'm passionate about creating beautiful
                  and performant web applications.
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
