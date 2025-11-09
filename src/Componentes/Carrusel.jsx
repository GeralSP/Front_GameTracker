import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../img/banner_1.jpg'
import img2 from '../img/banner_6.jpg'
import img3 from '../img/banner_5.jpg'
import img4 from '../img/banner_4.jpg'
import '../Componentes/css/Carrusel.css'

const Carrusel = () => {

    const imagenes = [
        img1, img2, img3, img4
    ]

    //Configuracion del carrusel
    var settings = {
        dots: true,              // Muestra los puntitos de navegación debajo del carrusel
        infinite: true,          // Permite que el carrusel vuelva al inicio al llegar al último slide (bucle infinito)
        speed: 800,            // Duración de la animación de transición entre slides (en milisegundos)
        autoplay: true,          // Activa el desplazamiento automático de los slides
        autoplaySpeed: 3000,        // Tiempo que el carrusel espera antes de pasar al siguiente slide (en milisegundos)
        pauseOnHover: false,      // Pausa el autoplay cuando el usuario pasa el mouse sobre el carrusel
        swipeToSlide: true,     // Si es true, permite arrastrar (swipe) libremente al siguiente slide con el dedo o mouse
        arrows: true,            // Muestra las flechas izquierda/derecha para navegar manualmente
        slidesToShow: 1,         // Cantidad de slides visibles al mismo tiempo
        slidesToScroll: 1        // Cantidad de slides que avanza cada vez
    };
    return(
        <div className="contenedor_carrusel">
            <Slider {...settings} className="carrusel_inicio">
                {imagenes.map((i) => (
                    <div className="caja_imagen_carrusel">
                        <img src={i} alt="" />                 
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carrusel