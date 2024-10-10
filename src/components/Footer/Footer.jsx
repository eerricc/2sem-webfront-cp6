import './Footer.css'

//import from react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

import {Link} from 'react-router-dom'

const Footer =()=>{
    return (
        <section className="footer-section">
            <hr className='footer-bar'/>
            <div className="footer-container">
                <div className="footer-container-btn">
                    <div className="footer-icon"><FaFacebookF /></div>
                    <span className='footer-span'>Facebook</span>
                </div>
                <div className="footer-container-btn">
                    <div className="footer-icon"><FaLinkedinIn /></div>
                    <span className='footer-span'>Linkedin</span>
                </div>
                <div className="footer-container-btn">
                    <div className="footer-icon"><FaInstagram /></div>
                    <span className='footer-span'>Instagram</span>
                </div>
                <div className="footer-container-btn">
                    <div className="footer-icon"><ImGithub /></div>
                    <span className='footer-span'>Github</span>
                </div>
                <div className="footer-container-btn">
                    <div className="footer-icon"><FaYoutube /></div>
                    <span className='footer-span'>Youtube</span>
                </div>
            </div>
            <div className="footer-copyright">
                <Link to='/contact' className='footer-link'>contact us</Link>
                <h4>Copyright &copy; fluf</h4>
            </div>
        </section>
    )
}
export default Footer