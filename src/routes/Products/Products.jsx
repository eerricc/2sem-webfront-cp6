import './Products.css'

import teste from '../../assets/gatotriste.png'

const Products = () => {
    const cards = [
        {
            title: "Plushie 1",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
        {
            title: "Plushie 2",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
        {
            title: "Pillow 1",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
        {
            title: "Pillow 2",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
        {
            title: "Plushie 3",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
        {
            title: "Plushie 4",
            content: <img src={teste} alt="plushie1" />,
            price: "100$"
        },
    ];

    return (
        <section className="products-section">
            <h1 className="products-title">Nossos Produtos</h1>
            <div className="products-container">
                {cards.map((card, index) => (
                    <div key={index} className='products-card'>
                        <h2 className='products-card-title'>{card.title}</h2>
                        <div className='products-img'>{card.content}</div>
                        <p className='products-text'>{card.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
