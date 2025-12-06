import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      website: formData.get('website'),
      message: formData.get('message')
    };

    try {
      // Using Formspree - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5 dark:bg-gray-900'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center text-black dark:text-white'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form className='w-full space-y-3 lg:space-y-5' onSubmit={handleSubmit}>
            <input 
              className='border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-gray-400 text-sm w-full bg-white dark:bg-gray-800 text-black dark:text-white' 
              type="text" 
              name="name"
              placeholder='Your name' 
              required 
            />
            <input 
              className='border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-gray-400 text-sm w-full bg-white dark:bg-gray-800 text-black dark:text-white' 
              type="email" 
              name="email"
              placeholder='Email' 
              required 
            />
            <input 
              className='border-2 px-5 py-3 border-black dark:border-white rounded placeholder:text-[#71717A] dark:placeholder:text-gray-400 text-sm w-full bg-white dark:bg-gray-800 text-black dark:text-white' 
              type="text" 
              name="website"
              placeholder='Your website (If exists)' 
            />
            <textarea 
              className='resize-none border-2 px-5 py-3 h-32 border-black dark:border-white placeholder:text-[#71717A] dark:placeholder:text-gray-400 rounded text-sm w-full bg-white dark:bg-gray-800 text-black dark:text-white' 
              name="message"
              placeholder='How can I help?*'
              required
            ></textarea>

            {formStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-green-600 dark:text-green-400 text-sm font-medium'
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}

            {formStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-red-600 dark:text-red-400 text-sm font-medium'
              >
                ✗ Failed to send message. Please try again or email directly.
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                disabled={isSubmitting}
                className='bg-black dark:bg-white justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white dark:text-black px-3 py-2 rounded flex items-center gap-x-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Sending...' : 'Get In Touch'}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {[
                  { Icon: BsGithub, href: "https://github.com/Adil-Ijaz7" },
                  { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/aadilijaz/" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/adil.ijaz7/" },
                  { Icon: IoLogoTwitter, href: "https://twitter.com/adil_ijaz7" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-2 lg:p-3 rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3 text-black dark:text-white'>
            <h2>Let's <span className='text-white dark:text-gray-900' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] dark:text-gray-400 text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4 text-black dark:text-white'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group cursor-pointer'
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adilijaz227@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black dark:group-hover:border-white rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              adilijaz227@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:+923468207779"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black dark:group-hover:border-white rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +92 346 8207779
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
