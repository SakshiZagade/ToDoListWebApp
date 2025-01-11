
import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToGet from './components/ToGet'


function App() {


  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<ToGet/>} />
        <Route path='/create' element={<h1>Create</h1>} />
        <Route path='/update/:id' element={<h1>Update</h1>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
