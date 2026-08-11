import { ArrowRight02Icon, Building03Icon, Location03Icon, LockPasswordIcon, Mail02Icon, PackageIcon, PhoneCall, School01Icon, User02Icon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import logoApp from '../../../assets/icon/simanis-blue-text.svg'
import imageAssets from '../../../assets/image/simanis-storage-image-potrait.png'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [schoolSet, setSchoolSet] = useState('');
  const [companySet, setCompanySet] = useState('');
  return (
    <div className="bg-[#FFFFFF] h-screen flex">
      <div className="form-page flex justify-center items-center px-10 w-1/2">
        <form className="flex flex-col gap-4 w-130">
          <div className="logo flex justify-center">
            <img src={logoApp} alt="SIMANIS Blue Text" className="w-60"/>
          </div>
          <div className="opening-text text-center">
            <p className="text-[#626262] text-[14px]">Buat akun dan mulailah manage barang inventaris dan sarana anda.</p>
          </div>
          <div className="form-input flex flex-col gap-2">
            <div className="wrapper-input-group flex gap-2">
              <div className="input-group flex flex-col w-full">
                <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">NAMA LENGKAP</label>
                <div className="wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded hover:border-[#001d74] focus-within:border-[#001d74] transition-all duration-300">
                  <span><HugeiconsIcon icon={User02Icon} size={24} className="text-[#646464]"/></span>
                  <input type="text" name="name_account" id="nameAccount" placeholder='Masukkan nama lengkap anda' className="outline-none w-full text-[14px] text-[#000000] placeholder:text-[#a7a7a7]"/>
                </div>
              </div>
              <div className="input-group flex flex-col w-full">
                <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">EMAIL</label>
                <div className="wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded hover:border-[#001d74] focus-within:border-[#001d74] transition-all duration-300">
                  <span><HugeiconsIcon icon={Mail02Icon} size={24} className="text-[#646464]"/></span>
                  <input type="email" name="email" id="email" placeholder='Masukkan alamat email anda' className="outline-none w-full text-[14px] text-[#000000] placeholder:text-[#a7a7a7]"/>
                </div>
              </div>
            </div>
            <div className="wrapper-input-group flex flex-col gap-1">
              <div className="wrapper flex gap-2">
                <div className="input-group flex flex-col w-full">
                  <label className={`text-[12px] font-semibold tracking-[.15em] ${companySet ? "text-[#cacaca]" : "text-[#000000]"}`}>NAMA INSTANSI / SEKOLAH</label>
                  <div className={`wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded transition-all duration-300 ${companySet.trim() ? 'border-[#cacaca] cursor-not-allowed' : 'hover:border-[#001d74] focus-within:border-[#001d74]'}`}>
                    <span><HugeiconsIcon icon={School01Icon} size={24} className={`${companySet ? "text-[#cacaca]" : "text-[#646464]"}`}/></span>
                    <input type="text" name="school_name" value={schoolSet} disabled={companySet.trim().length > 0} id="schoolName" onChange={(e) => setSchoolSet(e.target.value)} placeholder='Masukkan nama sekolah anda' className={`outline-none w-full text-[14px] text-[#000000] ${companySet.trim() ? 'placeholder:text-[#cacaca] cursor-not-allowed' : 'placeholder:text-[#a7a7a7]'}`}/>
                  </div>
                </div>
                <div className="input-group flex flex-col w-full">                                           
                  <label className={`text-[12px] font-semibold tracking-[.15em] ${schoolSet ? "text-[#cacaca]" : "text-[#000000]"}`}>NAMA PERUSAHAAN</label>
                  <div className={`wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded transition-all duration-300 ${schoolSet.trim() ? 'border-[#cacaca] cursor-not-allowed' : 'hover:border-[#001d74] focus-within:border-[#001d74]'}`}>
                    <span><HugeiconsIcon icon={Building03Icon} size={24} className={`${schoolSet ? "text-[#cacaca]" : "text-[#646464]"}`}/></span>
                    <input type="text" name="company_name" value={companySet} disabled={schoolSet.trim().length > 0} id="companyName" onChange={(e) => setCompanySet(e.target.value)} placeholder='Masukkan nama perusahaan anda' className={`outline-none w-full text-[14px] text-[#000000] ${schoolSet.trim() ? 'placeholder:text-[#cacaca] cursor-not-allowed' : 'placeholder:text-[#a7a7a7]'}`}/>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#a7a7a7]"><i><span className="font-bold">Catatan:</span> Nama instansi dan nama perusahaan hanya dapat diisi salah satu saja.</i></p>
            </div>
            <div className="input-group flex flex-col w-full">
              <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">ALAMAT</label>
              <div className="wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded hover:border-[#001d74] focus-within:border-[#001d74] transition-all duration-300">
                <span><HugeiconsIcon icon={Location03Icon} size={24} className="text-[#646464]"/></span>
                <textarea name="address" id="address" rows={2} placeholder='Masukkan nama sekolah anda' className="outline-none resize-none w-full text-[14px] text-[#000000] placeholder:text-[#a7a7a7]"/>
              </div>
            </div>
            <div className="input-group flex flex-col w-full">
              <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">NOMOR TELEPON</label>
              <div className="wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded hover:border-[#001d74] focus-within:border-[#001d74] transition-all duration-300">
                <span><HugeiconsIcon icon={PhoneCall} size={24} className="text-[#646464]"/></span>
                <input type="number" name="phone_number" id="phoneNumber" placeholder='Masukkan nama sekolah anda' className="outline-none w-full text-[14px] text-[#000000] placeholder:text-[#a7a7a7]"/>
              </div>
            </div>
            <div className="input-group flex flex-col">
              <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">KATA SANDI</label>
              <div className="wrapper-input relative flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded hover:border-[#001d74] focus-within:border-[#001d74] transition-all duration-300">
                <span><HugeiconsIcon icon={LockPasswordIcon} size={22} className="text-[#646464]"/></span>
                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='••••••••••' className="outline-none w-full text-[14px] text-[#000000] placeholder:text-[#a7a7a7]"/>
                <button type='button' onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#001d74] cursor-pointer transition-all duration-300">{showPassword ? <HugeiconsIcon icon={ViewOffSlashIcon} size={22}/> : <HugeiconsIcon icon={ViewIcon} size={22}/>}</button>
              </div>
            </div>
          </div>
          <div className="btn-submit">
            <button type='button' className="flex items-center gap-1 text-[16px] bg-[#001d74] text-[#FFFFFF] w-full justify-center px-4 py-2 cursor-pointer rounded hover:bg-[#001556] transition-all duration-300">Daftar <HugeiconsIcon icon={ArrowRight02Icon} size={22}/></button>
          </div>
          <div className="signup-link justify-center flex">
            <p className="text-[14px] text-[#000000]">Sudah punya akun? <a href="/auth/login" className="text-[#001d74] hover:text-[#d4d113] transition-all duration-300">Masuk</a></p>
          </div>
        </form>
      </div>
      <div className="wrapper relative w-1/2 h-screen overflow-hidden">
        <div className="login-image absolute inset-0 z-0">
          <img src={imageAssets} alt="SIMANIS" className="h-full w-full object-cover"/>
          <div className="effect absolute z-10 inset-0 bg-linear-to-b from-transparent to-[#001d74] opacity-70"></div>
        </div>
        <div className="carousel-info absolute flex flex-col gap-4 z-20 w-full p-5 bottom-0">
          <div className="glass-container flex flex-col gap-2 bg-[#ffffff27] border border-[#a7a7a783] backdrop-blur-sm w-90 p-2 rounded">
            <HugeiconsIcon icon={PackageIcon} size={40} className="text-[#dbc820]"/>
            <h1 className="text-[20px] font-bold text-[#FFFFFF]">Managemen Inventaris Cerdas</h1>
            <p className="text-[14px] text-[#c9dcff] font-light">Pantau aset sekolah dengan akurasi tinggi dan pelaporan otomatis.</p>
          </div>
          <div className="indicator-carousel flex gap-2">
            <span className="block w-7 h-1 rounded-full bg-[#dbc820]"></span>
            <span className="block w-7 h-1 rounded-full bg-[#a8a8a8]"></span>
            <span className="block w-7 h-1 rounded-full bg-[#a8a8a8]"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage