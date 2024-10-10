import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Carousel.css';
import { useState } from "react";

const Carousel = (props) => {
    
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
    };

    return (
        <section className="carousel-section">
            <FaArrowLeft className="carousel-arrow arrow-left" onClick={prevSlide} />
            {props.slides.map((item, index) => (
                <img 
                    src={item.src} 
                    alt={item.alt} 
                    key={index} 
                    className={slide === index ? "carousel-img" : "carousel-img carousel-img-hidden"} 
                />
            ))}
            <FaArrowRight className="carousel-arrow arrow-right" onClick={nextSlide} />
            <span className="carousel-span">
                {props.slides.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setSlide(index)} 
                        className={slide === index ? "carousel-btn" : "carousel-btn carousel-btn-inactive"}
                    />
                ))}
            </span>
        </section>
    );
};

export default Carousel;
