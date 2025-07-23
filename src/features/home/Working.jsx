import { priceFormSteps } from "../../content/Content";

const StepCard = ({ image, title, description }) => (
    <div
        className="bg-neutral p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
        aria-label={title}
    >
        <div className="flex flex-col items-center text-center gap-3 object-cover">
            <div className="h-10 flex items-center mb-3">
            <img src={image} className='object-cover' alt={title} />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base text-secondary/80">{description}</p>
        </div>
    </div>
);

const Working = () => {
    return (
        <section className="py-20 px-4 flex justify-center" aria-label="How It Works Steps">
            <div className="max-w-7xl w-full">
                <h1 className="text-4xl font-bold text-center mb-10">How It Works</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {priceFormSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Working;
