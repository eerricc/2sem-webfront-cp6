import './App.css'

//imports from components
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'

//import from react-router-dom
import {Outlet} from 'react-router-dom'

function App() {
  
  return (
    <section className='app-section'>
      <Nav/>
      <Outlet/>
      <Footer/>
    </section>
  )
}

export default App
