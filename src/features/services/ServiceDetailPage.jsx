import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BreadCrum from '../../components/layout/BreadCrum';
import { serviceDetailData } from '../../content/Content';
import WhyUs from '../About/WhyUs';
import AnimatedButton from '../../components/buttons/AnimatedButton';

const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = serviceDetailData[slug];

    if (!service) return <div className="text-center py-20">Service not found</div>;

    return (
        <>
            <BreadCrum title={`${service.title}`} />
            <main className='pb-16'>
                <section>
                    <div className="max-w-6xl w-full mx-auto py-10 px-6">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-primary font-semibold mb-6 hover:underline"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Services
                        </Link>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-6">
                            <div className="">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className=" object-cover rounded-2xl "
                                />
                            </div>
                            <div className="">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4 border-l-8 border-primary pl-4">
                                    {service.title}
                                </h1>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {service.description}
                                </p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <AnimatedButton
                                    to="/pricing"
                                    bgClass="bg-secondary"
                                    width="w-60"
                                    borderClass="border-secondary"
                                >
                                    Get your quote today
                                </AnimatedButton>
                            </div>
                            </div>
                        </div>

                    </div>
                </section>
                <WhyUs />
            </main>
        </>
    );
};


export default ServiceDetailPage