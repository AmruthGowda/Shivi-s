import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Catreen = () => {

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        message: ""
    })

    return (
        <section>
            <div className='max-w-7xl mx-auto'>
                <Navbar />

                <div className='w-full my-10 h-auto'>
                    <div className='flex justify-center text-5xl'>
                        <span className='underlinee'>Enter The Details</span>
                    </div>

                    <form className='space-y-3'>
                        <div className='relative space-y-3 mt-10 mx-5 md:mx-10'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='enter you name'
                                value={formData.name}
                                required
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className='border-white/10 w-full mx-auto border-2 bg-[#dfdf4427] 
                                rounded-2xl py-2 px-2 focus:border-[#E6A728] outline-none'
                            >
                            </input>
                        </div>
                        <div className='relative mx-5 md:mx-10'>
                            <input
                                type='tel'
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='enter you number [ 123456789 ]'
                                value={formData.phoneNumber}
                                required
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className='border-white/10 w-full mx-auto border-2 bg-[#dfdf4427] 
                                rounded-2xl py-2 px-2 focus:border-[#E6A728] outline-none'
                            >
                            </input>
                        </div>
                        <div className='relative space-y-1 mx-5 md:mx-10'>
                            <textarea
                                type='text'
                                id='text'
                                name='text'
                                placeholder='Enter for what occastion and how many members
( example = marraige : 2000 )'
                                value={formData.message}
                                required
                                rows={5}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className='border-white/10 w-full mx-auto border-2 bg-[#dfdf4427] 
                                rounded-2xl py-2 px-2 focus:border-[#E6A728] outline-none'
                            >
                            </textarea>
                        </div>

                        <div className='lg:mx-80 md:mx-50 mx-15'>
                            <button type="submit" className="w-full p-2 font-bold text-[18px] lg:text-[20px] tracking-widest md:tracking-wide border-[#e4ac34] 
                        border-5 rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#E6A728] to-[#DFDF44]">
                                Get A Call
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Catreen
