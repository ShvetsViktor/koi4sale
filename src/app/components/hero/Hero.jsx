import Link from "next/link";
import Image from "next/image";

import deliveryIcon from "../../../../public/icons/delivery-icon.svg";


const Hero = ({ title, description, buttonText, buttonLink, img, isShipping }) => {
    return (
        <>
            <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    {title}
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                    {description}
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <Link
                                            href={buttonLink}
                                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium !text-white hover:bg-orange-700 lg:px-7"
                                        >
                                            {buttonText}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/delivery"
                                            className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                                        >
                                            {isShipping && (
                                                <>
                                                    <span className="mr-2">
                                                        <Image src={deliveryIcon}
                                                            width={24}
                                                            height={24}
                                                            alt="delivery-icon" />
                                                    </span>
                                                    Shipping Info
                                                </>
                                            )}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="pt-11 lg:ml-auto lg:text-right">
                                <div className="relative w-full aspect-[16/9] z-10 inline-block lg:pt-0">
                                    <Image
                                        src={img}
                                        alt="hero-image"
                                        fill
                                        priority
                                        className="object-cover lg:ml-auto"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="currentColor"
                                                className="text-primary" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
