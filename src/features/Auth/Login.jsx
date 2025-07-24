import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import BreadCrum from '../../components/layout/BreadCrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AnimatedButton from '../../components/buttons/AnimatedButton';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SEO from '../../components/layout/SEO';
import { useState } from 'react';
import { formField } from '../../content/Content';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);


    const socialButtons = [
        { icon: faGoogle, text: 'Google' },
        { icon: faFacebook, text: 'Facebook' }
    ];

    const onSubmission = (data) => {
        console.log(data);
        reset();
        toast.success('User Login successfully');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <SEO
                title="Login"
                description="Enter your detail to access your account"
                url="https://stocknship.com/login"
                image="https://stocknship.com/images/login.webp"
            />
            <BreadCrum title={'Login'} />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-10 max-w-7xl w-full mx-auto">
                    <div className="flex items-center">
                        <img src="/images/login.webp" alt="Login Illustration" loading="lazy" />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="space-y-10 max-w-sm w-full">
                            <div className="text-center">
                                <h1 className='text-3xl font-semibold'>Welcome Back</h1>
                                <p className='text-neutral-500'>Enter your details to sign in</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmission)}>
                                <div className="text-sm space-y-4">
                                    {formField.map(({ name, fieldName, type, placeholder, isPassword }) => {
                                        return (
                                            <div key={fieldName} className="flex flex-col gap-2">
                                                <label>{name}</label>
                                                <div className="relative">
                                                    <input
                                                        {...register(fieldName, { required: `Enter your ${name}` })}
                                                        type={isPassword ? (showPassword ? 'text' : 'password') : type}
                                                        placeholder={placeholder}
                                                        className='px-4 py-2.5 bg-neutral-100 rounded w-full pr-10'
                                                    />
                                                    {isPassword && (
                                                        <button
                                                            type="button"
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={showPassword ? faEyeSlash : faEye}
                                                                className="text-base"
                                                            />
                                                        </button>
                                                    )}
                                                </div>
                                                {errors[fieldName] && <p className='text-red-500'>{errors[fieldName].message}</p>}
                                            </div>
                                        );
                                    })}
                                    <div className="flex items-center gap-2 px-1">
                                        <input type="checkbox" className='accent-primary' />
                                        <span>Remember Me</span>
                                    </div>
                                    <div className="flex justify-center w-full shadow-lg">
                                        <AnimatedButton
                                            component='button'
                                            type='submit'
                                            bgClass="bg-primary"
                                            width="w-full cursor-pointer"
                                            borderClass="border-primary border-2"
                                            hoverBgClass='bg-secondary'
                                            hoverTextClass='hover:text-primary'
                                        >
                                            Login
                                        </AnimatedButton>
                                    </div>
                                    <p className='text-center'>or</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {socialButtons.map(({ icon, text }) => (
                                            <button
                                                key={text}
                                                className="bg-neutral-100 px-4 py-2.5 text-center space-x-2 rounded shadow-sm hover:shadow-lg duration-200 cursor-pointer"
                                            >
                                                <FontAwesomeIcon className='text-base' icon={icon} />
                                                <span>{text}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="space-x-1 text-center pt-4">
                                        <span>Don't have an Account </span>
                                        <Link
                                            to={'/register'}
                                            className='text-primary duration-200 hover:text-yellow-500 font-bold underline'
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;