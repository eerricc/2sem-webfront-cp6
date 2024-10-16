import './About.css'

const About =()=>{
    
    const cards = [
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
        {
            title: "title1",
            content: "text1",
            comparisonTitle: "title2",
            comparisonText: "text2"
        },
    ];
    
    return(
        <section className="about-section">
            <h1 className="about-title">About</h1>
            <div className="about-container">
                {cards.map((card, index) => (
                    <div className='about-card-container' key={index}>
                        <div className='about-card-card'>
                            <div className='about-card-front'>
                                <h2 className='about-card-front-title'>{card.title}</h2> <br />
                                <p className='about-card-front-text'>{card.content}</p>
                            </div>
                            <div className='about-card-back'>
                                <h2 className='about-card-back-title'>{card.comparisonTitle}</h2> <br />
                                <p className='about-card-back-text'>{card.comparisonText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default About