import ratmanImage from '../../../assets/image/auth-image/ratman-say-hello-image.png'
import backgroundImage from '../../../assets/image/auth-image/auth-image-section-background.png'
import logoApp from '../../../assets/icon/simanis-white-text-logo.svg'
import { HugeiconsIcon } from '@hugeicons/react'
import { LockPasswordIcon, MailAtSign02Icon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { useState } from 'react'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex items-center p-10">
      <div className="image-section relative flex z-1 w-1/2 h-full rounded-xl bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="image absolute z-10 -bottom-9 right-12">
          <img src={ratmanImage} alt="Ratman say hello image" width={500} height={500}/>
        </div>
        <div className="text-logo absolute z-10 m-5 flex flex-col gap-3">
          <img src={logoApp} alt="SIMANIS" width={150} height={150}/>
          <p className="text-[#434343]">“Inventory Management System An all-in-one platform to monitor, record, and control your entire inventory effortlessly.”</p>
        </div>
      </div>
      <div className="form-section w-1/2 flex justify-center p-5">
        <form className="w-140 flex flex-col gap-4">
          <div className="title-text flex flex-col gap-5 text-center">
            <h1 className="font-bold text-[35px] text-normal-blue">SIGN IN</h1>
            <p className="text-[#6e6e6e]">Sign in to manage your inventory and assets.</p>
          </div>
          <div className="input-group">
            <label className="font-medium text-normal-navy">Email</label>
            <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
              <HugeiconsIcon icon={MailAtSign02Icon} size={22} className="text-[#6B7280]"/>
              <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
              <input type="email" name="email" id="email" placeholder='user@example.com' autoComplete={rememberMe ? "email" : "off"} className="outline-none w-full placeholder:text-[#6B7280]"/>
            </div>
          </div>
          <div className="input-group">
            <label className="font-medium text-normal-navy">Password</label>
            <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
              <HugeiconsIcon icon={LockPasswordIcon} size={22} className="text-[#6B7280]"/>
              <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
              <input type={showPassword ? "text" : "password"} name="password" id="password" autoComplete={rememberMe ? "current-password" : "off"} placeholder='••••••••' className="outline-none w-full placeholder:text-[#6B7280]"/>
              <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-[#6B7280] hover:text-normal-navy cursor-pointer transition-all duration-300"><HugeiconsIcon icon={showPassword ? ViewOffSlashIcon : ViewIcon} size={22}/></button>
            </div>
          </div>
          <div className="signin-options flex items-center justify-between">
            <div className="remember-me flex items-center gap-1">
              <input type="checkbox" name="rememberme" id="rememberMe" onChange={(e) => setRememberMe(e.target.checked)}/>
              <p className="text-[13px]">Remember Me</p>
            </div>
            <div className="forgot-password">
              <a href="#" className="hover:underline hover:text-normal-blue text-[13px]">Forgot Password?</a>
            </div>
          </div>
          <div className="btn-submit">
            <button className="w-full bg-normal-blue text-[#FFFFFF] p-2 rounded cursor-pointer hover:bg-normal-hover-blue transition-all duration-300">Sign in</button>
          </div>
          <div className="signup-link flex justify-center">
            <p className="text-[13px]">Don't have account? <a href="/auth/register" className="hover:underline hover:text-normal-blue">Sign Up</a></p>
          </div>
          <span>
            <hr className="border-light-active-neutral"/>
          </span>
          <footer className="flex justify-center">
            <p className="text-light-active-neutral">&copy; SIMANIS 2026. All rights reserved.</p>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default LoginPage