import logoApp from '../../../assets/icon/simanis-black-text-logo.svg'
import { HugeiconsIcon } from '@hugeicons/react'
import { Archive03Icon, DashboardSquare02Icon, Logout02Icon, Package02Icon, ScanIcon, UserGroupIcon } from '@hugeicons/core-free-icons'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MenuLinks = [
    {href: '/admin/dashboard', label: 'Dashboard', icon: DashboardSquare02Icon},
    {href: '/admin/inventory', label: 'Data Inventaris', icon: Package02Icon},
    {href: '/admin/manage_account', label: 'Kelola akun', icon: UserGroupIcon},
    {href: '/admin/borrowed', label: 'Peminjaman', icon: ScanIcon},
    {href: '/admin/archive', label: 'Arsip', icon: Archive03Icon},
]

const SideBarAdminComponents = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('jwt_token')
        navigate('/auth/login')
    }
  return (
    <aside className="bg-[#FFFFFF] h-screen w-75 shrink-0 shadow-md overflow-hidden shadow-[#a7a7a7] flex justify-between flex-col z-50">
        <div className="sidebar-header">
            <div className="logo flex justify-center p-3 border-b border-[#d6d6d6]">
                <img src={logoApp} alt="SIMANIS Logo App" width={165} height={165}/>
            </div>
            <div className="menu-links my-5 flex flex-col gap-1">     
                {MenuLinks.map((menu) => (
                    <NavLink key={menu.href} to={menu.href} className={({ isActive }) => `flex items-center gap-2 px-4 py-3 hover:text-[#FFFFFF] font-medium ${isActive ? 'bg-darker-blue text-[#FFFFFF]' : 'hover:bg-darker-blue text-[#000000]'} transition-all duration-200`}>
                        {({ isActive }) => (
                            <>
                                <HugeiconsIcon icon={menu.icon} size={22} className={`${isActive ? 'text-normal-yellow' : 'text-[#000000]'}`}/>
                                {menu.label}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
        <div className="account-section p-4">
            <button type='button' onClick={handleLogout} className="flex items-center gap-2 justify-center w-full p-2 mb-3 text-[#FFFFFF] rounded bg-[#c50000] hover:bg-[#990000] cursor-pointer transition-all duration-300">Keluar <HugeiconsIcon icon={Logout02Icon} size={22}/></button>
        </div>                                                              
    </aside>
  )
}

export default SideBarAdminComponents
