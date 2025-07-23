import FormCard from "./FormCard";

const PricingForm = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10 px-4 gap-4">
            <div>
                <div className="flex items-center flex-col">
                    <h1 className='text-3xl sm:text-4xl font-bold text-center'>Discover pricing for quality <br /> fulfillment services.</h1>
                    <p className='text-gray-500 mt-4 max-w-2xl text-center '>Our pricing is scaled to your monthly order volume ship more, save more!</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between p-2 md:p-10 max-w-7xl w-full gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold mb-4">
                        Unlock <span className="text-primary">same-day fulfillment</span> and streamline your operations.
                    </h2>

                    <p className="mb-6 text-gray-600">
                        We know your business is far from ordinary, so a quick call and generic quote just won’t do the trick. At StocknShip, we dive deep into your operations, product lines, and goals - uncovering what truly drives your fulfillment needs.
                    </p>
                    <p className="mb-6 text-gray-600">After all, every shipment represents your brand, and every detail matters.</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Unlimited team access</li>
                        <li>Instant account support</li>
                        <li>Quick onboarding</li>
                    </ul>
                </div>
                <FormCard />
            </div>
        </section>
    );
};

export default PricingForm;