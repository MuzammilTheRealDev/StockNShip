import { useState } from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import BreadCrum from '../../components/layout/BreadCrum';
import AnimatedButton from '../../components/buttons/AnimatedButton';
import SEO from '../../components/layout/SEO';
import { formFields } from '../../content/Content';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirm_password: false
    });

    const socialButtons = [
        { icon: faGoogle, text: 'Google' },
        { icon: faFacebook, text: 'Facebook' }
    ];

    const togglePasswordVisibility = (fieldName) => {
        setShowPassword(prev => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    };

    const onSubmission = (data) => {
        console.log(data);
        reset();
        toast.success('Account created successfully');
    };

    return (
        <>
            <SEO
                title="Register"
                description="Create your account to use our service"
                url="https://stocknship.com/register"
                image="https://stocknship.com/images/register.webp"
            />
            <BreadCrum title={'Register'} />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-10 max-w-7xl w-full mx-auto">
                    <div className="flex items-center">
                        <img
                            src="/images/register.webp"
                            alt="Register Illustration"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="space-y-10 max-w-sm w-full">
                            <div className="text-center">
                                <h1 className='text-3xl font-semibold'>Create Your Account</h1>
                                <p className='text-neutral-500'>Enter your details to sign up</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmission)}>
                                <div className="text-sm space-y-4">
                                    {formFields.map(({
                                        name,
                                        fieldName,
                                        type,
                                        placeholder,
                                        isPassword,
                                        validation = { required: `Please enter ${name}` }
                                    }) => (
                                        <div key={fieldName} className="flex flex-col gap-2">
                                            <label>{name}</label>
                                            <div className="relative">
                                                <input
                                                    {...register(fieldName, validation)}
                                                    type={isPassword ?
                                                        (showPassword[fieldName] ? 'text' : 'password') :
                                                        type
                                                    }
                                                    placeholder={placeholder}
                                                    className='px-4 py-2.5 bg-neutral-100 rounded w-full pr-10'
                                                />
                                                {isPassword && (
                                                    <button
                                                        type="button"
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                        onClick={() => togglePasswordVisibility(fieldName)}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={showPassword[fieldName] ? faEyeSlash : faEye}
                                                            className="text-base"
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                            {errors[fieldName] && (
                                                <p className='text-red-500'>{errors[fieldName].message}</p>
                                            )}
                                        </div>
                                    ))}
                                    <div className="flex justify-center w-full shadow-lg">
                                        <AnimatedButton
                                            component='button'
                                            type='submit'
                                            bgClass="bg-primary"
                                            width="w-full"
                                            borderClass="border-primary border-2"
                                            hoverBgClass='bg-secondary'
                                            hoverTextClass='hover:text-primary'
                                        >
                                            Create Account
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
                                    <div className="space-x-1 text-center pt-3">
                                        <span>Already have an account </span>
                                        <Link
                                            to={'/login'}
                                            className='text-primary duration-200 hover:text-yellow-500 font-bold underline'
                                        >
                                            Login
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

export default Register;