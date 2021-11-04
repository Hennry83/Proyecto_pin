import react from "react"
import '../../assets/css/styles.scss'
import flecha1 from '../../assets/imagenes/Icon feather-arrow-right-circle.png'
import flecha2 from '../../assets/imagenes/Icon feather-arrow-left-circle.png'

export default function Products() {

    return (
    <div id="product">
        <div className="product__bgsecondary">
        </div>
        <div className="product__imgcasa">
            <div className="product__contenido">
            <p className="product__p1">Sed ut perspiciatis</p>
            <h1>Nemo Enim</h1>
            <p className="product__p2">Sed ut perspiciatis unde omnis iste natus error sit <br/> voluptatem
                accusantium doloremque
                laudantium, <br/> totam rem aperiam.</p>
            <div id="flechas">
                <img className="flecha_r" src= {flecha1}/>
                <img src= {flecha2}/>
            </div>
            </div>
        </div>
    </div>

    )
}