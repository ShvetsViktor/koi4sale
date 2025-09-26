import Hero from "./components/hero/Hero";
import About1 from "./components/about1/About1";
import Contact from "./components/contact/Contact";
import Carousel from "./components/carousel/Carousel";

import heroImage from "../../public/img/hero/hero-home.jpg";

function HomePage() {
  return (
    <div className='homepage'>
      <Hero
        title="Vibrant, Healthy Koi — Raised with Care at Home"
        description="Discover healthy, vibrant koi fish raised with care in our own backyard pond. Perfect for ponds and water gardens, our home-bred koi are well-acclimated, easy to care for, and ready to bring beauty and tranquility to your space."
        buttonText="Shop Koi"
        buttonLink="/PLP"
        img={heroImage}
        isShipping={true}
      />
      <About1 />
      <Carousel />
      <Contact />
    </div>
  )
}

export default HomePage;
