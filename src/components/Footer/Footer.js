import React from 'react'
import '../../assets/css/styles.scss'
import logo_f from '../../assets/imagenes/footer-logo.png'

export default function Footer() {

    return (

    <footer id="footer">
        <p>2020 © All rights reserved.</p>
        <div>
          <img className="footer_image" src={logo_f} alt="logo footer"/>
        </div>
    </footer>
    )
}