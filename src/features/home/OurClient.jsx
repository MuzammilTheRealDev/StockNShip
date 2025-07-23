import Marquee from "../../components/layout/Marquee";
import { logos } from "../../content/Content";

const OurClient = () => {

    return (
        <section className="flex justify-center py-16 px-4 bg-white">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="lg:max-w-md w-full">
                    <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
                    <p className="text-gray-700">
                        Several selected clients who already believe in our service.
                    </p>
                </div>

                <div className="overflow-hidden marquee_parent relative py-6 w-full">
                    <Marquee speed={60}>
                        {logos.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt="Logo"
                                className="h-8 w-auto mx-4 object-contain"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default OurClient;
