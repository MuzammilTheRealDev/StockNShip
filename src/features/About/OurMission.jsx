const OurMission = () => {
    return (
        <section className='py-10 flex items-center justify-center px-4'>
            <div className="bg-neutral max-w-7xl w-full rounded-2xl p-10 relative overflow-hidden">
                <div className="max-w-5xl flex items-center flex-col gap-5 mx-auto">
                    <h1 className='text-3xl font-bold text-center'>Our Mission</h1>
                    <p className='text-center font-semibold text-lg'>To empower global sellers with a seamless U.S.-based logistics solution.</p>
                    <p className='text-center'>
                        Our mission is to make e-commerce logistics easy, affordable, and reliable—so sellers from underserved regions can compete on a global level without worrying about storage, returns, or fulfillment delays. We’re here to simplify your operations and help you grow confidently in the U.S. market.
                    </p>
                </div>
                <div className="absolute -bottom-14 -left-7">
                    <img src="/icons/target.svg" aria-hidden="true" className='size-64' alt="target-icon" />
                </div>
            </div>
        </section>
    )
}

export default OurMission