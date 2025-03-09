import { RiCloseLine, RiMenu3Line } from '@remixicon/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuNav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className=''>
            <div className='max-w-7xl mx-auto h-[40px] border-2 border-black
         md:mx-10 lg:mx-40 rounded-3xl bg-[#dcdc447b]'>
                <div className='flex justify-between items-center mt-1 mx-3 '>
                    <div className='md:text-[20px] text-[18px]'>
                        Please Select any one...
                    </div>

                    <div className='md:hidden'>
                        <button onClick={onToggle} className='pt-1'>
                            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>

                    <div className='hidden md:flex space-x-6'>
                        <Link to={"/meals"} className='focus:font-bold text-[20px] tracking-wide'>Meals</Link>
                        <Link to={"/chats"} className='focus:font-bold text-[20px] tracking-wide' >Chats</Link>
                        <Link to={"/juice"} className='focus:font-bold text-[20px] tracking-wide'>Juice</Link>
                        <Link to={"/icecreame"} className='focus:font-bold text-[20px] tracking-wide'>IceCreame & Milkshake</Link>
                    </div>
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute w-full border-black
                 rounded-3xl z-40`}>
                    <div className=' pl-2 py-2 backdrop-blur-lg rounded-3xl  '>
                        <Link to={"/meals"} className='block focus:font-bold text-[20px] tracking-wide'>Meals</Link>
                        <Link to={"/chats"} className='block focus:font-bold text-[20px] tracking-wide' >Chats</Link>
                        <Link to={"/juice"} className='block focus:font-bold text-[20px] tracking-wide'>Juice</Link>
                        <Link to={"/icecreame"} className='block focus:font-bold text-[20px] tracking-wide'>IceCreame & Milkshake</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MenuNav

