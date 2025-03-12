import React from 'react'
import MenuNav from '../components/MenuNav'
import MealsItems from '../components/MealsItems'
import { Link } from 'react-router-dom'
import LunchMeals from '../components/LunchMeals'
import DinnerMeals from '../components/DinnerMeals'

const Meals = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex justify-center my-5 md:my-8 text-5xl'>
        Menu
      </div>
      <MenuNav />
      <div className='flex justify-center my-10 text-[25px] '>
        <span className='underlinee font-bold'>Meals</span>
      </div>
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
        <span className='underline font-semibold'>Breakfast</span>
      </div>
      <MealsItems />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Lunch</span>
      </div>
      <LunchMeals />
      <div className='flex justify-start mt-10 pl-10 text-[20px] tracking-widest '>
      <span className='underline font-semibold'>Dinner</span>
      </div>
      <DinnerMeals />
      <div className='flex justify-center'>
        <Link to={"/"} className='text-[#e4ac34] font-bold'>Back To Home</Link>
      </div>
    </section>
  )
}

export default Meals
