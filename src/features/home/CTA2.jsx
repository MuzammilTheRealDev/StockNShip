import AnimatedButton from '../../components/buttons/AnimatedButton'

const CTA2 = () => {
    return (
        <section className='py-16 px-4 md:px-8'>
            <div className="bg-[url('/images/ctaBg.svg')] bg-cover bg-left lg:bg-center text-white px-4 py-10  md:p-10 max-w-7xl w-full mx-auto rounded-3xl flex flex-col gap-7 items-center">
                <h1 className='text-3xl md:text-4xl font-semibold text-center'>Ready to Streamline Your Fulfillment?</h1>
                <p className='text-lg max-w-2xl text-center'>
                    Contact us today to discuss your specific needs and discover how Awesome Solutions can optimize your logistics.
                </p>
                <AnimatedButton to='/contact-us'
                    textClass='text-secondary' width='w-55'
                    className='font-semibold text-lg py-6'
                    hoverBgClass="group-hover:bg-secondary"
                    hoverTextClass="hover:text-primary"
                    rounded='rounded-full'>
                    Contact Us today
                </AnimatedButton>
            </div>
        </section>
    )
}

export default CTA2
