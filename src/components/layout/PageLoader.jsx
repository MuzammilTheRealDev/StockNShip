import { motion } from 'framer-motion'

const dotVariants = {
    bounce: {
        y: ["0%", "-50%", "0%"],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
}

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="flex space-x-2">
                {[1, 2, 3].map((_, i) => (
                    <motion.span
                        key={i}
                        className="w-3 h-3 bg-primary rounded-full"
                        variants={dotVariants}
                        animate="bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PageLoader
