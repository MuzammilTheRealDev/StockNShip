import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const useLenis = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,
            smooth: true,
            smoothWheel: true,
            smoothTouch: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            lerp: 0.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return lenisRef;
};
