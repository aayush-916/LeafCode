import './App.css'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Project from './components/project'
import Services from './components/Services'
import Tools from './components/Tools'
import Whatsapp from './components/Whatsapp'

function App() {
//https://cybertizeweb.com/
  return (
    <>
      <Nav/>
      <Whatsapp/>
      <Home/>
      <Services/>
      <Tools/>
      <Project/>
      <Client/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
