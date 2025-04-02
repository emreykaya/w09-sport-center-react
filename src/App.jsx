import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'
import Classes from './components/Classes/Classes'
import Calculator from './components/Calculator/Calculator'
import Trainers from './components/Trainers/Trainers'
import Purchase from './components/Purchase/Purchase'
import Comments from './components/Comments/Comments'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Classes />
      <Calculator />
      <Trainers />
      <Purchase />
      <Comments />
      <Contact />
      <Footer />
    </>
  )
}

export default App
