import { AlertCircleIcon, ArrowRight02Icon, LockPasswordIcon, PackageIcon, User02Icon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import logoApp from '../../../assets/icon/simanis-blue-text.svg'
import imageAssets from '../../../assets/image/simanis-storage-image-potrait.png'

const LoginPage = () => {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({show: false, type: '', message: ''});
  const [error, setError] = useState({accountName: false, password: false});

  const showToast = (type: string, message: string) => {
    setToast({
      show: true,
      type,
      message,
    });
  }

  const hideToast = () => {
    setToast({
      show: false,
      type: '',
      message: '',
    });
  };

  const allFormComplete = (accountName: string, password: string) => {
    if(accountName.trim() && password.trim()){
      hideToast();
    }
  }

  const handleLogin = () => {
    const allFormError = {
      accountName: !accountName.trim(),
      password: !password.trim()
    }
    setError(allFormError);
    if(allFormError.accountName || allFormError.password){
      showToast('error', 'Email/Username dan Password tidak boleh kosong!')
      return;
    }
  }
  return (
    <div className="bg-[#FFFFFF] h-screen flex">
      <div className="form-page flex justify-center items-center px-10 w-1/2">
        <form className="flex flex-col gap-4 w-100">
          <div className="logo flex justify-center">
            <img src={logoApp} alt="SIMANIS Blue Text" className="w-60"/>
          </div>
          <div className="opening-text text-center">
            <h1 className="text-[30px] font-bold text-[#001d74]">Selamat Datang Kembali!</h1>
            <p className="text-[#626262] text-[14px]">Silahkan masuk dan mulailah managemen Inventaris dan Sarana anda.</p>
          </div>
          <div className="form-input flex flex-col gap-4">
            <div className="input-group flex flex-col">
            <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">EMAIL/USERNAME</label>
            <div className={`wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded ${error.accountName ? 'border-[#FF0000]' : "border-2 hover:border-[#001d74] focus-within:border-[#001d74]"} transition-all duration-300`}>
              <span><HugeiconsIcon icon={User02Icon} size={24} className="text-[#646464]"/></span>
              <input 
                type="text" 
                name="name_account" 
                id="nameAccount" 
                onChange={(e) => {
                  const value = e.target.value;
                  setAccountName(e.target.value);
                  if(e.target.value.trim()){
                    setError((prev) => ({
                      ...prev,
                      accountName: false
                    }));
                  }
                  allFormComplete(password, value)
                }} 
                placeholder='Masukkan email atau username' 
                className="outline-none w-full text-[14px] text-[#000000]"/>
            </div>
            </div>
            <div className="input-group flex flex-col">
              <label className="text-[12px] text-[#000000] font-semibold tracking-[.15em]">KATA SANDI</label>
              <div className={`wrapper-input flex gap-2 items-center w-full border-2 px-3 py-1.5 rounded ${error.password ? 'border-[#FF0000]' : "border-2 hover:border-[#001d74] focus-within:border-[#001d74]"} transition-all duration-300`}>
                <span><HugeiconsIcon icon={LockPasswordIcon} size={22} className="text-[#646464]"/></span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" id="password" 
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(e.target.value);
                    if(e.target.value.trim()){
                      setError((prev) => ({
                        ...prev,
                        password: false
                      }));
                    }
                    allFormComplete(accountName, value)
                  }}
                  placeholder='••••••••••' 
                  className="outline-none w-full text-[14px] text-[#000000]"/>
                <button type='button' onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-[#001d74] cursor-pointer transition-all duration-300">{showPassword ? <HugeiconsIcon icon={ViewOffSlashIcon} size={22}/> : <HugeiconsIcon icon={ViewIcon} size={22}/>}</button>
              </div>
            </div>
          </div>
          {toast.show && (
            <div className="toaster-error flex items-center gap-1 w-full border border-[#FF0000] px-2 py-1 rounded bg-[#ff000030]">
              <HugeiconsIcon icon={AlertCircleIcon} size={18} className="text-[#FF0000]"/>
              <p className="text-[#FF0000] text-[13px]">{toast.message}</p>
            </div>
          )}
          <div className="form-options flex justify-between items-center">
            <div className="remember-me flex gap-1 items-center">
              <input type="checkbox" name="remember-me" id="rememberMe" className="cursor-pointer appearance-none w-3.5 h-3.5 bg-[#FFFFFF] border-2 rounded border-[#FFFFFF] checked:bg-[#001d74] outline p-1"/>
              <p className="text-[14px] text-[#797979]">Ingat Saya</p>
            </div>
            <div className="forgot-password">
              <a href="#" className="text-[14px] text-[#797979] hover:text-[#dfc30e] transition-all duration-300">Lupa Kata Sandi?</a>
            </div>
          </div>
          <div className="btn-submit">
            <button type='button' onClick={handleLogin} className="flex items-center gap-1 text-[16px] bg-[#001d74] text-[#FFFFFF] w-full justify-center px-4 py-2 cursor-pointer rounded hover:bg-[#001556] transition-all duration-300">Masuk <HugeiconsIcon icon={ArrowRight02Icon} size={22}/></button>
          </div>
          <div className="signup-link justify-center flex">
            <p className="text-[14px] text-[#000000]">Belum memiliki akun? <a href="/auth/register" className="text-[#001d74] hover:text-[#d4d113] transition-all duration-300">Daftar sekarang</a></p>
          </div>
          <span>
            <hr/>
          </span>
          <footer className="flex justify-center">
            <p className="text-[13px] font-medium">&copy; SIMANIS 2026. All rights reserved.</p>
          </footer>
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

export default LoginPage