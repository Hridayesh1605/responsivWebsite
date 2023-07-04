import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Service from './Component/Service'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/service' Component={Service}/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/contact' Component={Contact}/>
      
    </Routes>
    </>
  )
}

export default App
