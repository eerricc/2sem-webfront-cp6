import './Home.css';
import Carousel from '../../components/Carousel/Carousel';

import teste from '../../assets/gatotriste.png'


const Home = () => {
    const slides = [
        { src: teste, alt: 'img1' },
        { src: teste, alt: 'img2' },
        { src: teste, alt: 'img3' }
    ];

    return (
        <section className="home-section">
            <h1 className="home-title">fluf - plushies & pillows</h1>
            <Carousel slides={slides} />

            <div className='home-container'>
                <p className='home-text'>
                Explore nossa coleção única de plushies, perfeitos para adicionar charme e aconchego ao seu dia a dia! 
                Cada pelúcia é feita com materiais de alta qualidade, garantindo uma textura macia e um toque suave, 
                que convida ao abraço. Com designs variados, desde personagens fofos até criaturas únicas, 
                nossos plushies são companheiros ideais para crianças e adultos. Seja para decorar um ambiente ou presentear alguém especial, 
                eles trazem alegria e conforto em cada detalhe
                </p>
                <img src={teste} alt="" className='home-img'/>
            </div>
            <div className='home-container'>
                <img src={teste} alt="" className='home-img'/>
                <p className='home-text'>
                Nossas almofadas combinam estilo e funcionalidade em um só produto! Feitas com enchimento de alta densidade e capas super macias, 
                elas oferecem o suporte ideal para momentos de descanso. Disponíveis em uma variedade de cores, padrões e formatos, 
                nossas pillows são projetadas para complementar qualquer espaço, desde o quarto até a sala de estar. 
                Transforme seu ambiente com peças que aliam conforto e design, trazendo não só beleza, mas também um toque de aconchego para o seu lar
                </p>
            </div>
        </section>
    );
};

export default Home;
