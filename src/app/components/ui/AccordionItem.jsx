export default function AccordionItem({ title, content, isOpen, onClick }) {
    return (
        <div className="border-b border-neutral-300 dark:border-neutral-700">
            <button
                onClick={onClick}
                className="cursor-pointer hover:text-yellow-600 dark:hover:text-blue-400 flex w-full items-center justify-between py-4 text-left"
            >
                <span className="hover:text-primary dark:hover:text-primary text-lg font-semibold text-dark dark:text-white">
                    {title}
                </span>
                <span className="ml-4">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
                <div className="pb-4 text-body-color dark:text-dark-text whitespace-pre-line prose prose-neutral dark:prose-invert">
                    {Array.isArray(content) ? (
                        <ul className="list-disc pl-5">
                            {content.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}