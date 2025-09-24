"use client"

import { useEffect } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

import Timeline from "../components/timeline/Timeline";
import Hero from "../components/hero/Hero";

import heroImageDelivery from "../../../public/img/hero/hero-delivery.jpg";

const Delivery: React.FC = () => {

    const pathname = usePathname()
    const router = useRouter()

    // Авто-скролл при загрузке/смене хэша
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [pathname]);

    // Хендлер для кнопки в Hero
    const goToTimeline = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        if (pathname === "/delivery") {
            document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            router.push("/delivery#timeline");
        }
    };
    return (
        <>
            <div className="w-full bg-white dark:bg-dark">
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