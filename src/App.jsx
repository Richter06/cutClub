import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import StyleSelector from './components/StyleSelector'
import Gallery from './components/Gallery'
import Crew from './components/Crew'
import Booking from './components/Booking'
import Spot from './components/Spot'
import Footer from './components/Footer'
import './components/Global.css'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <StyleSelector />
        <Gallery />
        <Crew />
        <Booking />
        <Spot />
      </main>
      <Footer />
    </>
  )
}