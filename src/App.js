import React from 'react'
import Nav from "./components/nav"
import Hero from "./components/hero"
import Program from "./components/program"
import Title from "./components/title"
import Aboutus from "./components/aboutus"
import Campus from './components/campus'
import Testimonial from './components/Testimonial'
import Contactus from './components/Contactus'
import "./App.css"
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Title name={"Our Program"} subtitle={"What We Offer"} />
      <Program />
      <Aboutus />
      <Title name={"Campus"} subtitle={"Campus Photos"} />
      <Campus />
      <Title name={"Testimonial"} subtitle={"What Students Says"} />
      <Testimonial />
      
      <Title name={"Contact us"} subtitle={"Get in Touch"} />
      <div className='container'>
      <Contactus/>
      </div>
     <Footer/>
    </div>
  )
}

export default App