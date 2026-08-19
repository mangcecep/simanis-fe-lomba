import SideBarAdminComponents from '../../components/admin_components/SideBarAdmin'
import NavbarAdminComponents from '../../components/admin_components/NavbarAdmin'
import { HugeiconsIcon } from '@hugeicons/react'
import { EditUser02Icon, Search, Trash2, UserAdd01Icon } from '@hugeicons/core-free-icons'
import { useState } from 'react'

const ManageAccountAdminPage = () => {
    const accountData = [
        {
            id: '001',
            nisn: '0082716345',
            name: 'Tiery Umar Samsudin',
            email: 'tieryumar@gmail.com',
            phone: '087724187655',
            class: 'XII-PPLG',
            role: 'User',
        },
        {
            id: '002',
            nisn: '0082716345',
            name: 'Tiery Umar Samsudin',
            email: 'tieryumar@gmail.com',
            phone: '087724187655',
            class: 'XII-PPLG',
            role: 'User',
        },
    ]
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex">
      <SideBarAdminComponents/>
      <main className="w-full flex-1">
        <NavbarAdminComponents/>
        <section className="flex-1 flex flex-col gap-5 overflow-auto p-5 h-full">
            <div className="btn-option flex items-center justify-between">
                <div className="btn-category flex items-center gap-3">
                    {/* Admin only sees User category */}
                </div>
                <div className="right flex items-center gap-4">
                    <div className="search-box">
                        <span className="flex items-center gap-2 bg-[#FFFFFF] border px-3 py-2 rounded w-80 border-[#C8C8C8] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                            <HugeiconsIcon icon={Search} size={20}/>
                            <input type="text" name="search" id="search" placeholder='Cari nama...' className="outline-none w-full text-[12px]"/>
                        </span>
                    </div>
                    <div className="create-account">
                        <button type='button' className="flex items-center gap-2 text-[#FFFFFF] bg-normal-yellow px-6 py-2 rounded-full cursor-pointer hover:bg-normal-hover-yellow transition-all duration-300">Buat Akun <HugeiconsIcon icon={UserAdd01Icon} size={20}/></button>
                    </div>
                </div>
            </div>
            <div className="table-data bg-[#FFFFFF] overflow-hidden border rounded-sm border-[#c8c8c8]">
                <table className="w-full border-collapse">
                    <thead>
                        <tr key="" className="bg-[#f7f7f7] border-b border-[#e5e5e5]">
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">ID</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">NISN</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">NAMA LENGKAP</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">EMAIL</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">NOMOR TELEPON</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">KELAS</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">ROLE</th>
                            <th className="py-3 px-2 text-center text-[#666666] font-semibold text-[13px]">OPSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountData.map((account) => (
                            <tr key={account.id} className="border-b border-[#e5e5e5]">
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.id}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.nisn}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.name}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.email}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.phone}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">{account.class}</td>
                                <td className="py-3 px-2 text-center font-medium text-[#2b2b2b]">
                                    <span className="bg-[#c9ffd5] px-4 py-0.5 rounded-full border border-[#1cc140] text-[#1cc140]">{account.role}</span>
                                </td>
                                <td className="py-2 px-2 text-center font-medium text-[#2b2b2b]">
                                    <div className="btn-opsi flex justify-center gap-2">
                                        <button type='button' title='Edit Akun' className="text-[#d5a319] cursor-pointer"><HugeiconsIcon icon={EditUser02Icon} size={19}/></button>
                                        <button type='button' title='Hapus Akun' className="text-[#FF0000] cursor-pointer"><HugeiconsIcon icon={Trash2} size={19}/></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      </main>
    </div>
  )
}

export default ManageAccountAdminPage
