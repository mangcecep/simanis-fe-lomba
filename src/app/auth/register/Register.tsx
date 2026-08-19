import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { AlertCircleIcon, Call02Icon, CheckmarkCircle01Icon, LockPasswordIcon, Mail02Icon, User02Icon, UserAddIcon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { useRegisterReq } from './-mutation'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { usePricelistReq } from '../../pricelist/-mutation'

const formatTierName = (packageType: string) => {
  if (packageType === 'SIMANIS_TRIAL') return 'Uji Coba'
  if (packageType === 'SIMANIS_MONTHLY') return 'Bulanan'
  if (packageType === 'SIMANIS_ANNUAL' || packageType === 'SIMANIS_YEARLY') return 'Tahunan'
  if (packageType === 'SIMANIS_LIFETIME') return 'Seumur Hidup'
  return ''
}

const RegisterPage = () => {
  const [searchParams] = useSearchParams()
  const pricingId = searchParams.get('plan')
  const { mutate: fetchPlans, data: plansData } = usePricelistReq()
  const selectedPlan = plansData?.data.find((pricelist) => pricelist.id === pricingId)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const registerMutation = useRegisterReq()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPlans()
  }, [fetchPlans])
  
  const handleRegister = () => {
    registerMutation.mutate(
      {
        email,
        nama_lengkap: fullName,
        phone_number: phoneNumber,
        password,
        pricing_id: pricingId ?? undefined
      },{
        onSuccess: (response) => {
          console.log(response)
          navigate('/auth/otp_verification', {
            state: {
              email: response.data.user.email,
              planId: pricingId,
            }
          })
        },
        onError: (error: unknown) => {
          const err = error as AxiosError<{ message?: string; error?: string; errors?: Record<string, string[]> | string }>;
          const data = err.response?.data;
          
          const backendMessage = 
            data?.message || 
            data?.error || 
            (typeof data?.errors === 'string' ? data.errors : null);

          if (backendMessage) {
            setErrorMessage(backendMessage);
          } else if (data?.errors && typeof data.errors === 'object') {
            const firstError = Object.values(data.errors).flat()[0];
            setErrorMessage(String(firstError));
          } else {
            setErrorMessage(err.message || 'Terjadi kesalahan pada server');
          }
        }
      }
    )
  }
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex p-10 items-center">
      <div className="form-section w-1/2 flex justify-center">
        <form className="flex flex-col gap-6 w-160">
          <div className="text flex flex-col gap-2">
            <h1 className="text-[30px] font-bold text-normal-navy">DAFTAR</h1>
            <p className="text-[#919191]">Selamat datang di SIMANIS. Buat akun dan mulailah kelola barang inventaris sekolah anda dengan teratur.</p>
          </div>
          {errorMessage && (
            <span className="bg-[#ffc0c077] px-4 py-1 border rounded border-[#e51616]">
              <p className="flex items-center gap-2 text-[#e51616] text-[12px]"><HugeiconsIcon icon={AlertCircleIcon} size={18}/>{errorMessage}</p>
            </span>
          )}
          {pricingId && (
            <span className="bg-[#c0ffd577] px-4 py-2 border rounded border-[#16e55e]">
              <p className="flex items-center gap-2 text-[#16e55e] text-[12px]"><HugeiconsIcon icon={CheckmarkCircle01Icon} size={18}/>Paket langganan terpilih akan otomatis diterapkan setelah pendaftaran.</p>
              {selectedPlan && (
                <p className="flex items-center gap-2 text-[#0e6b2e] text-[13px] font-semibold mt-1">
                  SIMANIS {formatTierName(selectedPlan.tier_name)} - Rp {new Intl.NumberFormat('id-ID').format(selectedPlan.price)}
                </p>
              )}
            </span>
          )}
          <div className="wrapper-container flex flex-col gap-4">
            <div className="input-group flex flex-col gap-1 w-full">
              <label className="font-medium">Nama Lengkap</label>
              <div className="input-wrapper items-center flex gap-2 border px-2 py-2 rounded border-[#919191] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                <HugeiconsIcon icon={User02Icon} size={22} className="text-[#4b4b4b]"/>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  onChange={(e) => (
                    setFullName(e.target.value)
                  )}
                  placeholder="Jhon Doe" 
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="input-group flex flex-col gap-1 w-full">
              <label className="font-medium">Alamat Email</label>
              <div className="input-wrapper items-center flex gap-2 border px-2 py-2 rounded border-[#919191] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                <HugeiconsIcon icon={Mail02Icon} size={22} className="text-[#4b4b4b]"/>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  onChange={(e) => (
                    setEmail(e.target.value)
                  )}
                  placeholder="user@example.com" 
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="input-group flex flex-col gap-1 w-full">
              <label className="font-medium">Nomor Telepon</label>
              <div className="input-wrapper items-center flex gap-2 border px-2 py-2 rounded border-[#919191] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                <HugeiconsIcon icon={Call02Icon} size={22} className="text-[#4b4b4b]"/>
                <input 
                  type="number" 
                  name="phone_number" 
                  id="phoneNumber" 
                  onChange={(e) => (
                    setPhoneNumber(e.target.value)
                  )}
                  placeholder="08*******" 
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="input-group flex flex-col gap-1">
              <label className="font-medium">Password</label>
              <div className="input-wrapper items-center flex gap-2 border px-2 py-2 rounded border-[#919191] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                <HugeiconsIcon icon={LockPasswordIcon} size={22} className="text-[#4b4b4b]"/>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  id="password" 
                  onChange={(e) => (
                    setPassword(e.target.value)
                  )}
                  placeholder="Masukkan password anda" 
                  className="w-full outline-none"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer hover:text-normal-hover-neutral"><HugeiconsIcon icon={showPassword ? ViewOffSlashIcon : ViewIcon} size={20}/></button>
              </div>
            </div>
          </div>
          <div className="btn-submit">
            <button type='button' onClick={handleRegister} className="flex items-center gap-1 w-full p-2 bg-normal-navy justify-center text-[#FFFFFF] hover:bg-normal-hover-neutral rounded cursor-pointer transition-all duration-300">{registerMutation.isPending ? "Loading..." : "Daftar"} <HugeiconsIcon icon={UserAddIcon} size={20}/></button>
          </div>
          <div className="signup-links flex justify-center">
            <p className="text-[#000000] text-[13px]">Sudah punya akun? <a href="/auth/login" className="hover:underline hover:text-normal-hover-yellow">Masuk</a></p>
          </div>
          <hr className="border-[#c3c3c3]"/>
          <footer className="flex justify-center">
            <p className="text-[#c3c3c3]">&copy; SIMANIS 2026. All rights reserved.</p>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage