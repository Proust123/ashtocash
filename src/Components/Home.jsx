import React from 'react'
import Inputs from './Inputs'
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='px-10 min-h-screen w-full bg-black flex flex-col gap-y-24 items-center overflow-hidden'>
      <nav className='bg-white h-[10%] w-full flex items-center justify-end'>
        <Link  className='text-2xl text-amber-400' to={'/'}><IoHomeSharp /></Link>
      </nav>
      <Inputs />
    </div>
  )
}

export default Home