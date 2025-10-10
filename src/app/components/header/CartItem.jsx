"use client";
import React from "react";

export default function CartItem({ image, link, title, desc, price }) {
    return (
        <>
            <div className="flex items-center px-1">
                <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                    <img src={image} alt="product image" className="w-full" />
                </div>
                <div>
                    <a
                        href={link}
                        className="text-sm font-medium text-dark hover:text-primary dark:text-white"
                    >
                        {title}
                    </a>
                    <p className="truncate text-xs font-medium text-body-color dark:text-dark-6">
                        {desc}
                    </p>
                </div>
            </div>
            <div className="px-1">
                <p className="text-base font-semibold text-dark dark:text-white">
                    ${price}
                </p>
            </div>
        </>
    );
}