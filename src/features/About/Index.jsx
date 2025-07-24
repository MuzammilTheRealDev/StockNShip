import BreadCrum from "../../components/layout/BreadCrum"
import SEO from "../../components/layout/SEO"
import Testimonials from "../../components/layout/Testimonials"
import CTA2 from "../home/CTA2"
import AboutContent from "./AboutContent"
import OurMission from "./OurMission"
import WhyUs from "./WhyUs"

const Index = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Explore more about us and our bussiness"
                url="https://stocknship.com/about-us"
                image="https://stocknship.com/images/about.svg"
            />
            <BreadCrum title={'About Us'} />
            <AboutContent />
            <OurMission />
            <WhyUs />
            <Testimonials />
            <CTA2 />
        </>
    )
}

export default Index