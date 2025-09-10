import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Timeline from "../components/timeline/Timeline";
import Hero from "../components/hero/Hero";

import heroImageDelivery from "../assets/img/hero-delivery.jpg";


const Delivery = () => {


    const location = useLocation();
    const navigate = useNavigate();

    // Авто-скролл при загрузке/смене хэша
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [location]);

    // Хендлер для кнопки в Hero
    const goToTimeline = (e) => {
        e.preventDefault();
        if (location.pathname === "/delivery") {
            document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            navigate("/delivery#timeline");
        }
    };
    return (
        <>
            <div className="container">
                <Hero
                    title="Safe & Reliable Delivery — Live Arrival Guaranteed"
                    description="We ship koi across the UK with the utmost care. Each fish is prepared, fasted, and packed in oxygenated bags inside insulated boxes. Express courier service ensures fast arrival, backed by our 24-hour Live Arrival Guarantee."
                    buttonText="View Delivery Steps"
                    buttonLink="/delivery#timeline"
                    img={heroImageDelivery}
                />
                <Timeline />
            </div>
        </>
    )
}

export default Delivery;