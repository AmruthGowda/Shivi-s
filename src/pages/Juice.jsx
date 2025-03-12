import React from 'react'
import MenuNav from '../components/MenuNav'
import { Link } from 'react-router-dom'
import FruiteJuiceComponent from '../components/FruiteJuiceComponent'
import SugarCaneComponent from '../components/SugarCaneComponent'
import LimeComponent from '../components/LimeComponent'

const Juice = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex justify-center my-5 md:my-8 text-5xl'>
        Menu
      </div>
      <MenuNav />
      <div className='flex justify-center my-10 text-[20px] '>
        <span className='underlinee font-bold'>Juice</span>
      </div>
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Fruit-Juice</span>
      </div>
      <FruiteJuiceComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Sugarcane-Juice</span>
      </div>
      <SugarCaneComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Lime And Mojitos</span>
      </div>
      <LimeComponent />
      <div className='flex justify-center'>
        <Link to={"/"} className='text-[#e4ac34] font-bold'>Back To Home</Link>
      </div>
    </section>
  )
}

export default Juice
