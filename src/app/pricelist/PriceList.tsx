import { useEffect } from "react";
import { usePricelistReq } from "./-mutation";
import { useNavigate } from "react-router-dom";

const PriceListPage = () => {
  const navigate = useNavigate()
  const tierDescription: Record<string, string> = {
    SIMANIS_TRIAL: 'Nikmati kesempatan untuk mencoba SIMANIS secara gratis dan rasakan kemudahan dalam mengelola inventaris serta sarana sekolah secara lebih terorganisir. Paket ini cocok bagi sekolah yang ingin mengenal fitur dan alur kerja SIMANIS sebelum beralih ke paket berlangganan.',
    SIMANIS_MONTHLY: 'Pilihan fleksibel bagi sekolah yang ingin menggunakan SIMANIS tanpa komitmen jangka panjang. Dengan paket bulanan, sekolah dapat mengelola inventaris, sarana, dan berbagai kebutuhan manajemen secara lebih mudah dan terstruktur dengan biaya yang dapat disesuaikan setiap bulannya.',
    SIMANIS_ANNUAL: 'Pilihan terbaik bagi sekolah yang ingin menggunakan SIMANIS secara berkelanjutan selama satu tahun dengan biaya yang lebih hemat. Paket ini memberikan akses untuk membantu sekolah mengelola inventaris dan sarana secara lebih efektif, terorganisir, dan efisien dalam mendukung aktivitas operasional sehari-hari.',
    SIMANIS_YEARLY: 'Pilihan terbaik bagi sekolah yang ingin menggunakan SIMANIS secara berkelanjutan selama satu tahun dengan biaya yang lebih hemat. Paket ini memberikan akses untuk membantu sekolah mengelola inventaris dan sarana secara lebih efektif, terorganisir, dan efisien dalam mendukung aktivitas operasional sehari-hari.',
    SIMANIS_LIFETIME: 'Solusi bagi sekolah yang menginginkan akses SIMANIS dalam jangka panjang tanpa perlu melakukan pembayaran berlangganan secara berkala. Dengan satu kali pembayaran, sekolah dapat menggunakan sistem untuk membantu mengelola inventaris dan sarana secara lebih terstruktur tanpa batas waktu.',
  };
  const formatDuration = (duration: number | null) => {
    if (duration === null) {
      return "Seumur Hidup";
    }
    if (duration === 30) {
      return "Bulanan";
    }
    if (duration === 365) {
      return "Tahunan";
    }
    if (duration === 14) {
      return "Uji Coba"
    }
    return "-";
  };
  const formatTierName = (packageType: string) => {
    if(packageType === 'SIMANIS_TRIAL'){
      return 'Uji Coba'
    }
    if(packageType === 'SIMANIS_MONTHLY'){
      return 'Bulanan'
    }
    if(packageType === 'SIMANIS_ANNUAL' || packageType === 'SIMANIS_YEARLY'){
      return 'Tahunan'
    }
    if(packageType === 'SIMANIS_LIFETIME'){
      return 'Seumur Hidup'
    }
    return ''
  }
  const textButtonName = (buttonName: string) => {
    if(buttonName === 'SIMANIS_TRIAL'){
      return 'Uji Coba'
    }
    if(buttonName === 'SIMANIS_MONTHLY'){
      return 'Bulanan'
    }
    if(buttonName === 'SIMANIS_ANNUAL' || buttonName === 'SIMANIS_YEARLY'){
      return 'Tahunan'
    }
    if(buttonName === 'SIMANIS_LIFETIME'){
      return 'Seumur Hidup'
    }
    return ''
  }
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price)
  }
  const {mutate, data} = usePricelistReq()
  useEffect(() => {
    mutate()
  }, [mutate])
  const pricelists = data?.data ?? [];
  return (
    <div className="min-h-screen bg-[#F7F9FC] px-4 py-10 text-slate-800 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-normal-navy">
            SIMANIS
          </p>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Paket Langganan
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Pilih paket yang paling sesuai dengan kebutuhan sekolah Anda. SIMANIS hadir untuk membantu
            mengelola inventaris dengan lebih mudah, cepat, dan terorganisir.
          </p>
          {pricelists.map((pricelist) => (
            <div
              key={pricelist.id}
              className={`mt-6 rounded-xl p-5 hover:-translate-y-2 hover:shadow-md shadow-[#a1a1a1] transition-all duration-300 ${
                pricelist.tier_name === 'SIMANIS_ANNUAL' || pricelist.tier_name === "SIMANIS_YEARLY"
                  ? "border-2 border-normal-navy bg-white"
                  : "bg-[#F8FAFC] ring-1 ring-slate-200"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Jenis Paket
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    SIMANIS {formatTierName(pricelist.tier_name)}
                  </h2>
                </div>
                {pricelist.tier_name === "SIMANIS_ANNUAL" || pricelist.tier_name === "SIMANIS_YEARLY" && (
                  <span className="rounded-full bg-normal-navy px-6 py-2 text-[13px] font-semibold text-white">
                    Paket Populer
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="text-3xl font-black text-slate-900">
                  Rp {formatPrice(pricelist.price)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {formatDuration(pricelist.duration)}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                {tierDescription[pricelist.tier_name]}
              </p>
              <hr className="border-[#d1d0d0] my-3"/>
              <span className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate(`/payment/${pricelist.id}`)}
                  className="bg-normal-navy text-[#FFFFFF] px-6 py-3 text-[13px] rounded-full hover:bg-normal-hover-navy cursor-pointer transition-all duration-300"
                >
                  Mulai Paket {textButtonName(pricelist.tier_name)}
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PriceListPage