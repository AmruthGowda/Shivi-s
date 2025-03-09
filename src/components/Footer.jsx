import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from '@remixicon/react'
import logo from '../assets/shivis png-01.png'

const Footer = () => {
  return (
    <section className='max-w-7xl mx-auto mt-150'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t-2 md:p-0 py-5 '>
            <div className='flex space-x-6 '>
                <a href='https://www.facebook.com' target='_blank' rel='nooperner noreferrer'
                arial-label='visit our facebook page'>
                    <RiFacebookFill/>
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='nooperner noreferrer'
                arial-label='visit our twitter page'>
                    <RiTwitterFill/>
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='nooperner noreferrer'
                arial-label='visit our instagram page'>
                    <RiInstagramFill/>
                </a>
            </div>
            <div className='w-30 h-20 p-0 m-0'>
                <img src={logo} className='w-full h-full'></img>
            </div>
            <p className='text-sm'>&copy: 2025 Shivi's. All rights reserved</p>
        </div>
      
    </section>
  )
}

export default Footer
