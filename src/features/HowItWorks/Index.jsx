import BreadCrum from "../../components/layout/BreadCrum"
import SEO from "../../components/layout/SEO"
import CTA1 from "../home/CTA1"
import Timeline from "./Timeline"

const Index = () => {
    return (
        <>
            <SEO
                title="How it works"
                description="Scroll to see how our process works"
                url="https://stocknship.com/how-it-works"
                image="https://stocknship.com/images/work.svg"
            />
            <BreadCrum title={'How It Works'} />
            <Timeline />
            <CTA1 />
        </>
    )
}

export default Index