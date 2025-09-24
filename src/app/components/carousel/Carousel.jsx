"use client"

import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";   // ✅ импорт
import Image from "next/image";


import "swiper/css";
import "swiper/css/autoplay";

import products from "../../../../public/data/products";

export default function Carousel() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className="bg-gray-2 dark:bg-dark">
            <div className="container mx-auto overflow-hidden pt-20 pb-20 lg:pt-[120px] lg:pb-[90px]">
                <Swiper
                    modules={[Autoplay]} // ✅ подключаем модуль
                    autoplay={{
                        delay: 3000, // 3 секунды
                        disableOnInteraction: false, // не отключать при ручном скролле
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 2.2 },
                        1280: { slidesPerView: 4 },
                    }}
                    loop={true}
                    spaceBetween={30}
                    ref={sliderRef}
                    className="!overflow-visible"
                >
                    {products.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className="rounded-[5px] border-[.5px] border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-[10px] shadow-1 dark:shadow-box-dark">
                                <div className="h-64 w-full overflow-hidden rounded-[5px]">
                                    <Image
                                        src={p.images[0].src}
                                        alt={p.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="pt-5 pb-6 text-center">
                                    <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">
                                        {p.name}
                                    </h3>
                                    <p className="mb-5 text-lg font-medium text-dark dark:text-white">
                                        {p.price}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="z-50 -bottom-[65px] absolute left-0 right-0 flex items-center justify-center space-x-3">
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 shadow-product hover:bg-primary hover:text-white"
                            onClick={handlePrev}
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 shadow-product hover:bg-primary hover:text-white"
                            onClick={handleNext}
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}