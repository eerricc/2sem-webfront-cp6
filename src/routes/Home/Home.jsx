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
            <h1 className="home-title">Fórmula E - Ecologia Moderna</h1>
            <Carousel slides={slides} />

            <div className='home-container'>
                <p className='home-text'>
                    textao
                </p>
                <img src={teste} alt="" className='home-img'/>
            </div>
            <div className='home-container'>
                <img src={teste} alt="" className='home-img'/>
                <p className='home-text'>
                    textao
                </p>
            </div>
        </section>
    );
};

export default Home;
