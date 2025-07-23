const WhyUs = () => {
    const data = [
        { text: "We treat your inventory like it’s our own." },
        { text: "Transparent, real-time tracking and updates." },
        { text: "Affordable, predictable pricing with no hidden fees." },
        { text: "Fast and reliable U.S.-based fulfillment." },
        { text: "Friendly support team that speaks your language." },
    ];
    return (
        <section className='px-4 py-10 flex items-center justify-center '>
            <div className='max-w-7xl w-full relative'>
                <div className="flex flex-col items-center gap-2">
                    <h2 className='text-primary font-bold'>Why Choose Us</h2>
                    <h1 className='text-3xl max-w-xl text-center font-bold'>More than just a warehouse your business partner</h1>
                    <p className='text-center max-w-xl w-full text-neutral-500'>At Stocknship, we don’t just store and ship products we support your growth journey. Whether you're starting out or scaling fast, we’re the team behind your success.</p>
                </div>
                <div className="flex items-center justify-center  mt-6">
                    <ul className="flex gap-4 flex-col">
                        {data.map(({ text }, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/icons/check.svg" className="size-5" aria-hidden="true" alt="check-icon" />
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <img src="/images/whyus-bg.svg" className='absolute top-0 object-cover right-0 md:w-2/5 -z-10' alt="Checkmark icon" />
                </div>
            </div>
        </section>
    )
}

export default WhyUs