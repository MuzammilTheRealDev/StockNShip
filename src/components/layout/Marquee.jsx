import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const Marquee = ({ speed = 100, children }) => {
    const containerRef = useRef(null);
    const x = useRef(0);
    const direction = useRef(-1);

    useAnimationFrame((t, delta) => {
        if (!containerRef.current) return;

        const moveBy = (speed * delta) / 1000;
        x.current += moveBy * direction.current;
        if (x.current <= -containerRef.current.offsetWidth / 2) {
            x.current = 0;
        }

        containerRef.current.style.transform = `translateX(${x.current}px)`;
    });

    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div ref={containerRef} className="flex w-max">
                <div className="flex">{children}</div>
                <div className="flex">{children}</div>
            </div>
        </div>
    );
};

export default Marquee;
