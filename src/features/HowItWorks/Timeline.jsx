import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { timelineData } from "../../content/Content";

export default function Timeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const progressHeight = useTransform(scrollYProgress, [0, .8], ["0%", "100%"]);

    return (
        <div className="min-h-screen py-10 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                </motion.div>

                <div ref={containerRef} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-200 h-full hidden md:block">
                        <motion.div
                            className="w-full bg-primary origin-top"
                            style={{ height: progressHeight }}
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {timelineData.map((step, index) => (
                            <TimelineItem key={step.id} step={step} index={index} isLeft={index % 2 === 0} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-16 px-4 max-w-7xl w-full mx-auto">
                <div className="flex items-center justify-center">
                    <img src="/images/dottedLine.svg" className="object-cover" alt="dotted svg" />
                </div>
            </div>
        </div>
    );
}

function TimelineItem({ step, index, isLeft }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [dotInView, setDotInView] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setDotInView(true), 300);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative">
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"
                initial={{ scale: 0, backgroundColor: "#e2e8f0" }}
                animate={{
                    scale: dotInView ? 1 : 0,
                    backgroundColor: dotInView ? "#FCC40A" : "#e2e8f0",
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
            >
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isLeft ? -100 : 100 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative overflow-hidden rounded-2xl group">
                        <img
                            src={step.image}
                            alt={step.title}
                            className="mx-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0" />
                    </div>
                </motion.div>

                <motion.div
                    className={`w-full md:w-1/2 ${isLeft ? "md:text-left" : "md:text-right"}`}
                    initial={{ opacity: 0, x: isLeft ? 100 : -100 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isLeft ? 100 : -100 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 relative"
                        transition={{ duration: 0.3 }}
                    >

                        <motion.h1
                            className="text-2xl md:text-3xl font-bold text-slate-800 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            {step.title}
                        </motion.h1>

                        <motion.h3
                            className="text-lg text-slate-800 mb-4 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            {step.subTitle}
                        </motion.h3>

                        <motion.p
                            className="text-gray-500"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            {step.description}
                        </motion.p>

                    </motion.div>
                </motion.div>
            </div>

            <div className="md:hidden flex justify-center mt-8">
                {index < timelineData.length - 1 && (
                    <motion.div
                        className="w-1 h-18 bg-primary"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{ originY: 0 }}
                    />
                )}
            </div>

        </div>
    );
}
