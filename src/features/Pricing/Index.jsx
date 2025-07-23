import BreadCrum from "../../components/layout/BreadCrum"
import FAQ from "../../components/layout/FAQ"
import SEO from "../../components/layout/SEO"
import Testimonials from "../../components/layout/Testimonials"
import PricingForm from "./PricingForm"

const Index = () => {
    return (
        <>
            <SEO
                title="Pricing"
                description="Get your free quote from us today"
                url="https://stocknship.com/pricing"
                image="https://stocknship.com/images/price.svg"
            />
            <BreadCrum title={'Pricing'} />
            <PricingForm />
            <Testimonials />
            <FAQ />
        </>
    )
}

export default Index