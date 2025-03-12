import React from 'react'
import MenuNav from '../components/MenuNav'
import MealsItems from '../components/MealsItems'
import { Link } from 'react-router-dom'
import IcecreamComponent from '../components/IcecreamComponent'
import FaloodaComponent from '../components/FaloodaComponent'
import MilkComponent from '../components/MilkComponent'

const IceCream = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex justify-center my-5 md:my-8 text-5xl'>
        Menu
      </div>
      <MenuNav />
      <div className='flex justify-center my-10 text-[20px] '>
        <span className='underlinee font-bold'>IceCreame & Milkshake</span>
      </div>
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
        <span className='underline font-semibold'>Ice Cream Sundays</span>
      </div>
      <IcecreamComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
        <span className='underline font-semibold'>Falooda</span>
      </div>
      <FaloodaComponent />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
        <span className='underline font-semibold'>Milk Shake</span>
      </div>
      <MilkComponent />
      <div className='flex justify-center'>
        <Link to={"/"} className='text-[#e4ac34] font-bold'>Back To Home</Link>
      </div>
    </section>
  )
}

export default IceCream
