import React, { Component } from 'react'
import {FaLinkedin, FaGithub, FaTwitter, FaInstagram , FaFacebook} from 'react-icons/fa'

const SocialIcons = () => {

  const icons = [
    {
      href: 'https://www.linkedin.com/in/amaka-onyekwere-71238bb5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      Component: <FaLinkedin/>
    },
    {
      href: 'https://github.com/Amakajoe',
      Component: <FaGithub/>
    },
    {
      href: 'https://x.com/AmakaOnyekwere2?t=-1vPKcPIKaHF3W4o7XOZRg&s=09',
      Component: <FaTwitter/>
    },
    {
      href: 'https://www.instagram.com/amakaonyekwere?igsh=MWszdDc4cWpsMGxn',
      Component: <FaInstagram/>
    },

    {
      href: 'https://web.facebook.com/amakachristabelonyekwere',
      Component: <FaFacebook/>
    }
  ]
  return (
    <div className=' lg:flex lg:justify-center lg:items-center  items-center justify-center space-x-4 sm:bt-6 block md:flex'>
      {icons.map((icons, index) =>(
        <a href = {icons.href} className='w-10 h-10 flex  bg-red-500   mt-10 items-center justify-center  border-2 border-red-500 rounded-full text-red hover:bg-yellow-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(225,0,0,0.8)]'>{icons.Component}</a>
      ))}
    </div>
  )
}

export default SocialIcons