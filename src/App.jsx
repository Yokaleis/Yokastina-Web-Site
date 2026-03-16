import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'

import './App.css'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='proyectos' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
