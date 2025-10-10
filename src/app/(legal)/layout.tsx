// Server Component (без "use client")
export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <section id="top" className="w-full dark:bg-dark py-16">
            <div className="container mx-auto max-w-5xl px-4">{children}</div>
        </section>
    );
}