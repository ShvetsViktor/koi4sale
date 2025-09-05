import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import koi1 from "/src/assets/img/koi1.jpg";
import koi2 from "/src/assets/img/koi2.jpg";
import koi3 from "/src/assets/img/koi3.jpg";
import koi4 from "/src/assets/img/koi4.jpg";

const products = [
    {
        img: koi1,
        name: "Koi Kohaku",
        price: "£40",
    },
    {
        img: koi2,
        name: "Koi Showa",
        price: "£55",
    },
    {
        img: koi3,
        name: "Koi Sanke",
        price: "£50",
    },
    {
        img: koi4,
        name: "Koi Ogon",
        price: "£70",
    },
];

export default function Carousel() {
    const [sliderRef] = useKeenSlider({
        slides: { perView: 3, spacing: 24 },
        loop: true,
    });

    return (
        <div ref={sliderRef} className="keen-slider py-8">
            {products.map((product, idx) => (
                <div
                    key={idx}
                    className="keen-slider__slide flex flex-col items-center bg-white rounded-2xl shadow p-4"
                >
                    <img
                        src={product.img}
                        alt={product.name}
                        className="h-40 w-40 object-cover rounded-xl mb-3"
                    />
                    <div className="font-semibold text-lg mb-1">{product.name}</div>
                    <div className="text-primary text-base font-bold">{product.price}</div>
                </div>
            ))}
        </div>
    );
}