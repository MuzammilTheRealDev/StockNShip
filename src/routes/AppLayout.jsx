import Navbar from '../components/layout/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import { useLenis } from '../hooks/useLenis'
import { useEffect } from 'react'

const AppLayout = () => {
    const lenis = useLenis();
    const location = useLocation();

    useEffect(() => {
        lenis.current?.scrollTo(0, { immediate: true })
    }, [location.pathname]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout