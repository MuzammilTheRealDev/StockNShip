import HeroSection from './HeroSection'
import Services from './Services'
import Working from './Working'
import OurClient from './OurClient'
import CTA1 from './CTA1'
import Testimonials from '../../components/layout/Testimonials'
import FAQ from '../../components/layout/FAQ'
import CTA2 from './CTA2'
import SEO from '../../components/layout/SEO'

const Index = () => {
  return (
    <>
      <SEO
        title="Stock N Ship"
        description="StockNShip is a leading prep service bussiness which help ecommerce seller to do PREP service for them and provide them place to store things"
        url="https://stocknship.com/"
        image="https://stocknship.com/images/hero.png"
      />
      <HeroSection />
      <Services />
      <Working />
      <OurClient />
      <CTA1 />
      <Testimonials />
      <FAQ />
      <CTA2 />
    </>
  )
}

export default Index