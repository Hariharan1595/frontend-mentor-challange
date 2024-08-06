import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Creation from './components/Creation'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <div className='w-[80%] m-auto'>
        <Creation/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
