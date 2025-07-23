import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { services } from "../../content/Content";

const Services = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: '-50px' });

    const [index, setIndex] = useState(0);
    const totalPages = Math.ceil(services.length / 4);

    const handleSwipe = () => {
        setIndex((prev) => (prev + 1) % totalPages);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipe,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handleDotClick = (dotIndex) => {
        setIndex(dotIndex);
    };

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % totalPages);
        }, 5000);

        return () => clearInterval(interval);
    }, [isInView, totalPages]);

    const getVisibleServices = () => {
        const start = index * 2;
        return [
            services[start % services.length],
            services[(start + 1) % services.length],
            services[(start + 2) % services.length],
            services[(start + 3) % services.length],
        ];
    };

    return (
        <section
            ref={sectionRef}
            className='lg:min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden'
        >
            <div className="main-shape bg-neutral h-[50%] w-3/5 absolute right-0 top-60 -z-10 rounded-tl-[10rem]"></div>

            <div className="flex max-w-7xl mx-auto justify-between w-full relative flex-col lg:flex-row">
                <div className="relative flex flex-col justify-center gap-16">
                    <div className="flex flex-col gap-5 relative">
                        <div className="min-shape size-30 bg-neutral rounded-tl-[6rem] absolute -left-4 -top-7 -z-10"></div>
                        <h1 className='text-3xl sm:text-4xl font-bold text-center md:text-left'>
                            How can we help <br /> your business?
                        </h1>
                        <p className='md:w-4/6 text-center md:text-left text-sm sm:text-base'>
                            We build readymade websites, mobile applications, and elaborate online business services.
                        </p>
                    </div>
                    <div className="w-full md:w-[80%] opacity-30 z-0 pointer-events-none">
                        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                                    <circle cx="1" cy="1" r="1.5" fill="#9CA3AF" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 flex-col mt-10 lg:mt-0" {...handlers}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row gap-10"
                        >
                            <div className="flex flex-col gap-10 drop-shadow-md mt-20">
                                {getVisibleServices().slice(0, 2).map((service, idx) => (
                                    <div key={idx} className="bg-[#fff] p-5 py-7 flex flex-col items-center gap-6 rounded-4xl w-[18rem] sm:w-[20rem]">
                                        <div className={`${service.bg} p-2 size-26 flex justify-center items-center rounded-lg`}>
                                            <img src={service.icon} alt={service.title} className="size-20 object-contain" />
                                        </div>
                                        <h1 className='text-xl font-semibold text-center'>{service.title}</h1>
                                        <p className='text-center opacity-60'>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-10 drop-shadow-md mb-20">
                                {getVisibleServices().slice(2, 4).map((service, idx) => (
                                    <div key={idx} className="bg-[#fff] p-5 py-7 flex flex-col items-center gap-6 rounded-4xl w-[18rem] sm:w-[20rem]">
                                        <div className={`${service.bg} p-2 size-26 flex justify-center items-center rounded-lg`}>
                                            <img src={service.icon} alt={service.title} className="size-20 object-contain" />
                                        </div>
                                        <h1 className='text-xl font-semibold text-center'>{service.title}</h1>
                                        <p className='text-center opacity-60'>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex gap-2 justify-center mt-6">
                        {Array.from({ length: totalPages }).map((_, dotIndex) => (
                            <div
                                key={dotIndex}
                                onClick={() => handleDotClick(dotIndex)}
                                role="button"
                                aria-label={`Show services group ${dotIndex + 1}`}
                                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${index === dotIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-400'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
