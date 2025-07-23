import BreadCrum from '../../components/layout/BreadCrum'
import ServicesList from './ServicesList'
import Testimonials from '../../components/layout/Testimonials'
import FAQ from '../../components/layout/FAQ'
import SEO from '../../components/layout/SEO'

const Index = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Checkout what service we provide and which one is perfect for your bussiness"
        url="https://stocknship.com/services"
        image="https://stocknship.com/images/service1.svg"
      />
      <BreadCrum title={'Services'} />
      <ServicesList />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Index