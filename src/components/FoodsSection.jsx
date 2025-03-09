import React from 'react'
import HomeCards from './HomeCards'

const FoodsSection = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className='justify-center flex items-center my-20 font-bold'>
                <div className='text-4xl md:text-5xl'>
                    <span className='underlinee'> OUR FOODS</span>
                </div>
            </div>
            <div>
                <HomeCards/>
            </div>
        </section>
    )
}

export default FoodsSection
