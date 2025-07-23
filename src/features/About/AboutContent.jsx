const AboutContent = () => {
    return (
        <section className="flex items-center justify-center py-10 md:py-16 px-4">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-16">

                    <div className="relative flex-1 w-full">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                                About Stocknship
                            </h1>
                            <p className="text-gray-700">
                                Managing your FBA prep centre is hard. There are a lot of moving pieces and it's easy to make mistakes when you're juggling multiple responsibilities.
                            </p>
                            <p className="text-gray-700">
                                Prep Business was built by an FBA seller who knows how difficult these tasks can be. With our software, you'll spend less time managing tedious tasks and more time growing your business. Plus we give each of your customers access to their own self-service portal where they can see all updates about their shipments including order statuses - that means way less messages in your inbox!
                            </p>
                            <p className="text-gray-700">
                                We've been there, we know that managing inventory in Seller Central or spreadsheets can be a nightmare. You have one job - to prepare products for sale on Amazon - but then you also need to manage orders, shipping, tracking numbers, payments and more! It's too much work for one person and the only way to get it done well is with help from software designed specifically for this task.
                            </p>
                        </div>
                        <img
                            src="/images/neutralLogo.svg"
                            alt="Logo Watermark"
                            aria-hidden="true"
                            className="absolute top-1/3 md:top-1/4 left-0 opacity-100 w-full z-0"
                        />
                    </div>

                    <div className="flex-1 w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/about.webp"
                            alt="About Visual"
                            className="rounded-xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
