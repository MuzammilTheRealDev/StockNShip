import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import AnimatedButton from '../../components/buttons/AnimatedButton';

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmission = (data) => {
        console.log("Form submitted");
        console.log(data);
        reset();
        toast.success('Message sent successfully')
    }
    const info = [
        {
            icon: faPhone,
            title: 'Contact Us',
            detail: '(310) 555-0142',
        },
        {
            icon: faEnvelope,
            title: 'Email Us',
            detail: 'info@stocknship.com',
        },
        {
            icon: faLocationDot,
            title: 'Location',
            detail: '456 Hollywood Blvd, Los Angeles, CA 90028',
        },
    ]
    return (
        <section className="pt-18 flex justify-center px-4">
            <div className="flex max-w-7xl w-full justify-between md:items-center p-4 flex-col md:flex-row gap-10">

                <div className="flex flex-col gap-7">
                    {info.map((value, index) => {
                        return <div className="flex gap-5 items-center" key={index}>
                            <div className="bg-neutral size-10 flex justify-center items-center rounded-lg drop-shadow-xl shrink-0">
                                <FontAwesomeIcon icon={value.icon} className='text-xl text-primary' />
                            </div>
                            <div className="">
                                <h1 className='font-semibold'>{value.title} </h1>
                                <p className='text-secondary/80'>{value.detail}</p>
                            </div>
                        </div>
                    })}
                </div>

                <div className="max-w-xl w-full">
                    <form onSubmit={handleSubmit(onSubmission)}>
                        <div className="flex flex-col gap-2 items-end">
                            <div className="flex w-full gap-4 mb-2 flex-col md:flex-row">
                                <div className=" w-full">
                                    <input
                                        {...register('name', { required: "Name is required" })}
                                        type="text" placeholder='Name' className='bg-[#936BE80D] p-3 w-full rounded-md focus:outline-none' />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className=" w-full">
                                    <input
                                        {...register('email', { required: "Email is required" })}
                                        type="email" placeholder='Email' className='bg-[#936BE80D] p-3 w-full rounded-md focus:outline-none' />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className=" w-full">
                                <textarea
                                    {...register('message', { required: "Message is required" })}
                                    rows={4} className='bg-[#936BE80D] w-full p-3 rounded-md focus:outline-none' placeholder='Message'></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>
                            <AnimatedButton
                                component='button'
                                type='submit'
                                bgClass="bg-primary"
                                width="w-fit px-6 cursor-pointer"
                                borderClass="border-primary border-2"
                                hoverBgClass='bg-secondary'
                                hoverTextClass='hover:text-primary'
                            >
                                Send Message
                            </AnimatedButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm