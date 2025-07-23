import AnimatedButton from '../../components/buttons/AnimatedButton';

const CTA1 = () => {
    return (
        <section className="flex justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-visible">
            <div className="bg-neutral relative max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-6 sm:p-12 lg:p-16 overflow-visible">
                <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left z-10">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Let’s make things happen
                    </h1>
                    <p className="text-gray-700">
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <AnimatedButton
                            to="/pricing"
                            bgClass="bg-secondary"
                            width="w-60"
                            borderClass="border-secondary"
                        >
                            Get your free proposal
                        </AnimatedButton>
                    </div>
                </div>
                <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
                    <img
                        src="/images/Illustration.svg"
                        alt="Marketing illustration"
                        className="w-[330px] object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="lg:hidden flex justify-center z-10">
                    <img
                        src="/images/Illustration.svg"
                        alt="Marketing illustration"
                        className="max-w-xs object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default CTA1;
