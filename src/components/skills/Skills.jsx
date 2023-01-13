import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import React from 'react';
import css_logo from '../../assets/images/css.png';
import firebase_logo from '../../assets/images/firebase.png';
import github_logo from '../../assets/images/github.png';
import html_logo from '../../assets/images/html.png';
import js_logo from '../../assets/images/js.png';
import react_logo from '../../assets/images/react.png';
import './skills.scss';

function Skills() {
   const SPLIDE_PROPS = {
      arrows: false,
      // pagination: false,
      type: 'loop',
      perPage: 3,
      perMove: 1,
      focus: 'center',
      wheel: true,
      snap: true,
      width: '100%',
      speed: 2000,
      gap: '1rem',
      heightRatio: 0.25,
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
         720: {
            perPage: 2,
            heightRatio: 0.65,
            fixedWidth: '50%',
            gap: '2rem',
         },
         480: {
            perPage: 2,
            heightRatio: 0.65,
            fixedWidth: '50%',
            gap: '3rem',
         },
      },
   };

   const SLIDE_CONTENT = [
      { image: react_logo, name: 'REACT', id: 1 },
      { image: js_logo, name: 'JS', id: 2 },
      { image: css_logo, name: 'CSS(SASS/SCSS)', id: 3 },
      { image: firebase_logo, name: 'FIREBASE', id: 4 },
      { image: github_logo, name: 'GIT/GITHUB', id: 5 },
      { image: html_logo, name: 'HTML', id: 0 },
   ];

   return (
      <div className='skills'>
         <h3>SKILLS</h3>
         <div className='carousel_container'>
            <p>List of technical skills I currently have as Front-End developer:</p>
            <Splide options={SPLIDE_PROPS}>
               {SLIDE_CONTENT.map(skill => (
                  <SplideSlide key={skill.id}>
                     <div className='slide'>
                        <div className='slide__image'>
                           <img src={skill.image} alt='' />
                        </div>
                        <div className='slide__name'>{skill.name}</div>
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         </div>
      </div>
   );
}

export default Skills;
