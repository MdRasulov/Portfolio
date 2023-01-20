import React from 'react';
import galleryImg from '../../assets/images/gallery.png';
import messagerImg from '../../assets/images/messanger.png';
import './projects.scss';

function Projects() {
   return (
      <div className='projects'>
         <h3>MY PROJECTS</h3>
         <div className='projects__container'>
            <div className='project__card'>
               <img src={messagerImg} alt='' />
               <div className='project__modal'>
                  <p>WEB MESSENGER</p>
                  <div className='links'>
                     <a
                        href='https://github.com/NinjaBubble/Web-Chat-App'
                        target={'_blank'}
                     >
                        GITHUB
                     </a>
                     <a
                        href='https://ninjabubble.github.io/Web-Chat-App/'
                        target={'_blank'}
                     >
                        Life Demo
                     </a>
                  </div>
               </div>
            </div>
            <div className='project__card'>
               <img src={galleryImg} alt='' />
               <div className='project__modal'>
                  <p>WEB GALLERY</p>
                  <div className='links'>
                     <a
                        href='https://github.com/NinjaBubble/Simple-Gallery'
                        target={'_blank'}
                     >
                        GITHUB
                     </a>
                     <a
                        href=' https://ninjabubble.github.io/Simple-Gallery/'
                        target={'_blank'}
                     >
                        Life Demo
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;
