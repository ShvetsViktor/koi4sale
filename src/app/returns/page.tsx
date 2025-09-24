"use client"

import { useState } from "react";
import AccordionItem from "../components/ui/AccordionItem";

export default function Returns() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const sections = [
        {
            title: "Right to Cancel / Return Period",
            content: `You have the right to cancel or return non-personalised goods within 14 days of receipt. If 28 days is your chosen policy, update accordingly.`
        },
        {
            title: "Condition of Goods for Return",
            content: [
                "Goods must be unused, undamaged and in original packaging.",
                "All tags, labels and paperwork must be intact.",
                "Goods should be in resellable condition."
            ]
        },
        {
            title: "Live Koi Policy",
            content: `Live koi cannot be returned unless they arrive dead or visibly unhealthy. You must notify us immediately upon receipt with photo/video evidence for a claim.`
        },
        {
            title: "Faulty or Damaged Goods",
            content: `If an item is faulty or damaged upon delivery, contact us within [X] days. Provide photos of the packaging and product. We will offer replacement or refund depending on severity.`
        },
        {
            title: "Returns Process",
            content: `Contact us via email with your order number and reason for return. Get authorization before returning. Use secure recorded delivery. Include proof of postage.`
        },
        {
            title: "Return Costs",
            content: `Return shipping is at your cost unless the item is faulty or wrong. We do not refund original shipping if the item was delivered correctly.`
        },
        {
            title: "Refunds / Exchanges",
            content: `Once returned goods are inspected and approved, refunds or exchanges will be processed within 7-14 days. Refunds will go via the original payment method, unless otherwise agreed.`
        },
        {
            title: "Exclusions",
            content: [
                "Goods made to order or personalised cannot be returned unless faulty.",
                "Live koi except in cases of dead on arrival cannot be returned.",
                "Perishable goods, plants or similar may have limited return eligibility."
            ]
        },
        {
            title: "Return Address & Contact",
            content: `Return Address: [Your Address Here]\nContact Email: support@koi4sale.co.uk\nInclude order number in all correspondence and on return packaging.`
        }
    ];

    return (
        <section className="relative z-10 bg-white py-16 dark:bg-dark lg:py-20">
            <div className="container max-w-4xl px-4">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                        Returns & Delivery Policy
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Last updated: [enter date]
                    </p>
                </div>
                <div className="divide-y divide-neutral-300 dark:divide-neutral-700">
                    {sections.map((section, idx) => (
                        <AccordionItem
                            key={idx}
                            title={section.title}
                            content={section.content}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}