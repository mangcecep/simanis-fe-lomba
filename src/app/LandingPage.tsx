import fluidBackgroundHero from '../assets/image/hero-section-background.jpeg'
import logoApp from '../assets/icon/simanis-white-text-logo.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePricelistReq } from './pricelist/-mutation'

const tierDescription: Record<string, string> = {
  SIMANIS_TRIAL: 'Coba gratis selama 14 hari dan rasakan kemudahan mengelola inventaris sekolah.',
  SIMANIS_MONTHLY: 'Fleksibel tanpa komitmen jangka panjang, bayar setiap bulan.',
  SIMANIS_ANNUAL: 'Pilihan hemat untuk penggunaan SIMANIS selama satu tahun penuh.',
  SIMANIS_YEARLY: 'Pilihan hemat untuk penggunaan SIMANIS selama satu tahun penuh.',
  SIMANIS_LIFETIME: 'Akses selamanya dengan satu kali pembayaran, tanpa biaya berkala.',
};

const formatDuration = (duration: number | null) => {
  if (duration === null) return 'Seumur Hidup'
  if (duration === 30) return 'Bulanan'
  if (duration === 365) return 'Tahunan'
  if (duration === 14) return 'Uji Coba'
  return '-'
}

const formatTierName = (packageType: string) => {
  if (packageType === 'SIMANIS_TRIAL') return 'Uji Coba'
  if (packageType === 'SIMANIS_MONTHLY') return 'Bulanan'
  if (packageType === 'SIMANIS_ANNUAL' || packageType === 'SIMANIS_YEARLY') return 'Tahunan'
  if (packageType === 'SIMANIS_LIFETIME') return 'Seumur Hidup'
  return ''
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const LandingPage = () => {
  const navigate = useNavigate()
  const { mutate, data } = usePricelistReq()

  useEffect(() => {
    mutate()
  }, [mutate])

  const pricelists = data?.data ?? []

  return (
    <div className="main-body min-h-screen">
      <div className="bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${fluidBackgroundHero})`}}>
        <nav className="flex items-center justify-between px-5 py-3">
          <div>
            <img src={logoApp} alt="" width={170}/>
          </div>
          <div className="menu-links flex items-center gap-6 font-semibold">
            <a href="/" className="text-[#FFFFFF]">Beranda</a>
            <a href="#" className="text-[#FFFFFF]">Fitur</a>
            <a href="#" className="text-[#FFFFFF]">Tentang</a>
            <a href="#langganan" className="text-[#FFFFFF]">Langganan</a>
          </div>
          <div>
            <a href="/auth/login" className="text-[#FFFFFF] font-medium border px-4 py-2 rounded hover:bg-[#FFFFFF] hover:border-[#FFFFFF] hover:text-normal-yellow transition-all duration-300">Coba Gratis</a>
          </div>
        </nav>
        <main>
          <section className="flex flex-col justify-center items-center h-screen">
            <div className="text flex flex-col gap-5 justify-center items-center">
              <h1 className="text-[#FFFFFF] font-bold text-[40px]">Rapih, Tertata, dan Aman</h1>
              <p className="text-[17px] font-medium text-[#FFFFFF]">Satu platform simple untuk mencatat, melacak, dan mengontrol seluruh barang operasional secara real-time</p>
            </div>
          </section>
        </main>
      </div>

      <section id="langganan" className="bg-[#F7F9FC] px-4 py-10 text-slate-800 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-normal-navy">SIMANIS</p>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Paket Langganan</h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Pilih paket yang sesuai dengan kebutuhan sekolah Anda. Registrasi, paket otomatis terpasang, langsung aktif.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pricelists.map((pricelist) => (
              <div
                key={pricelist.id}
                className={`rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-md shadow-[#a1a1a1] ${
                  pricelist.tier_name === 'SIMANIS_ANNUAL' || pricelist.tier_name === 'SIMANIS_YEARLY'
                    ? 'border-2 border-normal-navy bg-white'
                    : 'bg-[#F8FAFC] ring-1 ring-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold text-slate-900">SIMANIS {formatTierName(pricelist.tier_name)}</h2>
                  {(pricelist.tier_name === 'SIMANIS_ANNUAL' || pricelist.tier_name === 'SIMANIS_YEARLY') && (
                    <span className="rounded-full bg-normal-navy px-4 py-1 text-[12px] font-semibold text-white">Paket Populer</span>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-black text-slate-900">Rp {formatPrice(pricelist.price)}</p>
                  <p className="mt-1 text-sm text-slate-500">{formatDuration(pricelist.duration)}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{tierDescription[pricelist.tier_name]}</p>
                <button
                  onClick={() => navigate(localStorage.getItem('simanis_user') ? `/pricelist/payment?plan=${pricelist.id}` : `/auth/register?plan=${pricelist.id}`)}
                  className="mt-5 w-full rounded-full bg-normal-navy px-6 py-3 text-[13px] text-white hover:bg-normal-hover-navy cursor-pointer transition-all duration-300"
                >
                  Mulai Paket {formatTierName(pricelist.tier_name)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage