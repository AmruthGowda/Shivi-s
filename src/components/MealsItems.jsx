import React from 'react'
import { BreakfastItems } from '../constants'

const MealsItems = () => {
    return (
        <section className=''>
            <div className='max-w-7xl mx-auto '>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-10'>
                    {BreakfastItems.map((items)=>(
                        <div key={items.id} className='rounded-2xl py-2 px-1 border-2 border-black '>
                            <img src={items.image} className='h-auto w-full
                                object-cover rounded-2xl '></img>

                            <div className='flex justify-between py-1 text-[18px] gap-1'>
                                <div>{items.name}</div>
                                <div>{items.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MealsItems
