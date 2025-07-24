import { faFacebookSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedButton from '../buttons/AnimatedButton';
import { NavLink } from 'react-router-dom';
import { contactInfo, navLinks } from '../../content/Content';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Footer = () => {
    const { register, handleSubmit, reset, formState:{errors} } = useForm()
    const currentYear = new Date().getFullYear();
    const socialIcons = [
        { icon: faFacebookSquare, title: 'Facebook' },
        { icon: faLinkedin, title: 'Linkedin' },
        { icon: faWhatsappSquare, title: 'Whatsapp' },
    ];

    const onSubmission = (data) => {
        console.log(data);
        reset()
        toast.success('Newsletter Subscribed successfully')
    }

    return (
        <footer className="flex justify-center mx-4">
            <div className="max-w-7xl w-full rounded-t-4xl bg-secondary text-white px-4 pb-4 pt-8 md:px-8">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        <img
                            src="/images/logo.webp"
                            className="w-24 md:w-32"
                            alt="Stocknship Logo"
                        />

                        <ul className="flex gap-6 flex-wrap justify-center">
                            {navLinks.map(({ name, path }) => (
                                <li key={path} className="hover:text-primary duration-300">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'hover:text-primary'
                                        }
                                        to={path}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-5">
                            {socialIcons.map(({ icon, title }) => (
                                <FontAwesomeIcon
                                    key={title}
                                    icon={icon}
                                    title={title}
                                    className="text-3xl hover:text-primary duration-300 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between gap-5">
                        <div className="space-y-4">
                            <p className="bg-primary w-fit p-1 px-3 rounded-lg text-secondary font-semibold">
                                Contact us:
                            </p>
                            {contactInfo.map(({ label, value }) => (
                                <p key={label}>{`${label}: ${value}`}</p>
                            ))}
                            <p>&copy; {currentYear} Stocknship all rights reserved  </p>
                        </div>

                        <div className="w-full md:w-2/4 lg:w-1/3 space-y-4">
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Subscribe to news
                            </label>
                            <form onSubmit={handleSubmit(onSubmission)}>
                                <div className="flex flex-col md:flex-row gap-3 bg-[#2d2d2d] rounded-lg md:rounded-full p-1 items-center">
                                    <input
                                        {...register('email',{required:"Enter you email"})}
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent text-white px-4 py-2 rounded-lg md:rounded-full focus:outline-none w-full"
                                    />
                                    <AnimatedButton
                                        component='button'
                                        type='submit'
                                        hoverBgClass="group-hover:bg-secondary"
                                        hoverTextClass="hover:text-primary"
                                        textClass="text-secondary"
                                        className="bg-yellow-400 font-semibold px-4 py-3 rounded-lg md:rounded-full w-full cursor-pointer"
                                    >
                                        Subscribe to news
                                    </AnimatedButton>
                                </div>
                                    {errors.email && <p className='text-red-500 pl-6 text-sm mt-2'>{errors.email.message}</p>}
                            </form>
                        </div>
                    </div>
                </div>

                <div className="bg-white h-px my-10" />

                <p className="text-center">
                    
                    Made from &hearts; by <a href="https://www.linkedin.com/in/muzammiltherealdev" target='_blank' className='font-semibold hover:text-primary duration-200'>Muzammil Hassan</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;