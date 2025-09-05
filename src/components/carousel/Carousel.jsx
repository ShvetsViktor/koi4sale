import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import koi1 from "/src/assets/img/koi1.jpg";
import koi2 from "/src/assets/img/koi2.jpg";
import koi3 from "/src/assets/img/koi3.jpg";
import koi4 from "/src/assets/img/koi4.jpg";
import koi5 from "/src/assets/img/koi5.jpg";
import koi6 from "/src/assets/img/koi6.jpg";

const products = [
    { img: koi1, name: "Koi Kohaku", price: "£40" },
    { img: koi2, name: "Koi Showa", price: "£55" },
    { img: koi3, name: "Koi Sanke", price: "£50" },
    { img: koi4, name: "Koi Ogon", price: "£80" },
    { img: koi5, name: "Koi Goshu", price: "£90" },
    { img: koi6, name: "Koi Hagi", price: "£170" },
];

export default function ProductCarousel() {
    return (
        <div className="max-w-5xl w-full mx-auto pb-10 relative style={{ paddingBottom: '56px' }}">
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    450: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                className="my-8 pb-200"
            >
                {products.map((product, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="flex flex-col items-center justify-items-center bg-white rounded-2xl shadow p-4 w-full"
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-40 w-40 object-cover rounded-xl mb-3"
                        />
                        <div className="font-semibold text-lg mb-1">{product.name}</div>
                        <div className="text-primary text-base font-bold">{product.price}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}