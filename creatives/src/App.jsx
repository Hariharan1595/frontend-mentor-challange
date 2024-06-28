import React from 'react'
import { Arrow } from './assets/icons'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import Review from './components/Review'
import Gallrey from './components/Gallrey'
import Footer from './components/Footer'

const App = () =>  (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Review />
      <Gallrey />
      <Footer />
    </div>
  )


export default App
