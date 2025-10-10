import ArticlePage from "@/app/components/articlePage/ArticlePage";

export default function Terms() {
    const sections = [
        {
            title: "Introduction",
            content:
                "Welcome to Koi4Sale. By using our website or purchasing from us, you agree to these Terms and Conditions. Please read them carefully before placing an order.",
        },
        {
            title: "Orders and Payments",
            content: [
                "All prices are in GBP and include VAT where applicable.",
                "Payment must be completed before goods are dispatched.",
                "We reserve the right to cancel any order if payment cannot be verified.",
            ],
        },
        {
            title: "Delivery",
            content: [
                "We ship within the UK using trusted courier services.",
                "Estimated delivery times are provided but not guaranteed.",
                "Live koi are dispatched only on specific days to ensure safe arrival.",
            ],
        },
        {
            title: "Returns and Refunds",
            content:
                "Please refer to our Returns Policy for details on cancellations, returns, and refund procedures.",
        },
        {
            title: "Liability",
            content:
                "We are not liable for indirect or consequential damages arising from the use of our website or products, except where required by law.",
        },
        {
            title: "Intellectual Property",
            content:
                "All content on this site, including text, images, and trademarks, is owned or licensed by Koi4Sale and may not be reproduced without permission.",
        },
        {
            title: "Governing Law",
            content:
                "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of English courts.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TermsOfService",
        name: "Terms & Conditions",
        inLanguage: "en-GB",
        dateModified: "2025-09-10",
    };

    return (
        <ArticlePage
            title="Terms & Conditions"
            updatedAt="10 September 2025"
            sections={sections}
            jsonLd={jsonLd}
        />
    );
}