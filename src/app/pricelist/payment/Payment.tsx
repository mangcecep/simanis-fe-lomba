import { Mail02Icon, User02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FB] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-normal-navy">
            Checkout
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Pembayaran Langganan</h1>
        </div>

        <div className="flex flex-col gap-5">
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Jenis Paket</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">SIMANIS Tahunan</h2>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-2xl font-black text-normal-navy">IDR 1.500.000</p>
                <p className="text-sm text-slate-500">/Tahun</p>
              </div>
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr]">
            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-slate-900">Data Pengguna</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                    Nama Lengkap
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                    <HugeiconsIcon icon={User02Icon} size={20} className="text-slate-500" />
                    <input
                      id="fullName"
                      type="text"
                      name="fullname"
                      placeholder="Masukkan nama lengkap anda"
                      className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Alamat Email
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                    <HugeiconsIcon icon={Mail02Icon} size={20} className="text-slate-500" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Masukkan alamat email anda"
                      className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs font-medium italic text-red-500">
                *Gunakan nama lengkap dan alamat email yang sudah anda daftarkan.
              </p>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">Ringkasan</h3>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between gap-3">
                  <span>Nama Lengkap</span>
                  <span className="font-medium text-slate-900">Jhon Doe</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Alamat Email</span>
                  <span className="max-w-[170px] truncate font-medium text-slate-900">
                    user@example.com
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Paket</span>
                  <span className="font-medium text-slate-900">SIMANIS Tahunan</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Metode</span>
                  <span className="font-medium text-slate-900">Gopay</span>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900">Metode Pembayaran</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">E-Wallet</label>
                <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-normal-navy focus:bg-white">
                  <option disabled selected>
                    Pilih metode
                  </option>
                  <option>Gopay</option>
                  <option>Dana</option>
                  <option>OVO</option>
                  <option>ShopeePay</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">M-Banking</label>
                <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-normal-navy focus:bg-white">
                  <option disabled selected>
                    Pilih bank
                  </option>
                  <option>BCA</option>
                  <option>BNI</option>
                  <option>BRI</option>
                  <option>Mandiri</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Supermarket</label>
                <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-normal-navy focus:bg-white">
                  <option disabled selected>
                    Pilih gerai
                  </option>
                  <option>Indomaret</option>
                  <option>Alfamart</option>
                </select>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Jenis Paket Langganan</span>
                <span className="font-medium text-slate-900">SIMANIS Tahunan</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Harga Paket</span>
                <span className="font-medium text-slate-900">IDR 1.500.000</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pajak / PPN</span>
                <span className="font-medium text-slate-900">+11% (IDR 165.000)</span>
              </div>
              <div className="my-2 h-px bg-slate-200" />
              <div className="flex items-center justify-between text-base font-bold text-slate-900">
                <span>Total</span>
                <span>IDR 1.665.000</span>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/pricelist"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-light-hover-navy active:bg-light-active-navy"
            >
              Kembali
            </a>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-xl bg-normal-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy active:bg-normal-active-navy"
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage