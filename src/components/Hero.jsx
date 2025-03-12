import React from 'react'
import Heroimg from '../assets/hero-image.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='max-w-7xl mx-auto '>
            <div className='relative overflow-hidden items-center flex justify-center'>
                <img className='w-200 object-cover opacity-30' src={Heroimg}></img>

                <div className='absolute items-center inset-0 flex flex-col justify-center '>
                    <div className='my-5 md:my-15'>
                        <h1 className='lg:text-6xl md:text-5xl text-2xl font-bold'>We'll Look After Your Appetite</h1>
                    </div>
                    <div className=''>
                        <Link to={"/meals"}>
                            <button className='p-2 font-bold text-[12px] md:text-[15px] lg:text-[20px] tracking-widest border-[#e4ac34] 
                        border-5 rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#E6A728] to-[#DFDF44] '>Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
