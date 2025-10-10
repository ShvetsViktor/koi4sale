"use client"

import { useState } from "react";

import faqData from "@/data/faq.json";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full dark:bg-dark py-4">
            <div className="container">
                <div className="mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Frequently Asked Questions
                    </h1>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl shadow-sm"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="cursor-pointer hover:text-primary w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg"
                                >
                                    {item.q}
                                    <span>{openIndex === index ? "−" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 pb-4 dark:text-white text-gray-700">{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}