import "/src/components/heroBanner/heroBanner.css";

const HeroBanner = () => {
    return (
        <section className="hero_banner">
            <div className="wrapper__hero_banner">
                <h1>Bell's<br />koi<br />farm</h1>
                <h4>Subline descriptive text</h4>
                <div className="hero_banner__buttons">
                    <a href="#" className="transparent-btn"><span>about us</span></a>
                    <a href="#" className="orange-btn"><span>shop now</span></a>
                </div>
            </div>
            <a href="#" className="hero_banner__play-icon">
                <img src="/src/assets/icons/play-icon.svg" alt="play-icon" />
            </a>
        </section>
    )
}

export default HeroBanner;