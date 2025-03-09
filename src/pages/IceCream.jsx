import React from 'react'
import MenuNav from '../components/MenuNav'
import MealsItems from '../components/MealsItems'
import { Link } from 'react-router-dom'

const IceCream = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex justify-center my-5 md:my-8 text-5xl'>
            Menu
        </div>
        <MenuNav/>
        <div className='flex justify-center my-10 text-[20px] '>
        <span className='underlinee'>IceCreame & Milkshake</span>
        </div>
        <MealsItems/>
        <div className='flex justify-center'>
            <Link to={"/"}>Back To Home</Link> 
        </div>
    </section>
  )
}

export default IceCream
