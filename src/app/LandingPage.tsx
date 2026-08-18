import fluidBackgroundHero from '../assets/image/hero-section-background.jpeg'
import logoApp from '../assets/icon/simanis-white-text-logo.svg'

const LandingPage = () => {
  return (
    <div className="main-body min-h-screen bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${fluidBackgroundHero})`}}>
      <nav className="flex items-center justify-between px-5 py-3">
        <div>
          <img src={logoApp} alt="" width={170}/>
        </div>
        <div className="menu-links flex items-center gap-6 font-semibold">
          <a href="/" className="text-[#FFFFFF]">Beranda</a>
          <a href="#" className="text-[#FFFFFF]">Fitur</a>
          <a href="#" className="text-[#FFFFFF]">Tentang</a>
          <a href="#" className="text-[#FFFFFF]">Langganan</a>
        </div>
        <div>
          <a href="/auth/login" className="text-[#FFFFFF] font-medium border px-4 py-2 rounded hover:bg-[#FFFFFF] hover:border-[#FFFFFF] hover:text-normal-yellow transition-all duration-300">Coba Gratis</a>
        </div>
      </nav>
      <main>
        <section className="flex flex-col justify-center items-center h-70">
          <div className="text flex flex-col gap-5 justify-center items-center">
            <h1 className="text-[#FFFFFF] font-bold text-[40px]">Rapih, Tertata, dan Aman</h1>
            <p className="text-[17px] font-medium text-[#FFFFFF]">Satu platform simple untuk mencatat, melacak, dan mengontrol seluruh barang operasional secara real-time</p>
          </div>
        </section>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default LandingPage