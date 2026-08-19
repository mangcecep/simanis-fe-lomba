import SideBarAdminComponents from '../../components/admin_components/SideBarAdmin'
import NavbarAdminComponents from '../../components/admin_components/NavbarAdmin'
import imageExample from '../../../assets/image/epson-l4150.webp'
import { HugeiconsIcon } from '@hugeicons/react'
import { Search } from '@hugeicons/core-free-icons'

const InventoryAdminPage = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen flex overflow-hidden">
      <SideBarAdminComponents/>
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <NavbarAdminComponents/>
        <section className="flex-1 min-h-0 overflow-y-auto">
          <div className="top-main flex flex-col">
            <div className="wrapper-search bg-[#FFFFFF] p-4 border-b border-[#d2d2d2]">
              <div className="search-box bg-[#c2c2c238] flex gap-2 px-4 py-2 border border-[#dddddd] items-center rounded hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-200">
                <HugeiconsIcon icon={Search} size={20}/>
                <input type="text" name="search" id="search" placeholder='Cari barang...' className="outline-none w-full"/>
              </div>
            </div>
            <div className="category-button bg-[#FFFFFF] flex items-center justify-between p-4 border-b border-[#d2d2d2]">
              <div className="left flex gap-3 items-center">
                <button className="hover:bg-normal-hover-yellow px-6 py-2 text-[13px] rounded-full hover:text-[#FFFFFF] border border-[#bfbfbf] hover:border-normal-hover-yellow transition-all duration-200 cursor-pointer">Semua</button>
                <button className="hover:bg-normal-hover-yellow px-6 py-2 text-[13px] rounded-full hover:text-[#FFFFFF] border border-[#bfbfbf] hover:border-normal-hover-yellow transition-all duration-200 cursor-pointer">Elektronik</button>
                <button className="hover:bg-normal-hover-yellow px-6 py-2 text-[13px] rounded-full hover:text-[#FFFFFF] border border-[#bfbfbf] hover:border-normal-hover-yellow transition-all duration-200 cursor-pointer">Baju</button>
                <button className="hover:bg-normal-hover-yellow px-6 py-2 text-[13px] rounded-full hover:text-[#FFFFFF] border border-[#bfbfbf] hover:border-normal-hover-yellow transition-all duration-200 cursor-pointer">Alat Kebersihan</button>
                <button className="hover:bg-normal-hover-yellow px-6 py-2 text-[13px] rounded-full hover:text-[#FFFFFF] border border-[#bfbfbf] hover:border-normal-hover-yellow transition-all duration-200 cursor-pointer">ToolKit</button>
              </div>
            </div>
          </div>
          <div className="main-card p-5 grid grid-cols-5 gap-5">
            <div className="card bg-[#FFFFFF] w-70 border flex flex-col gap-4 p-4 hover:border-normal-hover-yellow hover:shadow-md hover:-translate-y-2 rounded-lg border-[#cdcdcd] transition-all duration-300">
              <div className="image-inventory bg-[#999999] overflow-hidden rounded-md w-full h-50 shadow shadow-[#b7b7b7]">
                <img src={imageExample} alt="Sementara" className="w-full h-full"/>
              </div>
              <div className="text flex flex-col gap-3">
                <span className="flex justify-center">
                  <h1 className="font-semibold text-[16px]">Proyektor Epson L410</h1>
                </span>
                <p className="text-[13px] font-medium text-[#6f6f6f]"><span>Kategori:</span> Elektronik</p>
                <p className="text-[13px] font-medium text-[#6f6f6f]"><span>Jumlah:</span> 10/10</p>
              </div>
              <hr className="border-[#cacaca]"/>
              <span className="flex justify-end">
                <button className="text-[12px] font-medium cursor-pointer hover:text-normal-hover-yellow transition-all duration-200">Lihat Detail</button>
              </span>
            </div>
            <div className="card relative bg-[#FFFFFF] w-70 cursor-not-allowed overflow-hidden border flex flex-col gap-4 p-4 rounded-lg border-[#cdcdcd]">
              <div className="image-inventory bg-[#999999] overflow-hidden rounded-md w-full h-50 shadow shadow-[#b7b7b7]">
                <img src={imageExample} alt="Sementara" className="w-full h-full"/>
              </div>
              <div className="text flex flex-col gap-3">
                <span className="flex justify-center">
                  <h1 className="font-semibold text-[16px]">Proyektor Epson L410</h1>
                </span>
                <p className="text-[13px] font-medium text-[#6f6f6f]"><span>Kategori:</span> Elektronik</p>
                <p className="text-[13px] font-medium text-[#6f6f6f]"><span>Jumlah:</span> 0/10</p>
              </div>
              <hr className="border-[#cacaca]"/>
              <span className="flex justify-end">
                <button className="text-[12px] font-medium cursor-pointer hover:text-normal-hover-yellow transition-all duration-200">Lihat Detail</button>
              </span>
              <div className="not-ready-stock-layer absolute flex justify-center items-center bg-[#00000099] w-full h-full left-0 top-0">
                <h1 className="text-[18px] font-semibold text-[#FFFFFF]">Tidak Tersedia</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default InventoryAdminPage
