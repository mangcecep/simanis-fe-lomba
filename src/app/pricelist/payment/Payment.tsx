import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft02Icon, ArrowRight01Icon, QrCodeIcon, Wallet01Icon, Wallet02Icon, Money01Icon } from '@hugeicons/core-free-icons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCheckoutReq } from './-mutation'
import { usePricelistReq } from '../-mutation'
import type { CheckoutError, PaymentInstruction, PaymentMethod } from '../../../types/pricing.types'

const paymentMethods: { value: PaymentMethod; label: string; description: string; icon: typeof QrCodeIcon }[] = [
  { value: 'qris', label: 'QRIS', description: 'Scan memakai aplikasi pembayaran apa saja', icon: QrCodeIcon },
  { value: 'gopay', label: 'GoPay', description: 'Bayar lewat aplikasi Gojek', icon: Wallet01Icon },
  { value: 'ovo', label: 'OVO', description: 'Bayar lewat aplikasi OVO', icon: Wallet02Icon },
  { value: 'dana', label: 'DANA', description: 'Bayar lewat aplikasi DANA', icon: Money01Icon },
]

const formatTierName = (packageType: string) => {
  if (packageType === 'SIMANIS_TRIAL') {
    return 'Uji Coba'
  }
  if (packageType === 'SIMANIS_MONTHLY') {
    return 'Bulanan'
  }
  if (packageType === 'SIMANIS_ANNUAL' || packageType === 'SIMANIS_YEARLY') {
    return 'Tahunan'
  }
  if (packageType === 'SIMANIS_LIFETIME') {
    return 'Seumur Hidup'
  }
  return ''
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

const PaymentPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const planId = searchParams.get('plan')
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const { mutate, data } = usePricelistReq()
  const checkoutMutation = useCheckoutReq()

  useEffect(() => {
    mutate()
  }, [mutate])

  useEffect(() => {
    if (!planId) {
      navigate('/pricelist', { replace: true })
      return
    }
    if (!localStorage.getItem('jwt_token')) {
      navigate(`/auth/register?plan=${planId}`, { replace: true })
    }
  }, [planId, navigate])

  const selectedPlan = data?.data.find((pricelist) => pricelist.id === planId)

  const handleCheckout = () => {
    if (!planId || !selectedMethod) return
    setCheckoutError(null)
    checkoutMutation.mutate(
      { subscription_price_id: planId, payment_method: selectedMethod },
      {
        onSuccess: (response) => {
          const orderId = response.data.orderId
          if (response.data.requires_payment) {
            const instruction: PaymentInstruction = {
              payment_method: selectedMethod,
              qr_url: response.data.instruction?.qr_url,
              qr_string: response.data.instruction?.qr_string,
              deeplink_url: response.data.instruction?.deeplink_url,
              payment_url: response.data.instruction?.payment_url,
              expires_at: response.data.instruction?.expires_at,
            }
            sessionStorage.setItem(`simanis_order_${orderId}`, JSON.stringify(instruction))
          }
          navigate(`/pricelist/invoice?order=${orderId}`)
        },
        onError: (error) => {
          if (axios.isAxiosError<CheckoutError>(error)) {
            setCheckoutError(error.response?.data.message ?? error.message)
          } else {
            setCheckoutError(error instanceof Error ? error.message : 'Terjadi kesalahan, coba lagi.')
          }
        },
      }
    )
  }

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
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedPlan ? `SIMANIS ${formatTierName(selectedPlan.tier_name)}` : 'Memuat paket...'}
                </h2>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-2xl font-black text-normal-navy">
                  {selectedPlan ? `IDR ${formatPrice(selectedPlan.price)}` : '-'}
                </p>
                <p className="text-sm text-slate-500">
                  {selectedPlan ? (selectedPlan.duration === null ? 'Seumur Hidup' : '/Tahun') : ''}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Metode Pembayaran</h3>
              <p className="mt-1 text-sm text-slate-500">Pilih metode yang paling nyaman untuk Anda.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {paymentMethods.map((method) => {
                const isSelected = selectedMethod === method.value
                return (
                  <button
                    key={method.value}
                    type="button"
                    onClick={() => setSelectedMethod(method.value)}
                    className={`flex flex-col gap-3 rounded-xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-2 border-normal-navy bg-light-navy shadow-md'
                        : 'border border-slate-200 bg-white hover:border-normal-hover-yellow hover:bg-light-yellow'
                    }`}
                  >
                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        isSelected ? 'bg-normal-navy text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <HugeiconsIcon icon={method.icon} size={16} />
                      {method.label}
                    </span>
                    <span className="text-xs leading-5 text-slate-500">{method.description}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Jenis Paket Langganan</span>
                <span className="font-medium text-slate-900">
                  {selectedPlan ? `SIMANIS ${formatTierName(selectedPlan.tier_name)}` : '-'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Harga Paket</span>
                <span className="font-medium text-slate-900">
                  {selectedPlan ? `IDR ${formatPrice(selectedPlan.price)}` : '-'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Metode Pembayaran</span>
                <span className="font-medium text-slate-900">
                  {selectedMethod ? paymentMethods.find((method) => method.value === selectedMethod)?.label : 'Belum dipilih'}
                </span>
              </div>
              <div className="my-2 h-px bg-slate-200" />
              <div className="flex items-center justify-between text-base font-bold text-slate-900">
                <span>Total</span>
                <span>{selectedPlan ? `IDR ${formatPrice(selectedPlan.price)}` : '-'}</span>
              </div>
            </div>
          </section>

          {checkoutError && (
            <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700 ring-1 ring-red-200">
              {checkoutError}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/pricelist')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-light-hover-navy active:bg-light-active-navy"
            >
              <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
              Kembali
            </button>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={!selectedMethod || checkoutMutation.isPending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-normal-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-normal-hover-navy active:bg-normal-active-navy disabled:cursor-not-allowed disabled:opacity-60"
            >
              {checkoutMutation.isPending ? 'Memproses...' : 'Bayar'}
              {!checkoutMutation.isPending && <HugeiconsIcon icon={ArrowRight01Icon} size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage