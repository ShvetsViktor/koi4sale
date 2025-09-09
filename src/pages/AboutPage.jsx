import Hero from "/src/components/hero/Hero";
import Team from "/src/components/team/Team";

import heroImage from "/src/assets/img/hero-about.jpg";


const AboutPage = () => {
    return (
        <>
            <Team />
            <Hero
                title="Our Pond"
                description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                buttonText="Shop Koi"
                buttonLink="/PLP"
                img={heroImage} />
        </>
    )
}

export default AboutPage;