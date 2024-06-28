import React from 'react'
import { navLinks, socialLink } from '../constants'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center w-full items-center p-9 bg-Darkcyan'>
        <h3 className='text-2xl font-Barlow font-semibold tracking-wide text-Veryblue'>sunnyside</h3>
        <div className='my-5 text-2xl cursor-pointer flex gap-10'>
            {navLinks.map((link)=>(
                <a className='hover:[color:white] font-Barlow text-Veryblue'>
                    {link.title}
                </a>
            ))}
        </div>
        <div className='flex gap-5 mt-10 '>
            {socialLink.map((slink)=>(
                <a href="#" >
                    <img src={slink.src} className='hover:bg-white' alt="" />
                </a>
            ))}
        </div>
    </footer>
  )
}

export default Footer
