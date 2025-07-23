import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { services } from '../../content/Content';

const ServicesList = () => {
    return (
        <section className="relative flex justify-center px-4 py-16 overflow-hidden bg-white">
            <div className="absolute w-60 h-60 rounded-full bg-primary blur-3xl opacity-30 -top-24 -left-24"></div>
            <div className="absolute w-60 h-60 rounded-full bg-primary blur-3xl opacity-30 -bottom-24 -right-24"></div>
            <div className="max-w-6xl w-full">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-semibold text-secondary">All of our Services</h2>
                    <p className="mt-2 text-secondary/70">Select one card to find the perfect service according to your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className="border border-gray-200 bg-white rounded-2xl p-6 flex flex-col gap-4 duration-300 hover:bg-gray-50 transition z-10"
                        >
                            <div className={`${service.bg} size-20 rounded-2xl p-4 flex items-center justify-center`}>
                                <img
                                    src={service.icon}
                                    alt={`${service.title} icon`}
                                    className="w-12 h-12 object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-secondary">{service.title}</h3>
                            <p className="text-sm text-secondary/70">{service.description}</p>
                            <Link
                                to={`/service-detail/${service.slug}`}
                                className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 w-max"
                                aria-label={`Read more about ${service.title}`}
                            >
                                Read More <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
