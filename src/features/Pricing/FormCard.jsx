import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormCard = () => {
    const [step, setStep] = useState(1);
    const [submittedData, setSubmittedData] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors }
    } = useForm({ mode: 'onTouched' });

    const platformsList = ['Shopify', 'Amazon', 'TikTok', 'eBay', 'Walmart', 'Others'];
    const fulfillment = watch('fulfillment', '');

    const nextStep = async () => {
        const valid = await trigger();
        if (valid) setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const onSubmit = (data) => {
        console.log("Form Submitted", data);
        setSubmittedData(data);
        setStep(5);
        toast.success('Your request sent successfully')
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="">
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="input"
                                placeholder="What's your name?*"
                                autoComplete="name"
                            />
                            {errors.name && <p className="text-red-500 text-sm px-1">{errors.name.message}</p>}
                        </div>
                        <div className="">
                            <input {...register("phone", { required: "Phone number is required" })} className="input" placeholder="What's your phone number?*" />
                            {errors.phone && <p className="text-red-500 text-sm px-1">{errors.phone.message}</p>}
                        </div>
                        <div className="">
                            <input type="email" {...register("email", { required: "Email is required" })} className="input" placeholder="What's your email?*" />
                            {errors.email && <p className="text-red-500 text-sm px-1">{errors.email.message}</p>}
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <input
                            {...register("company", { required: "Company name is required" })}
                            className="input"
                            placeholder="Company Name*"
                            autoComplete="organization"  // Explicit for company/organization
                        />
                        {errors.company && <p className="text-red-500 text-sm px-1">{errors.company.message}</p>}
                        <div className="">
                            <p className="mt-2">How are you currently fulfilling orders?*</p>
                            <div className="flex gap-4 flex-col mt-1">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" value="in-house" {...register("fulfillment", { required: "Select one option" })} />
                                    <span>In-house</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" value="outsourcing" {...register("fulfillment")} />
                                    <span>Outsourcing</span>
                                </label>
                            </div>
                            {errors.fulfillment && <p className="text-red-500 text-sm mt-2">{errors.fulfillment.message}</p>}
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="">
                            <input type="number" {...register("ordersPerMonth", { required: "This field is required" })} className="input" placeholder="Avg. number of orders/month" />
                            {errors.ordersPerMonth && <p className="text-red-500 text-sm">{errors.ordersPerMonth.message}</p>}
                        </div>
                        <div className="">
                            <input type="number" {...register("skuCount", { required: "Number of SKUs is required" })} className="input appearance-none" placeholder="Number of SKUs" />
                            {errors.skuCount && <p className="text-red-500 text-sm">{errors.skuCount.message}</p>}
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="grid grid-cols-2 gap-2">
                            {platformsList.map((platform) => (
                                <label key={platform} className="flex items-center space-x-2">
                                    <input type="checkbox" value={platform} {...register("platforms", { required: "Select at least one platform" })} />
                                    <span>{platform}</span>
                                </label>
                            ))}
                        </div>
                        {errors.platforms && <p className="text-red-500 text-sm">{errors.platforms.message}</p>}

                        <input {...register("additionalInfo")} placeholder="Special requirements or additional information" className="input" />
                    </>
                );
            case 5:
                return (
                    <div className="text-center space-y-6">
                        <h1>Thank you for reaching out!</h1>
                        <h4 className="text-xl font-semibold text-green-600">We’ve received your message and will get back to you shortly.</h4>
                        <p className="text-gray-600">Want to fast-track the process? Book a call with our team to discuss your needs directly! </p>
                        <Link to={'/contact-us'} className="bg-primary w-full hover:bg-yellow-500 duration-300 text-white py-2 px-4 rounded-full"> Schedule a Call</Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-md mt-10 md:mt-0 bg-white border border-gray-200 p-6 rounded-xl shadow-lg px-10">
            {step < 5 && <h3 className="text-2xl font-semibold mb-2">Request a Quote</h3>}
            {step < 5 && <p className="text-sm text-gray-500 mb-4">Break the ice! Let us help you out</p>}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {renderStep()}

                {step < 5 && (
                    <div className="flex justify-between items-center flex-col gap-3">
                        {step < 4 ? (
                            <button type="button" onClick={nextStep} className="bg-black hover:bg-transparent hover:text-black duration-300 border-2 cursor-pointer border-black text-white py-2.5 px-4 rounded-full w-full mt-4">
                                Next
                            </button>
                        ) : (
                            <button type="submit" className="bg-black hover:bg-transparent hover:text-black duration-300 border-2 cursor-pointer border-black text-white py-2.5 px-4 rounded-full w-full mt-4">
                                Submit
                            </button>
                        )}

                        {step > 1 && (
                            <button type="button" onClick={prevStep} className="text-sm text-gray-500">
                                Back
                            </button>
                        )}
                    </div>
                )}

                {step < 5 && (
                    <>
                        <div className="text-center text-sm">
                            Already a member? <Link to={'/login'} className="text-primary hover:text-yellow-500 font-bold cursor-pointer">Sign in</Link>
                        </div>
                        <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                            <div className="h-full bg- transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
                        </div>
                        <p className="text-xs text-right text-gray-400">Step {step} of 4</p>
                    </>
                )}
            </form>
        </div>
    );
};

export default FormCard;
