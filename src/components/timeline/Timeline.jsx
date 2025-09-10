const Timeline = () => {
    return (

        <>
            <div className="container relative bg-white pb-[50px] pt-[40px] dark:bg-dark lg:pt-[50px] ">
                <h2 id="timeline" className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] pb-[40px] scroll-mt-28 md:scroll-mt-36">
                    Delivery Steps
                </h2>

                <ol
                    className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {/* Step 1 */}
                    <li className="group rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0f1220] p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="min-w-0">
                                {/* Icon */}
                                <span className=" shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-primary dark:bg-orange-500/10">
                                    {/* calendar-check */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zm9.707 3.293-3 3a1 1 0 1 1-1.414-1.414L11.586 12l1.121 1.121 2.707-2.707a1 1 0 0 1 1.414 1.414l-3.121 3.121z" />
                                    </svg>
                                </span>
                                <div className="inline-flex mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 pl-[10px]">Step 1</div>
                                <h4 className="text-xl font-semibold text-dark dark:text-white">Order confirmation</h4>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                    After placing your order we contact you to confirm all details.
                                    We agree the shipping date (usually <strong>Tue–Thu</strong>) and check weather conditions.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Step 2 */}
                    <li className="group rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0f1220] p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="min-w-0">
                                <span className="shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-primary dark:bg-orange-500/10">
                                    {/* clock / fasting */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 11h4a1 1 0 0 0 0-2h-3V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1Z" />
                                    </svg>
                                </span>
                                <div className="inline-flex mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 pl-[10px]">Step 2</div>
                                <h4 className="text-xl font-semibold text-dark dark:text-white">Preparation / Fasting</h4>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                    Before shipping, your koi is held in a separate tank and not fed for 24–48 hours.
                                    This ensures clean water during transport and reduces stress on the fish.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Step 3 */}
                    <li className="group rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0f1220] p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="min-w-0">
                                <span className="shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-primary dark:bg-orange-500/10">
                                    {/* box/truck */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 7a2 2 0 0 1 2-2h7l3 3h4a2 2 0 0 1 2 2v7h-2.126a3.001 3.001 0 0 0-5.748 0H9.874a3.001 3.001 0 0 0-5.748 0H3V7zm4 11a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0-1 1z" />
                                    </svg>
                                </span>
                                <div className="inline-flex mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 pl-[10px]">Step 3</div>
                                <h4 className="text-xl font-semibold text-dark dark:text-white">Packing and shipping</h4>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                    Each koi is packed individually: double bag with water and pure oxygen,
                                    then placed into an insulated box. The parcel is shipped by express courier
                                    on the agreed day, and we track it until arrival.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* Step 4 */}
                    <li className="group rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0f1220] p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="min-w-0">
                                <span className="shrink-0 mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-primary dark:bg-orange-500/10">
                                    {/* home/heart */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3z" />
                                    </svg>
                                </span>
                                <div className="inline-flex mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 pl-[10px]">Step 4</div>
                                <h4 className="text-xl font-semibold text-dark dark:text-white">Receive your koi</h4>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                    Please receive the parcel in person. We provide a
                                    <strong> 24-hour Live Arrival Guarantee</strong>: inspect your koi immediately
                                    and transfer it to your quarantine tank or pond.
                                    If anything is wrong, contact us straight away with photos or video.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default Timeline;