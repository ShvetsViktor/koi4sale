"use client"

import { useState } from "react";
import AccordionItem from "../components/ui/AccordionItem";


export default function Privacy() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const sections = [
        {
            title: "Overview",
            content: `At Koi4Sale, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you interact with our website or services.`
        },
        {
            title: "Who we are",
            content: `Controller: Koi4Sale (UK)\nContact email: privacy@yourdomain.com\nBusiness address: [Insert business address here]`
        },
        {
            title: "What we collect",
            content: [
                "Contact details: name, email, phone, billing/shipping address.",
                "Order information: purchased items, payment confirmation, delivery details.",
                "Account information: username, password, saved preferences, loyalty points.",
                "Customer support: messages you send us via forms, email, or phone.",
                "Technical data: IP address, device/browser info, and log data for security and performance."
            ]
        },
        {
            title: "How we use your information",
            content: [
                "Process and deliver your orders, returns, and exchanges.",
                "Respond to enquiries and provide customer support.",
                "Maintain your account and order history.",
                "Send service updates and, where consent is given, promotional communications.",
                "Protect our website and services from fraud and abuse.",
                "Comply with legal and tax obligations."
            ]
        },
        {
            title: "Lawful bases",
            content: [
                "Contract — to fulfil your purchase and deliver services.",
                "Consent — for marketing emails and optional cookies.",
                "Legitimate interests — to secure our systems, prevent fraud, and respond to enquiries.",
                "Legal obligation — to retain transaction records where required by law."
            ]
        },
        {
            title: "Sharing",
            content: [
                "Payment processors (to handle transactions securely).",
                "Shipping and logistics providers (to deliver orders).",
                "Email and cloud hosting providers.",
                "Analytics or advertising partners (only where consent is given)."
            ]
        },
        {
            title: "Cookies and analytics",
            content: `We use cookies and similar technologies to enable site functionality (e.g., shopping cart), improve performance, and, where consented, for analytics or marketing.\n\nMost browsers accept cookies automatically, but you can manage or disable them in your browser settings. Blocking cookies may affect some features of the site.`
        },
        {
            title: "Storage and security",
            content: `Personal data is stored in secure systems with restricted access. We implement technical and organisational measures such as encryption, access controls, and logging.`
        },
        {
            title: "Retention",
            content: `We keep order and enquiry records as long as necessary to provide services and comply with legal obligations (e.g., tax rules). Other personal data is deleted or anonymised when no longer needed.`
        },
        {
            title: "Your rights (UK/EU GDPR)",
            content: [
                "Access a copy of your personal data.",
                "Request correction or deletion.",
                "Restrict or object to processing.",
                "Request data portability (where applicable).",
                "Withdraw consent for marketing at any time (without affecting past lawful processing).",
                "To exercise your rights, contact us at privacy@yourdomain.com."
            ]
        },
        {
            title: "User-generated content",
            content: `If you post reviews or other content on our site, it may be visible publicly. Please do not share information you wish to keep private.`
        },
        {
            title: "Children’s privacy",
            content: `Our services are not directed to children under 13, and we do not knowingly collect personal data from them. If you believe a child has provided us with their information, please contact us.`
        },
        {
            title: "International transfers",
            content: `If we transfer data outside the UK/EEA, we use recognised safeguards such as Standard Contractual Clauses or equivalent mechanisms.`
        },
        {
            title: "Complaints",
            content: `If you are unhappy with how we handle your data, you can complain to the UK Information Commissioner’s Office (ICO) at https://ico.org.uk. We would appreciate the opportunity to resolve concerns first.`
        },
        {
            title: "Updates",
            content: `We may update this Policy from time to time. Significant changes will be posted on this page with a new “Last updated” date.`
        }
    ];

    return (
        <section className="relative z-10 bg-white py-16 dark:bg-dark lg:py-20">
            <div className="container max-w-4xl px-4">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Last updated: 10 September 2025
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