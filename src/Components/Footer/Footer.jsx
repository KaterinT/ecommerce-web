import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatssapp_icon from '../Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" srcset="" />
            <p>SHOOPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" srcset="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" srcset="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatssapp_icon} alt="" srcset="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @katerintll 2023 All Rights Reserved</p>
        </div>
    </div>
  )
}
