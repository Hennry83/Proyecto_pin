import React, {useState} from 'react'
import '../../assets/css/styles.scss'
import BtnSlider from  './BtnSlider2'
import dataSlider from './dataSlider2'

export default function Products2() {

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
    <div id="product2">
        <div className="product__bgsecondary2">
        </div>
        <div className="product__imgcasa2">
            <div className="product__contenido2">
                <div className="container-slider2">
                        {dataSlider.map((obj, index) => {
                            return (
                                <div
                                key={obj.id}
                                className={slideIndex === index + 1 ? "slide2 active-anim2" : "slide2"}
                                >
                                    <img 
                                    src={process.env.PUBLIC_URL + `/Imgs2/img${index + 1}.jpg`} 
                                    />

                                </div>
                            )
                        })}
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                </div> 
            </div>
        </div>
    </div>
    )
}