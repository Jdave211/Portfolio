import React from 'react';
import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import {github, linkd} from '../assets';

// template_k4twscb
// service_x6rn36p
// 6j11uIDHmxjvkoytC

const Contact = () => {
const fromRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setForm({...form, [name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_x6rn36p', 
      'template_k4twscb',
      {
        from_name: form.name,
        to_name: 'Dave',
        from_email: form.email,
        to_email: 'jagadave21@gmail.com',
        message: form.message,
      }, 
      '6j11uIDHmxjvkoytC'
      )
      .then(() => {
        setLoading(false);
        alert("Thank You! I will get back to you as soon as possible.")

        setForm({
          name: '',
          email: '',
          message: '',
        })
      },
      (error) =>{
        setLoading(false)

        console.log(error);
        alert('Something went wrong.');
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className='flex justify-end items-right gap-7 -mt-12'>
            <img 
              src={github} 
              onClick={()=> window.open('https://github.com/Jdave211')} 
              className='w-12 h-10 justify-center items-center cursor-pointer '
            />
            <img 
              src={linkd} 
              onClick={()=> window.open('https://www.linkedin.com/in/dave-jaga-96a003244/')} 
              className=' w-12 h-10 justify-center items-center cursor-pointer'
            />
          </div>

          <form
            ref={fromRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
               type='text'
               name='name'
               value={form.name}
               onChange={handleChange}
               placeholder='What is your name?' 
               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
               type='email'
               name='email'
               value={form.email}
               onChange={handleChange}
               placeholder='What is your email?' 
               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
               rows='7'
               name='message'
               value={form.message}
               onChange={handleChange}
               placeholder='What would you like to say?' 
               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary rounded-xl w-fit text-white'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')