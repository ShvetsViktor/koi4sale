import ArticlePage from "@/app/components/articlePage/ArticlePage";

export default function Privacy() {
    const sections = [
        {
            title: "Overview",
            content:
                "At Koi4Sale, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you interact with our website or services.",
        },
        {
            title: "Who we are",
            content:
                "Controller: Koi4Sale (UK)\nContact email: privacy@yourdomain.com\nBusiness address: [Insert business address here]",
        },
        {
            title: "What we collect",
            content: [
                "Contact details: name, email, phone, billing/shipping address.",
                "Order information: purchased items, payment confirmation, delivery details.",
                "Account information: username, password, saved preferences, loyalty points.",
                "Customer support: messages you send us via forms, email, or phone.",
                "Technical data: IP address, device/browser info, and log data for security and performance.",
            ],
        },
        {
            title: "How we use your information",
            content: [
                "Process and deliver your orders, returns, and exchanges.",
                "Respond to enquiries and provide customer support.",
                "Maintain your account and order history.",
                "Send service updates and, where consent is given, promotional communications.",
                "Protect our website and services from fraud and abuse.",
                "Comply with legal and tax obligations.",
            ],
        },
        {
            title: "Lawful bases",
            content: [
                "Contract — to fulfil your purchase and deliver services.",
                "Consent — for marketing emails and optional cookies.",
                "Legitimate interests — to secure our systems, prevent fraud, and respond to enquiries.",
                "Legal obligation — to retain transaction records where required by law.",
            ],
        },
        {
            title: "Sharing",
            content: [
                "Payment processors (to handle transactions securely).",
                "Shipping and logistics providers (to deliver orders).",
                "Email and cloud hosting providers.",
                "Analytics or advertising partners (only where consent is given).",
            ],
        },
        {
            title: "Cookies and analytics",
            content:
                "We use cookies and similar technologies to enable site functionality (e.g., shopping cart), improve performance, and, where consented, for analytics or marketing.\n\nMost browsers accept cookies automatically, but you can manage or disable them in your browser settings. Blocking cookies may affect some features of the site.",
        },
        {
            title: "Your rights (UK/EU GDPR)",
            content: [
                "Access a copy of your personal data.",
                "Request correction or deletion.",
                "Restrict or object to processing.",
                "Request data portability (where applicable).",
                "Withdraw consent for marketing at any time.",
                "To exercise your rights, contact us at privacy@yourdomain.com.",
            ],
        },
        {
            title: "Complaints",
            content:
                "If you are unhappy with how we handle your data, you can complain to the UK Information Commissioner’s Office (ICO) at https://ico.org.uk. We would appreciate the opportunity to resolve concerns first.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        name: "Privacy Policy",
        inLanguage: "en-GB",
        dateModified: "2025-09-10",
    };

    return (
        <ArticlePage
            title="Privacy Policy"
            updatedAt="10 September 2025"
            sections={sections}
            jsonLd={jsonLd}
        />
    );
}