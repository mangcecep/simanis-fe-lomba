import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { useEffect } from 'react'
import LandingPage from './app/LandingPage'
import LoginPage from './app/auth/login/Login'
import RegisterPage from './app/auth/register/Register'
import DashboardAdminPage from './app/admin/dashboard/DashboardAdmin'
import PriceListPage from './app/pricelist/PriceList'
import OtpVerificationPage from './app/auth/otp_verification/OtpVerification'
import PaymentPage from './app/pricelist/payment/Payment'
import InvoicePage from './app/pricelist/invoice/Invoice'
import DashboardSuperAdminPage from './app/super_admin/dashboard/Dashboard'
import InventorySuperAdminpage from './app/super_admin/inventory/Inventory'
import ArchiveSuperAdminPage from './app/super_admin/archive/Archive'
import ManageAccountSuperAdminPage from './app/super_admin/manage_account/ManageAccount'
import BorrowedSuperAdminPage from './app/super_admin/borrowed/Borrowed'
import SchoolRegistrationPage from './app/auth/school-registration/SchoolRegistration'

function TitleApp() {
  const pageLocation = useLocation();
  useEffect(() => {
    const titlePage: Record<string, string> = {
      '/': 'SIMANIS - Sistem Informasi Managemen Inventaris Sekolah',
      '/pricelist' : 'Pricelist - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',
      '/pricelist/payment' : 'Pembayaran - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',
      '/pricelist/invoice' : 'Invoice - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',

      '/auth/login': 'Login - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',
      '/auth/register': 'Register - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',
      '/admin/dashboard' : 'Dashboard - Admin | SIMANIS - Sistem Informasi Managemen Inventaris Sekolah',
      '/auth/otp_verification' : 'Verifikasi Kode OTP - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',
      '/auth/school-registration' : 'Data Sekolah - SIMANIS | Sistem Informasi Managemen Inventaris Sekolah',

      '/super_admin/dashboard' : 'Dashboard - Super Admin | SIMANIS -Sistem Informasi Managemen Inventaris Sekolah',
      '/super_admin/aset' : 'Aset - Super Admin | SIMANIS -Sistem Informasi Managemen Inventaris Sekolah',
      '/super_admin/manage_account' : 'Kelola Akun - Super Admin | SIMANIS -Sistem Informasi Managemen Inventaris Sekolah',
      '/super_admin/borrowed' : 'Peminjaman - Super Admin | SIMANIS -Sistem Informasi Managemen Inventaris Sekolah',
      '/super_admin/archive' : 'Arsip - Super Admin | SIMANIS -Sistem Informasi Managemen Inventaris Sekolah',
    }
    document.title = titlePage[pageLocation.pathname] ?? 'SIMANIS - Sistem Informasi Managemen Inventaris Sekolah'
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
        <Route path='/pricelist/payment' element={<PaymentPage/>}/>
        <Route path='/pricelist/invoice' element={<InvoicePage/>}/>

        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>
        <Route path='/auth/otp_verification' element={<OtpVerificationPage/>}/>
        <Route path='/auth/school-registration' element={<SchoolRegistrationPage/>}/>

        <Route path='/super_admin/dashboard' element={<DashboardSuperAdminPage/>}/>
        <Route path='/super_admin/inventory' element={<InventorySuperAdminpage/>}/>
        <Route path='/super_admin/manage_account' element={<ManageAccountSuperAdminPage/>}/>
        <Route path='/super_admin/borrowed' element={<BorrowedSuperAdminPage/>}/>
        <Route path='/super_admin/archive' element={<ArchiveSuperAdminPage/>}/>

        <Route path='/admin/dashboard' element={<DashboardAdminPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
