import Hero from "/src/components/hero/Hero.jsx";
import About1 from "/src/components/about1/About1";
import Contact from "/src/components/contact/Contact";
import Carousel from "/src/components/carousel/Carousel";

function HomePage() {
    return (
        <div className='homepage'>
            <Hero />
            <About1 />
            <Carousel />
            <Contact />
        </div>
    )
}

export default HomePage;
