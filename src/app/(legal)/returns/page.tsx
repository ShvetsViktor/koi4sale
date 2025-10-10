import ArticlePage from "@/app/components/articlePage/ArticlePage";

export default function Returns() {
    const sections = [
        {
            title: "Right to Cancel / Return Period",
            content:
                "You have the right to cancel or return non-personalised goods within 14 days of receipt. Please contact us first for authorization.",
        },
        {
            title: "Condition of Goods for Return",
            content: [
                "Goods must be unused, undamaged and in original packaging.",
                "All tags, labels and paperwork must be intact.",
                "Goods should be in resellable condition.",
            ],
        },
        {
            title: "Live Koi Policy",
            content:
                "Live koi cannot be returned unless they arrive dead or visibly unhealthy. You must notify us immediately upon receipt with photo/video evidence for a claim.",
        },
        {
            title: "Faulty or Damaged Goods",
            content:
                "If an item is faulty or damaged upon delivery, contact us within 48 hours with photos. We will offer a replacement or refund depending on the situation.",
        },
        {
            title: "Returns Process",
            content:
                "Contact us via email with your order number and reason for return. Use secure recorded delivery and include proof of postage.",
        },
        {
            title: "Refunds / Exchanges",
            content:
                "Once returned goods are inspected and approved, refunds or exchanges will be processed within 7–14 days to your original payment method.",
        },
        {
            title: "Contact",
            content:
                "Email: support@koi4sale.co.uk\nReturn Address: [Insert your return address here]\nPlease include your order number in all correspondence.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Returns Policy",
        inLanguage: "en-GB",
        dateModified: "2025-09-10",
        description:
            "Information about cancellations, returns, refunds and exchanges for Koi4Sale.",
    };

    return (
        <ArticlePage
            title="Returns Policy"
            updatedAt="10 September 2025"
            sections={sections}
            jsonLd={jsonLd}
        />
    );
}