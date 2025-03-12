import React from 'react'
import {foodsectionitems} from '../constants'

const HomeCards = () => {
    return (
        <div className='max-w-7xl mx-auto overflow-hidden'>
            <div className='flex items-center animate-infinite-scroll justify-between gap-10 '>
                {foodsectionitems.map((foods) => (
                    <div key={foods.id} className='h-70 w-70 border-black border-3 rounded-xl md:my-20 my-10 flex-shrink-0'>
                        <img src={foods.image} className='w-full h-full object-cover'></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCards
