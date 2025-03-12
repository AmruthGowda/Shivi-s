import React from 'react'
import MenuNav from '../components/MenuNav'
import { Link } from 'react-router-dom'
import PaniPuriComponent from '../components/PaniPuriComponent'
import GobiComponent from '../components/GobiComponent'
import SandwitchComponent from '../components/SandwitchComponent'
import FrenchFriesComponent from '../components/FrenchFriesComponents'
import RiceComponent from '../components/RiceComponent'
import MomosComponent from '../components/MomosComponent'

const Chats = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex justify-center my-5 md:my-8 text-5xl'>
        Menu
      </div>
      <MenuNav />
      <div className='flex justify-center my-10 text-[20px] '>
        <span className='underlinee font-bold'>Chats</span>
      </div>
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>PaniPuri</span>
      </div>
      <PaniPuriComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Gobi</span>
      </div>
      <GobiComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Sandwitch</span>
      </div>
      <SandwitchComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>French Fries</span>
      </div>
      <FrenchFriesComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Fried Rice</span>
      </div>
      <RiceComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Momos</span>
      </div>
      <MomosComponent />
      <div className='flex justify-center'>
        <Link to={"/"} className='text-[#e4ac34] font-bold'>Back To Home</Link>
      </div>
    </section>
  )
}

export default Chats
