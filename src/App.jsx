import React from 'react'
import Hero from './components/Hero'
import Content from './components/Content'
import CardsGrid from './components/CardContent'
import Banner1 from './components/Banner1'
import Benefits from './components/Benefits'
import Data from './components/Data'

function App() {
  return (
    <div className='w-full min-h-screen py-[0.4vw] px-[1vw] bg-[#fcf8f1]'>
      <Hero/>
      <Content />
      <CardsGrid />
      <Banner1/>
      {/* <Benefits /> */}
      <Data />
    </div>
  )
}

export default App