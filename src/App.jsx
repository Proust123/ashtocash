import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Intro from './Components/Intro'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App