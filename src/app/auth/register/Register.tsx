import ratmanImage from '../../../assets/image/auth-image/ratman-say-welcome-image.png'
import backgroundImage from '../../../assets/image/auth-image/auth-image-section-background.png'
import logoApp from '../../../assets/icon/simanis-white-text-logo.svg'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { Building02Icon, Call02Icon, Location03Icon, LockPasswordIcon, MailAtSign02Icon, School01Icon, User03Icon, ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex p-10 items-center">
      <div className="image-section relative flex z-1 w-1/2 h-full rounded-xl bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="image absolute z-10 bottom-0 right-12">
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
            <h1 className="font-bold text-[35px] text-normal-blue">SIGN UP</h1>
            <p className="text-[#6e6e6e]">Create an Account</p>
          </div>
          <div className="input-wrapper-group flex gap-2">
            <div className="input-group">
              <label className="font-medium text-normal-navy">Username</label>
              <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
                <HugeiconsIcon icon={User03Icon} size={22} className="text-[#6B7280]"/>
                <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
                <input type="text" name="text" id="text" placeholder='jhon.doe' className="outline-none w-full placeholder:text-[#6B7280]"/>
              </div>
            </div>  
            <div className="input-group">
              <label className="font-medium text-normal-navy">Email</label>
              <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
                <HugeiconsIcon icon={MailAtSign02Icon} size={22} className="text-[#6B7280]"/>
                <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
                <input type="email" name="email" id="email" placeholder='user@example.com' className="outline-none w-full placeholder:text-[#6B7280]"/>
              </div>
            </div>  
          </div>
          <div className="input-wrapper-group flex gap-2">
            <div className="input-group">
              <label className="font-medium text-normal-navy">School Name</label>
              <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
                <HugeiconsIcon icon={School01Icon} size={22} className="text-[#6B7280]"/>
                <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
                <input type="text" name="school_name" id="schoolName" placeholder='St.Jude Academy' className="outline-none w-full placeholder:text-[#6B7280]"/>
              </div>
            </div>  
            <div className="input-group">
              <label className="font-medium text-normal-navy">Company Name</label>
              <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
                <HugeiconsIcon icon={Building02Icon} size={22} className="text-[#6B7280]"/>
                <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
                <input type="text" name="company_name" id="companyName" placeholder='TechCorp Industries' className="outline-none w-full placeholder:text-[#6B7280]"/>
              </div>
            </div>  
          </div>
          <div className="input-group">
            <label className="font-medium text-normal-navy">Address</label>
            <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
              <HugeiconsIcon icon={Location03Icon} size={22} className="text-[#6B7280]"/>
              <hr className="m-0 h-16 w-px border-0 bg-light-active-neutral" />
              <textarea name="address" id="address" rows={3} placeholder='123 Main Street' className="outline-none w-full placeholder:text-[#6B7280] "/>
            </div>
          </div>
          <div className="input-group">
            <label className="font-medium text-normal-navy">Phone Number</label>
            <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
              <HugeiconsIcon icon={Call02Icon} size={22} className="text-[#6B7280]"/>
              <hr className="m-0 h-8 w-px border-0 bg-light-active-neutral" />
              <input type='number' name="phone_number" id="phoneNumber" placeholder='+62 *******' className="outline-none w-full placeholder:text-[#6B7280] "/>
            </div>
          </div>
          <div className="input-group">
            <label className="font-medium text-normal-navy">Password</label>
            <div className="wrapper-input flex items-center gap-3 border border-[#6B7280] px-4 py-2 rounded hover:border-normal-blue focus-within:border-normal-blue transition-all duration-300">
              <HugeiconsIcon icon={LockPasswordIcon} size={22} className="text-[#6B7280]"/>
              <hr className="m-0 h-6 w-px border-0 bg-light-active-neutral" />
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='••••••••' className="outline-none w-full placeholder:text-[#6B7280]"/>
              <button type='button' onClick={() => setShowPassword(!showPassword)} className="text-[#6B7280] hover:text-normal-navy cursor-pointer transition-all duration-300"><HugeiconsIcon icon={showPassword ? ViewOffSlashIcon : ViewIcon} size={22}/></button>
            </div>
          </div>
          <div className="btn-submit">
            <button className="w-full bg-normal-blue text-[#FFFFFF] p-2 rounded cursor-pointer hover:bg-normal-hover-blue transition-all duration-300">Sign in</button>
          </div>
          <div className="signup-link flex justify-center">
            <p>Already have an account?? <a href="/auth/login" className="hover:underline hover:text-normal-blue">Sign In</a></p>
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

export default RegisterPage