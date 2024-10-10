import './Nav.css'

//import from react-router-dom
import {Link} from 'react-router-dom'

//hook
import { useState } from 'react'


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
                    <li className='nav-list'><Link className='nav-link' to='/about'>About</Link></li>
                    <li className='nav-list'><Link className='nav-link' to='/login'>Login</Link></li>
                    <li className='nav-list'><Link className='nav-link' to='/products'>Products</Link></li>
                </ul>
                          
        </section>
    )
}
export default Nav