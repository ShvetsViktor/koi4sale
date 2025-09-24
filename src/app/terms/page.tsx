"use client"

import { useState } from "react";
import AccordionItem from "../components/ui/AccordionItem";



export default function TermsOfService() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const sections = [
        {
            title: "Overview",
            content: `This website is operated by koi4sale. Throughout the site, the terms “we”, “us” and “our” refer to koi4sale. koi4sale offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.

By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree, you may not access the website or use any Services.

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms at any time on this page.`
        },
        {
            title: "Section 1 – Online Store Terms",
            content: [
                "You represent that you are at least the age of majority in your country.",
                "You may not use our products for any illegal or unauthorized purpose.",
                "You must not transmit any worms or viruses or destructive code.",
                "A breach of these Terms will result in immediate termination of your Services."
            ]
        },
        {
            title: "Section 2 – General Conditions",
            content: [
                "We reserve the right to refuse service to anyone for any reason at any time.",
                "Your content (not including credit card info) may be transferred unencrypted across networks.",
                "You agree not to reproduce, duplicate, copy, sell, resell or exploit any part of the Service without written permission."
            ]
        },
        {
            title: "Section 3 – Accuracy, Completeness and Timeliness of Information",
            content: `We are not responsible if information on this site is not accurate, complete or current. The material is provided for general information only.`
        },
        {
            title: "Section 4 – Modifications to the Service and Prices",
            content: [
                "Prices for our products are subject to change without notice.",
                "We reserve the right to modify or discontinue the Service without notice.",
                "We shall not be liable for any modification, price change, suspension, or discontinuance."
            ]
        },
        {
            title: "Section 5 – Products or Services",
            content: [
                "Certain products may be available exclusively online.",
                "Products may have limited quantities and are subject to return/exchange only under our Refund Policy.",
                "We cannot guarantee your device’s display of colors will be accurate.",
                "We reserve the right to limit sales to any person, region, or jurisdiction.",
                "We may discontinue any product at any time."
            ]
        },
        {
            title: "Section 6 – Accuracy of Billing and Account Information",
            content: [
                "We reserve the right to refuse any order you place with us.",
                "We may limit or cancel quantities purchased per person or per household.",
                "You agree to provide current, complete, and accurate purchase and account information.",
                "You agree to promptly update account info to complete transactions."
            ]
        },
        {
            title: "Section 7 – Optional Tools",
            content: `We may provide access to third-party tools “as is” and “as available” without warranties. We shall have no liability for your use of optional tools.`
        },
        {
            title: "Section 8 – Third-Party Links",
            content: `Certain content, products, and services may include materials from third parties. We are not responsible for examining or evaluating their accuracy.`
        },
        {
            title: "Section 9 – User Comments, Feedback and Other Submissions",
            content: [
                "If you send us suggestions or ideas, we may use them without restriction.",
                "We may, but are not obligated to, monitor or remove unlawful, offensive or otherwise objectionable content."
            ]
        },
        {
            title: "Section 10 – Personal Information",
            content: `Your submission of personal information is governed by our Privacy Policy.`
        },
        {
            title: "Section 11 – Errors, Inaccuracies and Omissions",
            content: `Occasionally there may be information on our site that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct them without prior notice.`
        },
        {
            title: "Section 12 – Prohibited Uses",
            content: [
                "For any unlawful purpose.",
                "To solicit others to perform unlawful acts.",
                "To violate any laws.",
                "To infringe intellectual property rights.",
                "To harass, abuse, insult, or discriminate.",
                "To submit false information.",
                "To upload viruses or malicious code.",
                "To spam, phish, pharm, pretext, spider, crawl, or scrape.",
                "For obscene or immoral purposes.",
                "To interfere with the security features of the Service."
            ]
        },
        {
            title: "Section 13 – Disclaimer of Warranties; Limitation of Liability",
            content: `We do not guarantee that your use of our Service will be uninterrupted, timely, secure, or error-free. You expressly agree that your use is at your sole risk.`
        },
        {
            title: "Section 14 – Indemnification",
            content: `You agree to indemnify and hold harmless koi4sale, its partners and employees from any claim arising from your breach of these Terms.`
        },
        {
            title: "Section 15 – Severability",
            content: `If any provision of these Terms is deemed unlawful, void, or unenforceable, it shall not affect the validity of the remaining provisions.`
        },
        {
            title: "Section 16 – Termination",
            content: `These Terms are effective unless and until terminated by either you or us.`
        },
        {
            title: "Section 17 – Entire Agreement",
            content: `These Terms, along with any policies posted on the site, constitute the entire agreement between you and us.`
        },
        {
            title: "Section 18 – Governing Law",
            content: `These Terms shall be governed by and construed in accordance with the laws of United Kingdom.`
        },
        {
            title: "Section 19 – Changes to Terms of Service",
            content: `We reserve the right to update, change, or replace any part of these Terms. Continued use of our site constitutes acceptance of changes.`
        },
        {
            title: "Section 20 – Contact Information",
            content: `Questions about the Terms of Service should be sent to us at:\nEmail: info@koi4sale.co.uk\nAddress: 23 Cat Street, Whittle-le-Woods, Chorley, Lancashire, UK, ZX9 4PQ\nPhone: [insert phone number]`
        }
    ];

    return (
        <section className="relative z-10 bg-white py-16 dark:bg-dark lg:py-20">
            <div className="container max-w-4xl px-4">
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                        Terms of Service
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Last updated: 10 September 2025
                    </p>
                </header>

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