import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Meals from './pages/Meals'
import Main from './components/Main'
import Chats from './pages/Chats'
import Juice from './pages/Juice'
import IceCream from './pages/IceCream'
import Catreen from './pages/Catreen'


const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/meals' element={<Meals/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/juice' element={<Juice/>}/>
        <Route path='/icecreame' element={<IceCream/>}/>
        <Route path='/catreen' element={<Catreen/>}/>
      </Routes>
    </main>
  )
}

export default App
