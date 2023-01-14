import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactImg from '../../assets/images/contacts_banner.png';
import './contacts.scss';

function Contacts() {
   const form = useRef();

   const successNotify = () =>
      toast.success('Message Sent!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'dark',
      });
   const errorNotify = () =>
      toast.error('Something went wrong!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'dark',
      });

   const sendEmail = e => {
      e.preventDefault();
      emailjs
         .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
         )
         .then(
            result => {
               successNotify();
               e.target.reset();
            },
            error => {
               console.log(error.text);
               errorNotify();
            }
         );
   };

   return (
      <div className='contacts' id='contact_section'>
         <div className='contact__image'>
            <img src={contactImg} alt='' />
         </div>
         <div className='contact__form'>
            <ToastContainer />
            <h2>Get in touch</h2>
            <form ref={form} onSubmit={sendEmail}>
               <input type='text' name='user_name' placeholder='Full Name' required />
               <input
                  type='email'
                  name='user_email'
                  placeholder='Email Address'
                  required
               />
               <textarea
                  name='message'
                  rows='10'
                  placeholder='Message'
                  required
               ></textarea>
               <button type='submit'>Send</button>
            </form>
         </div>
      </div>
   );
}

export default Contacts;
