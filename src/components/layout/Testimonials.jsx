import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import { testimonials } from "../../content/Content";

const Testimonials = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    useEffect(() => {
        function updateVisibleCount() {
            const width = window.innerWidth;
            if (width < 640) setVisibleCount(1);
            else if (width < 1024) setVisibleCount(3);
            else setVisibleCount(5);
        }
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % testimonials.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    const getDisplayTestimonials = () => {
        const extended = [...testimonials, ...testimonials];
        return extended.slice(startIndex, startIndex + visibleCount);
    };

    const translateXPercent = visibleCount === 1 ? 0 : (100 / visibleCount) * 0.5;

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
                Our partners. <span className="text-black">Our Friends.</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mt-2">They love us.</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Hear directly from our amazing clients about how we’ve helped them grow, streamline operations, and achieve real results.
            </p>

            <div
                className="relative mt-12 px-4 py-6 overflow-x-auto sm:overflow-x-hidden scroll-smooth"
                {...swipeHandlers}
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${translateXPercent}%)`,
                        minWidth: visibleCount === 1 ? "100%" : "auto",
                    }}
                >
                    {getDisplayTestimonials().map((t, index) => {
                        const position = index - Math.floor(visibleCount / 2);
                        const scale =
                            position === 0
                                ? "scale-105"
                                : position === -1 || position === 1
                                    ? "scale-95"
                                    : "scale-90 opacity-60";
                        const zIndex = position === 0 ? "z-30" : position === -1 || position === 1 ? "z-20" : "z-10";

                        let widthClass = "w-72";
                        if (visibleCount === 1) widthClass = "w-full max-w-md mx-auto";
                        else if (visibleCount === 3) widthClass = "w-80";
                        else if (visibleCount === 5) widthClass = "w-72";

                        return (
                            <div
                                key={index}
                                className={`flex-shrink-0 mx-2 bg-yellow-50 p-6 rounded-2xl shadow-md text-left transform ${scale} ${zIndex} transition-all duration-700 ease-out ${widthClass}`}
                            >
                                <div className="space-y-4">
                                    <h4 className="font-bold flex items-center space-x-2">
                                        <span>{t.logo}</span>
                                    </h4>
                                    <p className="text-gray-800">{t.text}</p>
                                    <div className="flex items-center space-x-4 pt-2">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">{t.name}</p>
                                            <p className="text-xs text-gray-500">{t.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-8 space-x-8 items-center">
                <button
                    onClick={handlePrev}
                    className="flex items-center text-gray-700 cursor-pointer hover:text-primary duration-300"
                    aria-label="Previous testimonials"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 mr-2" /> Prev
                </button>
                <button
                    onClick={handleNext}
                    className="flex items-center text-gray-700 cursor-pointer hover:text-primary duration-300"
                    aria-label="Next testimonials"
                >
                    Next <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    );
}

export default Testimonials