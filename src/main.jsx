import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </HelmetProvider>
)
