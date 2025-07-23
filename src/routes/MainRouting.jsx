import { Route, Routes } from 'react-router-dom'
import HomePage from '../features/home/Index'
import ServicesPage from '../features/services/Index'
import ServiceDetailPage from '../features/services/ServiceDetailPage'
import PricingPage from '../features/Pricing/Index'
import HowItWorksPage from '../features/HowItWorks/Index'
import AboutUsPage from '../features/About/Index'
import ContactUsPage from '../features/Contact/Index'
import NotFound from '../components/layout/NotFound'
import AppLayout from './AppLayout'
import Login from '../features/Auth/Login'
import Register from '../features/Auth/Register'

const MainRouting = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />} >
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
        </>
    )
}

export default MainRouting