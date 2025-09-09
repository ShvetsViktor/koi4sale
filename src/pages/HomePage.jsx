import Hero from "/src/components/hero/Hero.jsx";
import About1 from "/src/components/about1/About1";
import Contact from "/src/components/contact/Contact";
import Carousel from "/src/components/carousel/Carousel";

import heroImage from "../assets/img/hero-home.jpg";

function HomePage() {
    return (
        <div className='homepage'>
            <Hero
                title="Vibrant, Healthy Koi — Raised with Care at Home"
                description="Discover healthy, vibrant koi fish raised with care in our own backyard pond. Perfect for ponds and water gardens, our home-bred koi are well-acclimated, easy to care for, and ready to bring beauty and tranquility to your space."
                buttonText="Shop Koi"
                buttonLink="/PLP"
                img={heroImage}
            />
            <About1 />
            <Carousel />
            <Contact />
        </div>
    )
}

export default HomePage;
