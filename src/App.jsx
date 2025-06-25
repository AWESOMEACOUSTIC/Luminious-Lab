import React from 'react'
import Hero from './components/Hero'
import Content from './components/Content'
import CardsGrid from './components/CardContent'

function App() {
  return (
    <div className='w-full min-h-screen py-[0.4vw] px-[1vw] bg-[#fcf8f1]'>
      <Hero/>
      <Content />
      <CardsGrid />
    </div>
  )
}

export default App