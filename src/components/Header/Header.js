import React from 'react'
import '../../assets/css/styles.scss'
import logo from '../../assets/imagenes/top-logo.png'

export default function Header() {

    return (
       <header>
            <section id="header">
                <div className="header__div">
                    <img className="header__img" src= {logo} alt="logo 25 watts" />
                    <nav> 
                        <ul>
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#product">Product</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <h1 className="header__textprimary">Sed ut perspiciatis <br />
                    unde omnis iste natus
                </h1>

                <p className="header__textsecondary">
                    Sed ut perspiciatis unde omnis iste natus error <br />
                    sit voluptatem accusantium doloremque.
                </p>

                <button className="header__buton">Read more</button>
                <div className="circulo"></div>
            </section>
        </header>
    )
}