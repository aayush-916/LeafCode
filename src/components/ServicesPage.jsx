import React from 'react'
import { useEffect } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'
import Services from './Services'
import './Services.css'
import Whatsapp from './Whatsapp'
function ServicesPage() {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
        <Nav/>
        <Whatsapp/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default ServicesPage