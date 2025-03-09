import React from 'react'
import reactpic from '../assets/shivis png-01.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='max-w-7xl mx-auto '>
            <div className='flex justify-between items-center'>
                <Link to={"/"}>
                    <img className='cursor-pointer md:w-50 md:h-30 w-25 h-20' src={reactpic}></img>
                </Link>

                <div className='flex px-5'>
                    <div className='pr-3 md:pr-5'>
                        <Link to={"/meals"}>
                            <h3 className='md:text-3xl cursor-pointer font-bold md:tracking-wide text-[20px] tracking-normal'>Menu</h3>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/catreen"}>
                            <h3 className='md:text-3xl font-bold cursor-pointer  md:tracking-wide text-[20px] tracking-normal'>Catreen</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
