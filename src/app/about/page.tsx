import React from "react";
import Hero from "../components/hero/Hero";
import Team from "../components/team/Team";


const AboutPage: React.FC = () => {
    return (
        <>
            <Team />
            <Hero
                title="Our Pond"
                description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                buttonText="Shop Koi"
                buttonLink="/PLP"
                img="/img/hero/hero-about.jpg"
                isShipping={true}
            />
        </>
    );
};

export default AboutPage;