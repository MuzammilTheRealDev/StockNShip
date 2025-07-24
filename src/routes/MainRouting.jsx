import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import PageLoader from '../components/layout/PageLoader'
const HomePage = lazy(() => import('../features/home/Index'))
const ServicesPage = lazy(() => import('../features/services/Index'))
const ServiceDetailPage = lazy(() => import('../features/services/ServiceDetailPage'))
const PricingPage = lazy(() => import('../features/Pricing/Index'))
const HowItWorksPage = lazy(() => import('../features/HowItWorks/Index'))
const AboutUsPage = lazy(() => import('../features/About/Index'))
const ContactUsPage = lazy(() => import('../features/Contact/Index'))
const Login = lazy(() => import('../features/Auth/Login'))
const Register = lazy(() => import('../features/Auth/Register'))
const NotFound = lazy(() => import('../components/layout/NotFound'))

const MainRouting = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='' element={<HomePage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/service-detail/:slug' element={<ServiceDetailPage />} />
                    <Route path='/pricing' element={<PricingPage />} />
                    <Route path='/how-it-works' element={<HowItWorksPage />} />
                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/contact-us' element={<ContactUsPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default MainRouting
