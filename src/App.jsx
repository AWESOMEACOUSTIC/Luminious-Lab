import Hero from './components/Hero'
import Content from './components/Content'
import CardsGrid from './components/CardContent'
import Banner1 from './components/Banner1'
import Data from './components/Data'
import Footer from './components/Footer'
import SectionWithFaq from './components/FaqSection'
import CarasouelSection from './components/CarasouelSection'
import Banner2 from './components/Banner2'

function App() {
  return (
    <div className='w-full min-h-screen py-[3vw] px-[1.5vw] overflow-hidden  md:w-full md:min-h-screen md:py-[0.4vw] md:px-[1.4vw] bg-[#fcf8f1]'>
      <Hero/>
      <Content />
      <CardsGrid />
      <Banner1/>
      <Data />
      <CarasouelSection />
      <Banner2/>
      <SectionWithFaq />
      <Footer/>
    </div>
  )
}

export default App