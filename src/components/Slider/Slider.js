import React, {useState} from 'react'
import '../../assets/css/styles.scss'
//import BtnSlider from  './BtnSlider'
import dataSlider from './dataSlider'
import logo from '../../assets/imagenes/top-logo.png'

export default function Slider() {

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
                <nav> 
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#product2">Product</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
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