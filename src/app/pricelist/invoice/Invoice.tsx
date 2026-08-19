const InvoicePage = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FB] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-normal-navy">
              SIMANIS
            </p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">Invoice Pembayaran</h1>
          </div>
          <div className="rounded-md bg-normal-navy px-4 py-2 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-300">Status</p>
            <p className="text-sm font-semibold">Lunas</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
              Informasi Invoice
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <span>No. Invoice</span>
                <span className="font-semibold text-slate-900">INV-20260818-001</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Tanggal</span>
                <span className="font-semibold text-slate-900">18 Agustus 2026</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Metode Bayar</span>
                <span className="font-semibold text-slate-900">Gopay</span>
              </div>
            </div>
          </section>

          <section className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
              Pelanggan
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <span>Nama</span>
                <span className="font-semibold text-slate-900">Jhon Doe</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Email</span>
                <span className="max-w-45 truncate font-semibold text-slate-900">
                  user@example.com
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Sekolah</span>
                <span className="font-semibold text-slate-900">SMA Negeri 1</span>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-md border border-slate-200 bg-white">
          <div className="overflow-hidden rounded-md">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-normal-navy px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white">
              <span>Item</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Subtotal</span>
            </div>

            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-slate-200 px-4 py-4 text-sm text-slate-700">
              <span>SIMANIS Paket Tahunan</span>
              <span className="text-center">1</span>
              <span className="text-right font-semibold text-slate-900">IDR 1.500.000</span>
            </div>

            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-slate-200 px-4 py-4 text-sm text-slate-700">
              <span>PPN 11%</span>
              <span className="text-center">-</span>
              <span className="text-right font-semibold text-slate-900">IDR 165.000</span>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-col gap-3 rounded-md bg-[#F8FAFC] p-4 ring-1 ring-slate-200 sm:ml-auto sm:w-80">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Subtotal</span>
            <span>IDR 1.500.000</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>PPN</span>
            <span>IDR 165.000</span>
          </div>
          <div className="my-1 h-px bg-slate-200" />
          <div className="flex items-center justify-between text-base font-bold text-slate-900">
            <span>Total</span>
            <span>IDR 1.665.000</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-light-hover-navy active:bg-light-active-navy"
          >
            Download Invoice
          </button>
          <button
            type="button"
            className="rounded-md bg-normal-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy active:bg-normal-active-navy"
          >
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvoicePage