import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { faqData } from '../../content/Content';


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const variants = {
        hidden: { opacity: 0, y: -10, height: 0 },
        visible: {
            opacity: 1,
            y: 0,
            height: 'auto',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            height: 0,
            transition: { duration: 0.2 },
        },
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-4xl font-bold mb-4">FAQs</h2>
                <p className="text-gray-600 mb-6">
                    As a leading digital marketing agency, we are dedicated to providing comprehensive educational
                    resources and answering frequently asked questions to help our clients.
                </p>
                <Link to="/contact-us" className="text-black underline font-medium hover:text-primary duration-300">Contact Us</Link>
            </div>

            <div>
                {faqData.map((faq, index) => (
                    <div key={index} className="border-t last:border-b py-4 group">
                        <button
                            className={`flex justify-between items-center w-full text-left cursor-pointer duration-200`}
                            onClick={() => toggle(index)}
                        >
                            <span className="text-lg font-medium">{faq.question}</span>
                            <FontAwesomeIcon className={`${openIndex === index ? "text-primary": "text-black"} group-hover:text-primary duration-150`} icon={openIndex === index ? faMinus : faPlus} />
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    variants={variants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-500 mt-2">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
