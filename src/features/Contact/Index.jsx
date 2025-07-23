import BreadCrum from "../../components/layout/BreadCrum"
import FAQ from "../../components/layout/FAQ"
import SEO from "../../components/layout/SEO"
import ContactForm from "./ContactForm"

const Index = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Have a query? Don't hesitate to reach out to us"
                url="https://stocknship.com/contact-us"
                image="https://stocknship.com/images/contact.svg"
            />
            <BreadCrum title={'Contact Us'} />
            <ContactForm />
            <FAQ />
        </>
    )
}

export default Index