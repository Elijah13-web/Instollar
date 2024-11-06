import { useState } from 'react'
import Africa from './Pages/Africa'
import Connect from './Pages/Connect'
import Navbar from './Pages/Navbar'
import Energy from './Pages/Energy'
import Areas from './Pages/Areas'
import Companies from './Pages/Companies'
import Technicians from './Pages/Technicians'
import Customers from './Pages/Customers'
import Save from './Pages/Save'
import Footer from './Pages/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Connect/>
        <Africa/>
        <Energy/>
        <Areas/>
        <Companies/>
        <Technicians/>
        <Customers/>
        <Save/>
        <Footer/>
    </div>
    </>
  )
}

export default App
