import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const AnimatedButton = ({
    to = "/",
    children,
    bgClass = "bg-primary",
    textClass = "text-white",
    borderClass = "border-primary",
    width = "w-36",
    height = "h-12",
    rounded = "rounded-md",
    component = "link",
    onClick,
    className = "",
    type = "button",
    hoverBgClass = "group-hover:bg-primary",
    hoverTextClass = "hover:text-secondary",
}) => {
    const commonClasses = clsx(
        "relative inline-flex items-center justify-center overflow-hidden duration-500 z-10 group border-2 font-bold",
        width,
        height,
        rounded,
        bgClass,
        textClass,
        borderClass,
        hoverTextClass,
        className
    );

    const innerContent = (
        <>
            <span className="relative z-10">{children}</span>
            <span
                className={clsx(
                    "absolute w-[450px] h-[150px] rounded-full z-0 transition-all duration-700 ease-in-out top-full left-full",
                    "group-hover:top-[-30px] group-hover:left-[-30px]",
                    hoverBgClass
                )}
            ></span>
        </>
    );

    switch (component) {
        case "navlink":
            return <NavLink to={to} className={commonClasses}>{innerContent}</NavLink>;
        case "button":
            return <button type={type} onClick={onClick} className={commonClasses}>{innerContent}</button>;
        default:
            return <Link to={to} className={commonClasses}>{innerContent}</Link>;
    }
};

export default AnimatedButton;
