import './Nav.css'

//import from react-router-dom
import {Link} from 'react-router-dom'

//hook
import { useState } from 'react'

import Logo from '../../assets/logo1.png'

const Nav =()=>{
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    return(
        <section className='nav-section'>
                <Link to='/' className='nav-title'>fluf</Link>
                
                <div className='nav-menu' onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>
                    <span className='nav-span'></span>  
                </div>
                <ul className={`${menuOpen ? "open" : ""} nav-ul`}>
                    <li className='nav-list'><Link className='nav-link' to='/sobre'>Sobre</Link></li>
                    <li className='nav-list'><Link className='nav-link' to='/login'>Login</Link></li>
                </ul>
                          
        </section>
    )
}
export default Nav