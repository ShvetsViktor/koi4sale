"use client";
import React from "react";

export default function Search({ className = "" }) {
    return (
        <div
            className={`w-full mt-3 md:mt-0 md:w-1/3 lg:w-1/2 md:px-6 ${className}`}
        >
            <form className="relative flex w-full h-12 items-center rounded-md border border-stroke bg-gray-2 dark:border-dark-3 dark:bg-dark-2">
                <input
                    type="text"
                    placeholder="Search for keyword, brand or product"
                    className="w-full bg-transparent py-1 pl-5 pr-[58px] text-base text-body-color outline-none dark:text-dark-6"
                />
                <button className="hover:cursor-pointer absolute right-0 top-0 flex h-full w-[42px] items-center justify-center rounded-br-md rounded-tr-md border border-primary bg-primary text-white">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                    >
                        <path
                            d="M19.707 18.293l-5.388-5.388A7.935 7.935 0 0016 8a8 8 0 10-8 8 7.935 7.935 0 004.905-1.681l5.388 5.388a1 1 0 001.414-1.414zM8 14a6 6 0 116-6 6.006 6.006 0 01-6 6z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
}