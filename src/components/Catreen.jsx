import React from 'react'
import CatreenBoy from '../assets/catreen boy.webp'
import { Link } from 'react-router-dom'


const Catreen = () => {
  return (

    <section className='max-w-7xl mx-auto '>
      <div className='relative '>
        <div className='w-full h-80 absolute z-10'>
          <div className='w-70 h-70 md:w-80 md:h-80  mx-auto md:ml-50 md:pb-8' >
            <img className='w-full h-full object-cover' src={CatreenBoy}></img>
          </div>
        </div>

        <div className='w-full absolute mx-auto mt-50'>
          <div className='bg-[#dcdc447b] border-2 border-black h-70 lg:mx-70 md:mx-40 mx-10 rounded-3xl '>
            <div className='justify-center flex items-center my-20 flex-col'>
              <div className='text-[40px] font-bold'>
                Catreen Services
              </div>
              <p className='mt-5 tracking-wide'>
                You can count on us, on any <span className='text-[#e4ac34] underlinee font-bold'>EVENT</span>
              </p>
              <div className='mt-5'>
                <Link to={"/catreen"}>
                  <button className='p-2 font-bold text-[15px] lg:text-[20px] tracking-widest border-[#e4ac34] 
                        border-5 rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#E6A728] to-[#DFDF44] '>Click Here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catreen

