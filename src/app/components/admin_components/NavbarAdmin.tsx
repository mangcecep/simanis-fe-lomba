import { BellIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useLocation } from 'react-router-dom'

const NavbarAdminComponents = () => {
    const location = useLocation()
    let navbarTitlePage
    switch (location.pathname) {
        case '/admin/dashboard':
            navbarTitlePage = 'Dashboard'
            break;
        case '/admin/inventory':
            navbarTitlePage = 'Data Inventaris'
            break;
        case '/admin/manage_account':
            navbarTitlePage = 'Kelola Akun'
            break;
        case '/admin/borrowed':
            navbarTitlePage = 'Peminjaman'
            break;
        case '/admin/archive':
            navbarTitlePage = 'Arsip'
            break;
        default:
            navbarTitlePage = 'Dashboard'
            break;
    }
  return (
    <nav className="bg-[#FFFFFF] w-full sticky top-0 z-40 px-7 py-2 flex items-center justify-between h-18 shadow shadow-[#a7a7a7]">
        <div className="title-page">
            <h1 className="text-[17px] font-semibold text-darker-blue">{navbarTitlePage}</h1>
        </div>
        <div className="right flex items-center gap-2">
            <hr className="w-px h-6 border-0 bg-[#d6d6d6] mx-2"/>
            <button type='button' className="cursor-pointer"><HugeiconsIcon icon={BellIcon} size={20}/></button>
        </div>
    </nav>
  )
}

export default NavbarAdminComponents
