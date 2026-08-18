import { HugeiconsIcon } from '@hugeicons/react'
import { Search, UserShield01Icon } from '@hugeicons/core-free-icons'
import SideBarSuperAdminComponents from '../../components/super_admin_components/SideBarSuperAdmin'
import NavbarSuperAdminComponents from '../../components/super_admin_components/NavbarSuperAdmin'
import ChartComponents from '../../components/super_admin_components/Chart'

const DashboardSuperAdminPage = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen flex overflow-hidden">
      <SideBarSuperAdminComponents/>
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <NavbarSuperAdminComponents/>
        <section className="flex-1 min-h-0 overflow-y-auto p-5 flex flex-col gap-5">
          <div className="stats-card flex gap-4">
            <div className="card bg-[#FFFFFF] p-5 w-full flex flex-col gap-5 border rounded-sm shadow border-[#d2d1d1]">
              <div className="title-card flex items-center gap-4">
                <span className="bg-[#ffeb7c65] p-2 rounded-md text-normal-yellow shadow">
                  <HugeiconsIcon icon={UserShield01Icon}/>
                </span>
                <h1 className="text-[16px] font-semibold">Admin</h1>
              </div>
              <div className="count-admin">
                <p className="text-[28px] font-bold">5</p>
              </div>
            </div>
            <div className="card bg-[#FFFFFF] p-5 w-full flex flex-col gap-5 border rounded-sm shadow border-[#d2d1d1]">
              <div className="title-card flex items-center gap-4">
                <span className="bg-[#ffeb7c65] p-2 rounded-md text-normal-yellow shadow">
                  <HugeiconsIcon icon={UserShield01Icon}/>
                </span>
                <h1 className="text-[16px] font-semibold">Barang Tersedia</h1>
              </div>
              <div className="count-admin">
                <p className="text-[28px] font-bold">345</p>
              </div>
            </div>
            <div className="card bg-[#FFFFFF] p-5 w-full flex flex-col gap-5 border rounded-sm shadow border-[#d2d1d1]">
              <div className="title-card flex items-center gap-4">
                <span className="bg-[#3c4a7277] p-2 rounded-md text-normal-navy shadow">
                  <HugeiconsIcon icon={UserShield01Icon}/>
                </span>
                <h1 className="text-[16px] font-semibold">Barang Dipinjam</h1>
              </div>
              <div className="count-admin">
                <p className="text-[28px] font-bold">20</p>
              </div>
            </div>
          </div>
          <div className="wrapper flex gap-5 min-w-0">
            <div className="wrapper flex-1 min-w-0 flex flex-col gap-5">
              <div className="chart-section bg-[#FFFFFF] p-5 h-85 w-full border border-[#d2d1d1] rounded-sm">
                <ChartComponents/>
              </div>
              <div className="search-assets bg-white border p-5 flex flex-col gap-4 border-[#d2d1d1] rounded-sm">
                <div className="search-input bg-[#FFFFFF] px-4 py-2 gap-3 flex items-center border border-[#d2d1d1] rounded-sm shadow hover:border-normal-active-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                  <HugeiconsIcon icon={Search} size={20}/>
                  <input type="text" name="search_assets" id="searchAssets" placeholder='Cari barang...' className="outline-none w-full"/>
                </div>
                <div className="table-data-assets overflow-x-auto border border-[#d2d1d1] rounded-sm shadow">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#fafafa] border-b border-[#e5e5e5]">
                        <th className="px-5 py-3 text-center text-[12px] font-semibold text-[#666] uppercase tracking-wide">ID</th>
                        <th className="px-5 py-3 text-center text-[12px] font-semibold text-[#666] uppercase tracking-wide">NAMA BARANG</th>
                        <th className="px-5 py-3 text-center text-[12px] font-semibold text-[#666] uppercase tracking-wide">KATEGORI</th>
                        <th className="px-5 py-3 text-center text-[12px] font-semibold text-[#666] uppercase tracking-wide">JUMLAH</th>
                        <th className="px-5 py-3 text-center text-[12px] font-semibold text-[#666] uppercase tracking-wide">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key="" className="border-b border-[#eeeeee] hover:bg-[#fafafa] transition-colors">
                        <td className="px-5 py-4 text-[13px] text-center font-medium text-[#555]">001</td>
                        <td className="px-5 py-4 text-[13px] text-center font-medium text-[#555]">Proyektor Epson EB-X06</td>
                        <td className="px-5 py-4 text-[13px] text-center font-medium text-[#555]">Elektronik</td>
                        <td className="px-5 py-4 text-[13px] text-center font-medium text-[#555]">20/20</td>
                        <td className="px-5 py-4 text-[13px] text-center font-medium text-[#555]">Tersedia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="borrowing-section overflow-hidden flex flex-col gap-5 bg-[#FFFFFF] p-5 w-80 border border-[#d2d1d1] rounded-sm">
              <div className="title flex flex-col gap-3">
                <h1 className="font-bold text-[16px]">Peminjaman Hari Ini</h1>
                <span>
                  <p className="text-[#616161]">17 Agustus 1945</p>
                </span>
              </div>
              <div className="card-wrapper overflow-auto h-full flex flex-col gap-2">
                <div className="card-borrowed border flex flex-col gap-2 border-[#d2d1d1] rounded-sm shadow p-3">
                  <h1 className="font-semibold text-[15px]">Proyektor</h1>
                  <p className="font-medium text-[#828080] text-[13px]">Tiery Umar Samsudin</p>
                  <p className="font-medium text-[#828080] text-[12px]">XII-PPLG</p>
                </div>
                <div className="card-borrowed border flex flex-col gap-2 border-[#d2d1d1] rounded-sm shadow p-3">
                  <h1 className="font-semibold text-[15px]">Proyektor</h1>
                  <p className="font-medium text-[#828080] text-[13px]">Tiery Umar Samsudin</p>
                  <p className="font-medium text-[#828080] text-[12px]">XII-PPLG</p>
                </div>
                <div className="card-borrowed border flex flex-col gap-2 border-[#d2d1d1] rounded-sm shadow p-3">
                  <h1 className="font-semibold text-[15px]">Proyektor</h1>
                  <p className="font-medium text-[#828080] text-[13px]">Tiery Umar Samsudin</p>
                  <p className="font-medium text-[#828080] text-[12px]">XII-PPLG</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DashboardSuperAdminPage