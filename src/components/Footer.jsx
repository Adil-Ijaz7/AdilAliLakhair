import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Adil-Ijaz7', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aadilijaz/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/adil.ijaz7/', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-black text-white mt-16'>
      <div className='px-5 lg:px-28 py-12 lg:py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <img className='invert h-8 lg:h-10 mb-4' src="/assets/logo.svg" alt="Adil Ali Lakhair" />
            <p className='text-gray-400 text-sm lg:text-base leading-relaxed mb-4 max-w-md'>
              Creating stunning illustrations and digital experiences. Passionate about bringing ideas to life through creative design and development.
            </p>
            <a 
              href='https://mail.google.com/mail/?view=cm&fs=1&to=adilijaz227@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors'
            >
              <FaEnvelope className='text-lg' />
              <span>adilijaz227@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors text-sm lg:text-base inline-block hover:translate-x-1 transform duration-200'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Connect</h3>
            <div className='flex flex-wrap gap-3'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-700/50'
                  >
                    <Icon className='text-lg' />
                  </a>
                );
              })}
            </div>
            <p className='text-gray-400 text-xs mt-4'>
              Let's create something amazing together
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 dark:border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} Adil Ali Lakhair. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm'>
              <a href='#privacy' className='text-gray-400 hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='#terms' className='text-gray-400 hover:text-white transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
          <p className='text-gray-500 text-xs text-center mt-4'>
            Designed and developed with passion
          </p>
        </div>
      </div>
    </footer>
  )
}
