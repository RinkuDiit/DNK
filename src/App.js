import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Women from './components/Furniture'
import Men from './components/Cloths'
import Accessories from './components/Accessories'
import Jewelerys from './components/Shoes'
import Everythings from './components/Everythings'
import Footer from './components/Footer'
import ImageComponent from './components/ImageComponent'
import Singleproduct from './components/Singleproduct'
import ParentComponent from './components/try/ParentComponent '
import ChildComponent from './components/try/ChildComponent'
import Mycart from './components/Mycart'


function App() {
  return (
    <div>
       <BrowserRouter>
       <Header /> 
       <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/everythings' element={<Everythings/>}  />
            <Route path='/furniture' element={<Women/>}  />
            <Route path='/cloths' element={<Men/>}  />
            <Route path='/accessories' element={<Accessories/>}  />
            <Route path='/shoes' element={<Jewelerys/>} />
            <Route path='/singleproduct/:id' element={<Singleproduct/>} />
            <Route path='/cart' element={<Mycart/>} />
            {/* <Route path='/' element={<ParentComponent/>}  />
            <Route path='/child' element={<ChildComponent/>}  /> */}

       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App