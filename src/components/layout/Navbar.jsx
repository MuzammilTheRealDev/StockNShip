import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AnimatedButton from "../buttons/AnimatedButton";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../../content/Content";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastscrollY = useRef(0);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
        if (location.hash && location.pathname === "/") {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastscrollY.current && currentScrollY > 100) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            lastscrollY.current = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <nav className={`fixed w-full z-30 p-4 flex justify-center  duration-700 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="w-full max-w-7xl bg-secondary py-3 px-3 md:px-4 md:py-3 rounded-full flex items-center justify-between shadow-lg">
                <NavLink to="/" className="ml-4">
                    <img
                        src="/images/logo.webp"
                        alt="Logo"
                        className="h-12 object-contain"
                    />
                </NavLink>

                <div className="hidden lg:flex items-center gap-8 text-white font-medium">
                    {navLinks.slice(0, navLinks.length - 2).map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `transition px-3 py-1 rounded-md ${isActive ? "text-primary" : "hover:text-primary"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:flex items-center space-x-4 ">
                    <NavLink to={'/login'} className={'text-white hover:text-primary duration-200'} aria-label="Login">
                        <FontAwesomeIcon className="text-lg" icon={faUser} />
                    </NavLink>
                    <AnimatedButton component="navlink" to="/contact-us" textClass="text-primary" bgClass="bg-transparent" rounded="rounded-full">Get in touch</AnimatedButton>

                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white focus:outline-none pr-2"
                    aria-label="Toggle Menu"
                >
                    <img
                        src={isOpen ? "/images/close.svg" : "/images/menu.svg"}
                        alt="Menu Toggle"
                        className="w-8 h-8"
                    />
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-[70px] left-0 right-0 mx-auto w-[90%] mt-10 bg-secondary/95 backdrop-blur-md rounded-2xl shadow-md py-6 z-20 transition-all duration-300 lg:hidden">
                    <ul className="flex flex-col items-center space-y-5 text-white font-medium">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `block w-full text-center py-2 rounded-md ${isActive ? "text-primary" : "hover:text-primary"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
