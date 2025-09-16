import React from "react";

export default function Privacy() {
    return (
        <section className="relative z-10 bg-white py-16 dark:bg-dark lg:py-20">
            <div className="container max-w-4xl px-4">
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                        Last updated: 10 September 2025
                    </p>
                </header>

                <div className="prose prose-neutral max-w-none dark:prose-invert">
                    <p>
                        At <strong>Koi4Sale</strong>, we respect your privacy and are committed to
                        protecting your personal information. This Privacy Policy explains
                        how we collect, use, and share your data when you interact with our
                        website or services.
                    </p>

                    <h2>Who we are</h2>
                    <p>
                        Controller: <strong>Koi4Sale</strong> (UK) <br />
                        Contact email:{" "}
                        <a href="mailto:privacy@yourdomain.com">privacy@yourdomain.com</a>{" "}
                        <br />
                        Business address: [Insert business address here]
                    </p>

                    <h2>What we collect</h2>
                    <ul>
                        <li>Contact details: name, email, phone, billing/shipping address.</li>
                        <li>
                            Order information: purchased items, payment confirmation, delivery
                            details.
                        </li>
                        <li>
                            Account information: username, password, saved preferences,
                            loyalty points.
                        </li>
                        <li>
                            Customer support: messages you send us via forms, email, or phone.
                        </li>
                        <li>
                            Technical data: IP address, device/browser info, and log data for
                            security and performance.
                        </li>
                    </ul>

                    <h2>How we use your information</h2>
                    <ul>
                        <li>Process and deliver your orders, returns, and exchanges.</li>
                        <li>Respond to enquiries and provide customer support.</li>
                        <li>Maintain your account and order history.</li>
                        <li>
                            Send service updates and, where consent is given, promotional
                            communications.
                        </li>
                        <li>Protect our website and services from fraud and abuse.</li>
                        <li>Comply with legal and tax obligations.</li>
                    </ul>

                    <h2>Lawful bases</h2>
                    <ul>
                        <li>
                            <strong>Contract</strong> — to fulfil your purchase and deliver
                            services.
                        </li>
                        <li>
                            <strong>Consent</strong> — for marketing emails and optional
                            cookies.
                        </li>
                        <li>
                            <strong>Legitimate interests</strong> — to secure our systems,
                            prevent fraud, and respond to enquiries.
                        </li>
                        <li>
                            <strong>Legal obligation</strong> — to retain transaction records
                            where required by law.
                        </li>
                    </ul>

                    <h2>Sharing</h2>
                    <p>
                        We do not sell your personal data. We may share it with trusted
                        third parties under appropriate agreements, including:
                    </p>
                    <ul>
                        <li>Payment processors (to handle transactions securely).</li>
                        <li>Shipping and logistics providers (to deliver orders).</li>
                        <li>Email and cloud hosting providers.</li>
                        <li>
                            Analytics or advertising partners (only where consent is given).
                        </li>
                    </ul>

                    <h2>Cookies and analytics</h2>
                    <p>
                        We use cookies and similar technologies to enable site functionality
                        (e.g., shopping cart), improve performance, and, where consented,
                        for analytics or marketing.
                    </p>
                    <p>
                        Most browsers accept cookies automatically, but you can manage or
                        disable them in your browser settings. Blocking cookies may affect
                        some features of the site.
                    </p>

                    <h2>Storage and security</h2>
                    <p>
                        Personal data is stored in secure systems with restricted access. We
                        implement technical and organisational measures such as encryption,
                        access controls, and logging.
                    </p>

                    <h2>Retention</h2>
                    <p>
                        We keep order and enquiry records as long as necessary to provide
                        services and comply with legal obligations (e.g., tax rules). Other
                        personal data is deleted or anonymised when no longer needed.
                    </p>

                    <h2>Your rights (UK/EU GDPR)</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access a copy of your personal data.</li>
                        <li>Request correction or deletion.</li>
                        <li>Restrict or object to processing.</li>
                        <li>Request data portability (where applicable).</li>
                        <li>
                            Withdraw consent for marketing at any time (without affecting past
                            lawful processing).
                        </li>
                    </ul>
                    <p>
                        To exercise your rights, contact us at{" "}
                        <a href="mailto:privacy@yourdomain.com">privacy@yourdomain.com</a>.
                    </p>

                    <h2>User-generated content</h2>
                    <p>
                        If you post reviews or other content on our site, it may be visible
                        publicly. Please do not share information you wish to keep private.
                    </p>

                    <h2>Children’s privacy</h2>
                    <p>
                        Our services are not directed to children under 13, and we do not
                        knowingly collect personal data from them. If you believe a child
                        has provided us with their information, please contact us.
                    </p>

                    <h2>International transfers</h2>
                    <p>
                        If we transfer data outside the UK/EEA, we use recognised safeguards
                        such as Standard Contractual Clauses or equivalent mechanisms.
                    </p>

                    <h2>Complaints</h2>
                    <p>
                        If you are unhappy with how we handle your data, you can complain to
                        the UK Information Commissioner’s Office (ICO) at{" "}
                        <a href="https://ico.org.uk/">ico.org.uk</a>. We would appreciate
                        the opportunity to resolve concerns first.
                    </p>

                    <h2>Updates</h2>
                    <p>
                        We may update this Policy from time to time. Significant changes
                        will be posted on this page with a new “Last updated” date.
                    </p>
                </div>
            </div>
        </section>
    );
}