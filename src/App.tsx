import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import LandingPage from './app/LandingPage'
import LoginPage from './app/auth/login/Login'
import RegisterPage from './app/auth/register/Register'

function TitleApp() {
  const pageLocation = useLocation();
  useEffect(() => {
    const titlePage: Record<string, string> = {
      '/': 'SIMANIS - Sistem Informasi Managemen Inventaris & Sarana',
      '/auth/login': 'Login - SIMANIS | Sistem Informasi Managemen Inventaris & Sarana',
      '/auth/register': 'Register - SIMANIS | Sistem Informasi Managemen Inventaris & Sarana'
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
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
