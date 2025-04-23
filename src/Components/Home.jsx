import React from 'react'
import Inputs from './Inputs'
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import img2 from '../images/img2.jpg'

const Home = () => {
  return (
    <div className='relative px-10 min-h-screen w-full bg-black flex flex-col gap-y-24 items-center overflow-hidden'
    style={{
      backgroundImage: `url(${img2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <nav className='h-[10%] w-full flex items-center justify-end'>
        <Link  className='text-2xl z-10 text-amber-400' to={'/'}><IoHomeSharp /></Link>
      </nav>
      <Inputs />
    </div>
  )
}

export default Home