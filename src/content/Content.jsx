export const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
    { name: "Login/Register", path: "/login" },
];

export const faqData = [
    {
        question: "Who can use Stocknship?",
        answer: "Anyone selling on Amazon US from Pakistan, India, or Bangladesh.",
    },
    {
        question: "Can I store products even if I don't sell on Amazon?",
        answer:
            "Yes, you can store your products with us regardless of the platform.",
    },
    {
        question: "Do you provide invoices or proof of services?",
        answer: "Yes, we provide proper documentation for all services rendered.",
    },
    {
        question: "What if my product is returned by a buyer?",
        answer: "We handle returns professionally and provide detailed reporting.",
    },
    {
        question: "Do you offer labeling and bundling?",
        answer: "Yes, we offer customized labeling and product bundling services.",
    },
    {
        question: "Is there a minimum monthly charge?",
        answer: "No, there is no minimum monthly fee to use our services.",
    },
];

export const testimonials = [
    {
        logo: "Connect X",
        text: "Their system is incredibly intuitive. I always know where my inventory is, and I get real-time updates without any guesswork.",
        name: "Mark T.",
        location: "Austin, TX",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        logo: "Pro Pulse",
        text: "As a new Amazon seller, I was overwhelmed by all the prep work. Stocknship made it completely stress-free.",
        name: "Lisa M.",
        location: "Denver, CO",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        logo: "Boy & Birds",
        text: "Before Stocknship, managing returns was a nightmare. Now it's smooth, fast, and hassle-free.",
        name: "Jonathan R.",
        location: "Chicago, IL",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        logo: "Link Core",
        text: "The dashboard is clean, easy to use, and perfect for our growing logistics team. It’s exactly what we needed.",
        name: "Sarah L.",
        location: "San Diego, CA",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        logo: "Pink Room",
        text: "Syncing inventory across platforms used to be chaotic. Stocknship fixed that — and their support team is top-notch.",
        name: "David P.",
        location: "New York, NY",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

export const services = [
        {
            title: "USA Based Storage Facility",
            slug: "us-based-storage-facility",
            description: "Safely store your products in our secure warehouse with easy access and low monthly fees.",
            icon: "/icons/warehouse.svg",
            bg: "bg-[#F1F7FF]",
        },
        {
            title: "Real-Time Inventory Tracking",
            slug: "real-time-inventory-tracking",
            description: "See your stock levels, shipments, and order status live in your personalized dashboard.",
            icon: "/icons/tracking.svg",
            bg: "bg-[#FFF2F8]",
        },
        {
            title: "Amazon Prep Services",
            slug: "amazon-prep-services",
            description: "From labeling to bundling to polybagging, we handle all Amazon FBA requirements — flawlessly.",
            icon: "/icons/prep.svg",
            bg: "bg-[#FFF7E3]",
        },
        {
            title: "Returns Handling",
            slug: "returns-handling",
            description: "If your buyer rejects a package, we receive it, store it, and prepare it for reshipping at your request.",
            icon: "/icons/return.svg",
            bg: "bg-[#DEFFEE]",
        },
        {
            title: "Affordable, Transparent Pricing",
            slug: "affordable-transparent-pricing",
            description: "No surprises—know exactly what you're paying for with our clear service pricing.",
            icon: "/icons/fast-delivery.svg",
            bg: "bg-[#FFF2F8]",
        },
        {
            title: "Fast Order Fulfillment",
            slug: "fast-order-fulfillment",
            description: "We fulfill your orders quickly and accurately, helping you maintain great seller metrics on Amazon.",
            icon: "/icons/price-tag.svg",
            bg: "bg-[#F1F7FF]",
        },
    ];

export const serviceDetailData = {
    "us-based-storage-facility": {
        title: "USA Based Storage Facility",
        description: `Store your products securely in our state-of-the-art US-based facility. 
        We offer climate control, 24/7 surveillance, and fast access to your inventory. 
        Ideal for businesses looking to maintain stock levels close to their primary customer base in the U.S.`,
        image: "/images/service1.webp",
    },
    "real-time-inventory-tracking": {
        title: "Real-Time Inventory Tracking",
        description: `Get real-time updates on your stock levels, shipments, and product movement with our smart dashboard.
        This system ensures you're always informed and can make data-driven decisions instantly.`,
        image: "/images/service2.webp",
    },
    "amazon-prep-services": {
        title: "Amazon Prep Services",
        description: `We handle labeling, bundling, polybagging, and other Amazon FBA requirements professionally.
        Avoid delays and penalties — let us get your products Amazon-ready with precision and speed.`,
        image: "/images/service3.webp",
    },
    "returns-handling": {
        title: "Returns Handling",
        description: `When a package is returned, we inspect, store, and prepare it for reshipment if needed.
        Our returns management helps reduce losses and keeps your customers satisfied.`,
        image: "/images/service4.webp",
    },
    "affordable-transparent-pricing": {
        title: "Affordable, Transparent Pricing",
        description: `No hidden fees, no confusion. Our pricing is clear and tailored to suit your business size and needs.
        You always know what you're paying for — and why.`,
        image: "/images/service5.webp",
    },
    "fast-order-fulfillment": {
        title: "Fast Order Fulfillment",
        description: `Speed matters in e-commerce. We pick, pack, and ship your orders fast — ensuring customer satisfaction and great seller ratings on Amazon or other platforms.`,
        image: "/images/service6.webp",
    },
};

export const logos = [
    "/images/pink.webp",
    "/images/connectx.webp",
    "/images/propulse.webp",
    "/images/linkcore.svg",
    "/images/boyAndBirds.webp",

];

export const contactInfo = [
    { label: "Email", value: "info@stocknship.com" },
    { label: "Phone", value: "(310) 555-0142" },
    {
        label: "Address",
        value: "456 Hollywood Blvd, Los Angeles, CA 90028",
    },
];

export const formField = [
    {
        name: "Email",
        fieldName: "email",
        type: "email",
        placeholder: "Enter your Email",
    },
    {
        name: "Password",
        fieldName: "password",
        type: "password",
        placeholder: "Enter your Password",
        isPassword: true,
    },
];

export const formFields = [
    {
        name: "Name",
        fieldName: "name",
        type: "text",
        placeholder: "Enter your Name",
    },
    {
        name: "Email",
        fieldName: "email",
        type: "email",
        placeholder: "Enter your Email",
    },
    {
        name: "Password",
        fieldName: "password",
        type: "password",
        placeholder: "Enter your Password",
        isPassword: true,
        validation: {
            required: "Please enter Password",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
            },
        },
    },
    {
        name: "Confirm Password",
        fieldName: "confirm_password",
        type: "password",
        placeholder: "Confirm your Password",
        isPassword: true,
        validation: {
            required: "Please confirm your Password",
        },
    },
];

export const priceFormSteps = [
    {
        title: "Create Your Account",
        description: "Sign up in minutes and get instant access to your dashboard.",
        image: "/icons/add-user.svg",
    },
    {
        title: "Send Us Your Inventory",
        description:
            "Ship your products to our US warehouse. We'll notify you once they arrive.",
        image: "/icons/fast-truck.svg",
    },
    {
        title: "We Prep, Label & Store",
        description:
            "We label, bundle, and store your items according to Amazon's standards.",
        image: "/icons/box-rack.svg",
    },
    {
        title: "Track & Manage Online",
        description:
            "Add shipments, monitor stock, and view performance from your dashboard.",
        image: "/icons/ai-computer.svg",
    },
    {
        title: "We Fulfill Your Orders",
        description:
            "When an order is placed, we pack and ship it with accuracy and speed.",
        image: "/icons/stocks.svg",
    },
];

export const timelineData = [
    {
        id: 1,
        title: "Create Your Account",
        subTitle: "Sign up in minutes.",
        description:
            "Register as a seller on our platform and access your personalized client dashboard. Everything you need to manage your inventory is now just a click away.",
        image: "/images/step1.svg",
        date: "January 2024",
    },
    {
        id: 2,
        title: "Ship Your Inventory",
        subTitle: "Send your products to our U.S. warehouse.",
        description:
            "Once signed up, ship your items directly to our secure, climate-controlled warehouse. We’ll notify you the moment your stock arrives.",
        image: "/images/step2.svg",
        date: "March 2024",
    },
    {
        id: 3,
        title: "Product Inspection & Storage",
        subTitle: "We check and store your goods.",
        description:
            "Our team inspects your packages for any damage, organizes SKUs, and stores them safely with real-time visibility in your dashboard.",
        image: "/images/step3.svg",
        date: "June 2024",
    },
    {
        id: 4,
        title: "Place Fulfillment Orders",
        subTitle: "Submit orders anytime, anywhere.",
        description:
            "Got a sale? Just place a fulfillment request from your dashboard. You can select the product, quantity, and shipping method with ease.",
        image: "/images/step4.svg",
        date: "September 2024",
    },
    {
        id: 5,
        title: "Pack & Ship to Customer",
        subTitle: "We handle the rest.",
        description:
            "We pick, prep, pack, and ship your orders to Amazon or directly to your customers. Fast, reliable, and hassle-free—every time.",
        image: "/images/step5.svg",
        date: "December 2024",
    },
];
