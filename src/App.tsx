import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { useEffect } from 'react'
import LandingPage from './app/LandingPage'
import LoginPage from './app/auth/login/Login'
import RegisterPage from './app/auth/register/Register'
import DashboardAdminPage from './app/admin/dashboard/DashboardAdmin'
import VerificationEmailPage from './app/auth/register/verification_email/VerificationEmail'
import PriceListPage from './app/pricelist/PriceList'

function TitleApp() {
  const pageLocation = useLocation();
  useEffect(() => {
    const titlePage: Record<string, string> = {
      '/': 'SIMANIS - Sistem Informasi Managemen Inventaris & Sarana',
      '/pricelist' : 'Pricelist - SIMANIS | Sistem Informasi Managemen Inventaris & Sarana',
      '/auth/login': 'Login - SIMANIS | Sistem Informasi Managemen Inventaris & Sarana',
      '/auth/register': 'Register - SIMANIS | Sistem Informasi Managemen Inventaris & Sarana',
      '/admin/dashboard' : 'Dashboard - Admin | SIMANIS - Sistem Informasi Managemen Inventaris & Sarana',
      '/auth/register/verification_email' : 'Verifikasi Email | SIMANIS - Sistem Informasi Managemen Inventaris & Sarana',
    }
    document.title = titlePage[pageLocation.pathname] ?? 'SIMANIS - Sistem Informasi Managemen Inventaris & Sarana'
  }, [pageLocation.pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <TitleApp/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/pricelist' element={<PriceListPage/>}/>
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>
        <Route path='/admin/dashboard' element={<DashboardAdminPage/>}/>
        <Route path='/auth/register/verification_email' element={<VerificationEmailPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
