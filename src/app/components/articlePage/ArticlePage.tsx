// Server Component (без "use client")
type Section = { title: string; content: string | string[] };

const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ArticlePage({
    title,
    updatedAt,
    sections,
    jsonLd,
}: {
    title: string;
    updatedAt: string; // например, "10 September 2025"
    sections: Section[];
    jsonLd?: Record<string, any>;
}) {
    const toc = sections.map((s) => ({ id: slugify(s.title), title: s.title }));

    return (
        <>
            <header className="mb-10 text-center">
                <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Legal
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white">
                    {title}
                </h1>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    Last updated: {updatedAt}
                </p>
                <div className="mx-auto mt-6 h-px w-24 bg-neutral-200 dark:bg-neutral-800" />
            </header>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* TOC */}
                <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
                    <nav className="sticky top-34 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            On this page
                        </p>
                        <ul className="space-y-2 text-sm">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="block rounded px-2 py-1 text-neutral-700 hover:text-dark hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Content */}
                <article className="lg:col-span-8 xl:col-span-9">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        {sections.map((section) => {
                            const id = slugify(section.title);
                            return (
                                <section key={id} className="group">
                                    <div className="relative mb-4 mt-10 border-l-4 border-neutral-200 dark:border-neutral-700 pl-4">
                                        <h2
                                            id={id}
                                            className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-dark dark:text-white"
                                        >
                                            {section.title}
                                        </h2>
                                        <a
                                            href={`#${id}`}
                                            aria-label="Copy link to section"
                                            className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                                        >
                                            #
                                        </a>
                                    </div>

                                    {Array.isArray(section.content) ? (
                                        <ul className="list-disc pl-5 space-y-2">
                                            {(section.content as string[]).map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="whitespace-pre-line">{section.content as string}</p>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    <div className="mt-10">
                        <a
                            href="#top"
                            className="text-sm text-neutral-600 hover:text-dark dark:text-neutral-300 dark:hover:text-white"
                        >
                            ↑ Back to top
                        </a>
                    </div>
                </article>
            </div>

            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </>
    );
}