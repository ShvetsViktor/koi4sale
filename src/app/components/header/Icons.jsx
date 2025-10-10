"use client";
import React, { useRef, useState } from "react";
import CartItem from "./CartItem";
import useHeaderState from "@/app/domain/useHeaderState";

export default function Icons() {
    const {
        isCartOpen,
        setIsCartOpen,
        cartTrigger,
        cartBox,
    } = useHeaderState();

    return (
        <div className="flex gap-4 md:gap-8">
            {/* === Basket Icon === */}
            <div className="relative z-20">
                <div className="max-w-[200px] justify-end">
                    <button
                        ref={cartTrigger}
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="hover:cursor-pointer relative flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                    >
                        <svg
                            viewBox="0 0 22 22"
                            className="w-5 h-5 fill-current"

                            // Change Size Here
                            // Change Size Here
                            // Change Size Here
                            // Change Size Here

                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z" />
                            <path d="M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z" />
                            <path d="M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z" />
                        </svg>

                        <span className="absolute -right-1 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[10px] font-semibold leading-[18px] text-white">
                            1
                        </span>
                    </button>
                </div>
                <div
                    ref={cartBox}
                    onFocus={() => setIsCartOpen(true)}
                    onBlur={() => setIsCartOpen(false)}
                    className={`absolute right-0 top-full mt-5 w-[330px] ${!isCartOpen && "hidden"
                        }`}
                >
                    <div className="overflow-hidden rounded-lg bg-white p-8 shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                        <div className="mb-5 border-b border-stroke pb-3 dark:border-dark-3">
                            <div className="-mx-1 flex items-center justify-between pb-4">
                                <CartItem
                                    link="/#"
                                    image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-02.jpg"
                                    title="Circular Sienna"
                                    desc="Awesome white shirt"
                                    price="36.00"
                                />
                            </div>
                            <div className="-mx-1 flex items-center justify-between py-4">
                                <CartItem
                                    link="/#"
                                    image="https://cdn.tailgrids.com/assets/images/ecommerce/checkout/checkout-02/image-03.jpg"
                                    title="Black T-shirt"
                                    desc="It's a nice black t-shirt"
                                    price="66.00"
                                />
                            </div>
                        </div>
                        <div className="-mx-1 border-b border-stroke pb-5 dark:border-dark-3">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="px-1">
                                    <p className="text-base text-dark dark:text-white">
                                        Subtotal
                                    </p>
                                </div>
                                <div className="px-1">
                                    <p className="text-base font-medium text-dark dark:text-white">
                                        $108
                                    </p>
                                </div>
                            </div>
                            <div className="mb-3 flex items-center justify-between">
                                <div className="px-1">
                                    <p className="text-base text-dark dark:text-white">
                                        Shipping Cost (+)
                                    </p>
                                </div>
                                <div className="px-1">
                                    <p className="text-base font-medium text-dark dark:text-white">
                                        $10.85
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="px-1">
                                    <p className="text-base text-dark dark:text-white">
                                        Discount (-)
                                    </p>
                                </div>
                                <div className="px-1">
                                    <p className="text-base font-medium text-dark dark:text-white">
                                        $9.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-1 flex items-center justify-between pb-6 pt-5">
                            <div className="px-1">
                                <p className="text-base text-dark dark:text-white">
                                    Total Payable
                                </p>
                            </div>
                            <div className="px-1">
                                <p className="text-base font-medium text-dark dark:text-white">
                                    $88.15
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                href="/#"
                                className="hover:cursor-pointer flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}