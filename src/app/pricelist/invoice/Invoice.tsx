import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft02Icon, CheckmarkCircle01Icon, Clock01Icon, Download04Icon, RefreshIcon } from '@hugeicons/core-free-icons'
import { useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useInvoiceReq, useOrderStatusReq } from './-mutation'
import type { PaymentInstruction } from '../../../types/pricing.types'

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const formatDate = (date: string | null) => {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

const formatTierName = (packageType: string) => {
  if (packageType === 'SIMANIS_TRIAL') return 'Uji Coba'
  if (packageType === 'SIMANIS_MONTHLY') return 'Bulanan'
  if (packageType === 'SIMANIS_ANNUAL' || packageType === 'SIMANIS_YEARLY') return 'Tahunan'
  if (packageType === 'SIMANIS_LIFETIME') return 'Seumur Hidup'
  return ''
}

const methodLabel = (method?: string | null) => {
  const map: Record<string, string> = { qris: 'QRIS', gopay: 'GoPay', ovo: 'OVO', dana: 'DANA' }
  return method ? (map[method.toLowerCase()] ?? method) : '-'
}

const statusBadge = (status: string) => {
  if (status === 'SUCCESS') {
    return {
      label: 'Lunas',
      className: 'bg-emerald-600',
    }
  }
  if (status === 'PENDING') {
    return {
      label: 'Menunggu Pembayaran',
      className: 'bg-amber-500',
    }
  }
  if (status === 'FAILED') {
    return {
      label: 'Pembayaran Gagal',
      className: 'bg-red-600',
    }
  }
  if (status === 'EXPIRED') {
    return {
      label: 'Kedaluwarsa',
      className: 'bg-red-600',
    }
  }
  if (status === 'CANCELLED') {
    return {
      label: 'Dibatalkan',
      className: 'bg-red-600',
    }
  }
  return {
    label: status,
    className: 'bg-normal-navy',
  }
}

const InvoicePage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const orderId = searchParams.get('order') ?? ''
  const invoiceMutation = useInvoiceReq(orderId)
  const statusMutation = useOrderStatusReq()
  const invoiceMutate = invoiceMutation.mutate
  const statusMutate = statusMutation.mutate

  const localInstruction = useMemo(() => {
    if (!orderId) return null
    const stored = sessionStorage.getItem(`simanis_order_${orderId}`)
    if (!stored) return null
    try {
      return JSON.parse(stored) as PaymentInstruction
    } catch {
      return null
    }
  }, [orderId])

  useEffect(() => {
    if (!orderId) {
      navigate('/pricelist', { replace: true })
      return
    }
    invoiceMutate()
  }, [orderId, navigate, invoiceMutate])

  const invoiceStatus = invoiceMutation.data?.data.status

  useEffect(() => {
    if (!orderId || invoiceStatus !== 'PENDING') return
    const interval = setInterval(() => {
      statusMutate(orderId, {
        onSuccess: (res) => {
          if (res.data.status !== 'PENDING') {
            clearInterval(interval)
            sessionStorage.removeItem(`simanis_order_${orderId}`)
            invoiceMutate()
          }
        },
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [orderId, invoiceStatus, statusMutate, invoiceMutate])

  const invoice = invoiceMutation.data?.data

  const instruction = invoice?.instruction ?? localInstruction

  const qrSource = useMemo(() => {
    if (!instruction) return null
    if (instruction.qr_url) return instruction.qr_url
    if (instruction.qr_string) {
      return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(instruction.qr_string)}`
    }
    return null
  }, [instruction])

  const paymentUrl = instruction?.deeplink_url ?? instruction?.payment_url ?? null
  const displayMethod = methodLabel(instruction?.payment_method ?? invoice?.payment_type)

  const handleBackToDashboard = () => {
    try {
      const stored = localStorage.getItem('simanis_user')
      const user = stored ? JSON.parse(stored) : null
      if (user?.role === 'ADMIN') navigate('/admin/dashboard')
      else navigate('/super_admin/dashboard')
    } catch {
      navigate('/super_admin/dashboard')
    }
  }

  if (invoiceMutation.isPending && !invoice) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F6FB]">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <HugeiconsIcon icon={RefreshIcon} size={28} className="animate-spin" />
          <p className="text-sm font-medium">Memuat invoice...</p>
        </div>
      </div>
    )
  }

  if (!invoice) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F3F6FB]">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <p className="text-sm font-medium">Invoice tidak ditemukan.</p>
          <button
            type="button"
            onClick={() => navigate('/pricelist')}
            className="rounded-md bg-normal-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-normal-hover-navy"
          >
            Kembali ke Pricelist
          </button>
        </div>
      </div>
    )
  }

  const badge = statusBadge(invoice.status)
  const isPending = invoice.status === 'PENDING'
  const isSuccess = invoice.status === 'SUCCESS'
  const isFailed = !isPending && !isSuccess

  return (
    <div className="min-h-screen bg-[#F3F6FB] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-normal-navy">
              SIMANIS
            </p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              {isPending ? 'Instruksi Pembayaran' : 'Invoice Pembayaran'}
            </h1>
          </div>
          <div className={`rounded-md ${badge.className} px-4 py-2 text-center text-white`}>
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-300">Status</p>
            <p className="text-sm font-semibold">{badge.label}</p>
          </div>
        </div>

        {isPending && (
          <section className="mb-6 flex flex-col items-center gap-4 rounded-md bg-light-yellow p-6 ring-1 ring-normal-yellow/40">
            <div className="flex items-center gap-2 text-sm font-semibold text-normal-navy">
              <HugeiconsIcon icon={Clock01Icon} size={18} />
              Menunggu pembayaran {displayMethod}
            </div>
            {qrSource && (
              <div className="rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200">
                <img src={qrSource} alt="QR Pembayaran" width={220} height={220} className="h-52 w-52 object-contain" />
              </div>
            )}
            {paymentUrl && (
              <a
                href={paymentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-normal-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy"
              >
                Bayar via {displayMethod}
              </a>
            )}
            {!qrSource && !paymentUrl && (
              <>
                <p className="text-center text-sm text-slate-500">
                  Pembayaran akan diproses oleh {displayMethod}. Halaman ini akan otomatis memperbarui status.
                </p>
                {invoice.plan?.id && (
                  <button
                    type="button"
                    onClick={() => navigate(`/pricelist/payment?plan=${invoice.plan?.id}`)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-normal-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy"
                  >
                    Pilih Metode Pembayaran
                  </button>
                )}
              </>
            )}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <HugeiconsIcon icon={RefreshIcon} size={14} className="animate-spin" />
              Memeriksa status pembayaran secara otomatis...
            </div>
          </section>
        )}

        {isFailed && (
          <section className="mb-6 flex flex-col items-center gap-3 rounded-md bg-red-50 p-6 ring-1 ring-red-200">
            <p className="text-sm font-semibold text-red-700">
              Pembayaran {badge.label.toLowerCase()}. Silakan ulangi pembayaran.
            </p>
            <button
              type="button"
              onClick={() =>
                navigate(invoice.plan?.id ? `/pricelist/payment?plan=${invoice.plan.id}` : '/pricelist')
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-normal-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
              Ulangi Pembayaran
            </button>
          </section>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
              Informasi Invoice
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <span>No. Invoice</span>
                <span className="font-semibold text-slate-900">{invoice.invoice_number}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Tanggal</span>
                <span className="font-semibold text-slate-900">{formatDate(invoice.created_at)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Metode Bayar</span>
                <span className="font-semibold text-slate-900">{displayMethod}</span>
              </div>
              {isSuccess && (
                <div className="flex justify-between gap-3">
                  <span>Dibayar Pada</span>
                  <span className="font-semibold text-slate-900">{formatDate(invoice.paid_at)}</span>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-md bg-slate-50 p-4 ring-1 ring-slate-200">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
              Pelanggan
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <span>Nama</span>
                <span className="font-semibold text-slate-900">{invoice.user.nama_lengkap ?? '-'}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Email</span>
                <span className="max-w-[180px] truncate font-semibold text-slate-900">{invoice.user.email ?? '-'}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Sekolah</span>
                <span className="font-semibold text-slate-900">{invoice.sekolah?.nama_sekolah ?? '-'}</span>
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
              <span>{invoice.plan ? `SIMANIS ${formatTierName(invoice.plan.tier_name)}` : '-'}</span>
              <span className="text-center">1</span>
              <span className="text-right font-semibold text-slate-900">
                IDR {formatPrice(invoice.gross_amount)}
              </span>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-col gap-3 rounded-md bg-[#F8FAFC] p-4 ring-1 ring-slate-200 sm:ml-auto sm:w-80">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>Subtotal</span>
            <span>IDR {formatPrice(invoice.gross_amount)}</span>
          </div>
          <div className="my-1 h-px bg-slate-200" />
          <div className="flex items-center justify-between text-base font-bold text-slate-900">
            <span>Total</span>
            <span>IDR {formatPrice(invoice.gross_amount)}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {isSuccess && (
            <>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-light-hover-navy active:bg-light-active-navy"
              >
                <HugeiconsIcon icon={Download04Icon} size={18} />
                Download Invoice
              </button>
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-normal-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy active:bg-normal-active-navy"
              >
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
                Kembali ke Dashboard
              </button>
            </>
          )}
          {isPending && (
            <button
              type="button"
              onClick={() => navigate('/pricelist')}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-light-hover-navy active:bg-light-active-navy"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
              Kembali ke Pricelist
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvoicePage