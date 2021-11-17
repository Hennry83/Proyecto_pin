import React, {useState} from 'react'
import '../../assets/css/styles.scss'
//import BtnSlider from  './BtnSlider'
import dataSlider from './dataSlider'
import logo from '../../assets/imagenes/top-logo.png'
import {Link} from 'react-scroll'

export default function Slider() {

    const[navbar,setNavbar] = useState(false);

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const changeBackground = ()=>{
        if(window.scrollY >= 150){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />

                    </div>
                )
            })}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}
            
            <div className="div__nav">
                <img className="nav__img" src= {logo} alt="logo 25 watts" />
                <nav className= {navbar ? 'navbar active' : 'navbar'}> 
                    <ul>
                        <li><Link className="navegacion" to="header" smooth={true} duration={2000}>Home</Link></li>
                        <li><Link className="navegacion" to="about" smooth={true} duration={2000}>About</Link></li>
                        <li><Link className="navegacion" to="product2" smooth={true} duration={2000}>Product</Link></li>
                        <li><Link className="navegacion" to="services" smooth={true} duration={2000}>Services</Link></li>
                        <li><Link className="navegacion" to="contact" smooth={true} duration={2000}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className = "container_texto">
                <h1 className="h1__text">Sed ut perspiciatis <br />
                unde omnis iste natus
                </h1>

                <p className="p__text">
                    Sed ut perspiciatis unde omnis iste natus error <br />
                    sit voluptatem accusantium doloremque.
                </p>
            </div>
            <button className="boton_principal">Read more</button>


            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}