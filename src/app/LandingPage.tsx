import { useState, useEffect } from 'react'
import logoApp from '../assets/icon/simanis-blue-text.svg'
import slideImage1 from '../assets/image/simanis-storage-image.png'
import slideImage2 from '../assets/image/simanis-school-management.png'
import slideImage3 from '../assets/image/simanis-company-management.png'

const imagePaths = [
  slideImage1,
  slideImage2,
  slideImage3
]

const LandingPage = () => {
  const [current, setCurrent] = useState(0);
  //Animation Hero Background Fade In & Out
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagePaths.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="main-body bg-[#FFFFFF] min-h-screen">
        <nav className="sticky top-0 flex bg-[#FFFFFF] justify-between items-center px-5 py-3 border-b z-9999">
          <div className="logo">
            <a href="/">    
              <img src={logoApp} alt="SIMANIS Blue Text Logo" className="w-30"/>
            </a>
          </div>
          <div className="menu-links flex gap-5">
            <a href="/" className="text-[14px] text-[#44474E] hover:text-[#001d74] transition-all duration-300">Beranda</a>
            <a href="#" className="text-[14px] text-[#44474E] hover:text-[#001d74] transition-all duration-300">Fitur</a>
            <a href="#" className="text-[14px] text-[#44474E] hover:text-[#001d74] transition-all duration-300">Tentang</a>
            <a href="#" className="text-[14px] text-[#44474E] hover:text-[#001d74] transition-all duration-300">Kontak</a>
          </div>
          <div className="login-button">
            <a href="/auth/login" className="text-[15px] flex gap-1 items-center text-[#FFFFFF] bg-[#001d74] px-6 py-2 rounded hover:bg-[#001553] transition-all duration-300">Get Started</a>
          </div>
        </nav>
        <main className="flex flex-col overflow-auto">
          <section className="relative overflow-hidden h-130 w-full flex justify-center items-center p-10">
            <div className="absolute inset-0">
              {imagePaths.map((image, index) => (
                <img key={image} src={image} alt={`Slide ${index + 1}`} className={`absolute w-full h-full object-cover transition-opacity duration-3000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}/>
              ))}
              <span className="absolute bottom-0 left-0 w-full h-full opacity-65 bg-[#bcbcbc]"></span>
            </div>
            <div className="hero-text relative z-10 flex flex-col gap-3 text-center w-200">
              <h1 className="text-[40px] text-[#000000] font-bold">Sistem Managemen Inventaris & Sarana</h1>
              <p className="text-[14px] text-[#333333]">Membantu mengelola barang inventaris sekolah dan perusahaan secara real time, cepat dan teratur. Dapat melihat status barang tersedia, dipinjam, dan tidak tersedia. Semua dilakukan hanya dalam satu klik saja. Daftar dan coba mengelola barang Inventaris dan Sarana Perusahaan/Sekolah anda.</p>
              <div className="action-button flex gap-4 justify-center items-center mt-5">
                <a href="#" className="text-[15px] w-45 bg-[#001d74] px-4 py-2 font-semibold rounded text-[#FFFFFF] hover:bg-[#001553] transition-all duration-300">Daftar Sekarang</a>
                <a href="#" className="text-[15px] w-45 border px-4 border-[#001d74] py-2 rounded font-semibold text-[#001d74] hover:border-[#ffea00] hover:text-[#ffea00] transition-all duration-300">Lihat Selengkapnya</a>
              </div>
            </div>
          </section>
          <div className="explanation bg-[#FFFFFF] w-full flex flex-col gap-7 justify-center items-center py-15 px-10">
            <h1 className="text-[30px] font-bold text-[#001d74]">Solusi Managemen Terpadu untuk Sekolah Masa Depan</h1>
            <p className="text-center text-[15px] text-[#000000] w-250">
              <span className="font-bold">SIMANIS</span> hadir sebagai platform revolusioner yang mengintegrasikan manajemen inventaris dan
              sistem informasi sekolah dalam satu ekosistem digital. Kami berfokus pada peningkatan efisiensi
              operasional dan akurasi data, memungkinkan institusi pendidikan untuk beralih dari proses
              manual yang lambat menuju tata kelola yang cerdas, transparan, dan terukur. Dengan teknologi
              terkini, kami memastikan setiap aset dan data siswa dikelola dengan presisi akademik yang
              tinggi.
            </p>
            <span className="block w-20 h-1 bg-[#ffea00] rounded-full"></span>
          </div>
        </main>
      </div>
  )
}

export default LandingPage