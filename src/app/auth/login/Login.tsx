import { LockPasswordIcon, Login02Icon, Mail02Icon, ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react";
import { useLoginReq } from "./-mutation";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLoginReq();
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate(
      {
        email,
        password
      },{
        onSuccess: (response) => {
          console.log(response)
          const {jwt_token, token_type, user} = response.data
          localStorage.setItem('jwt_token', jwt_token)
          localStorage.setItem('simanis_user', JSON.stringify(user))
          const role = user.role

          if(token_type !== 'full'){
            navigate('/pricelist')
            return
          }

          if(role === 'SUPER_ADMIN'){
            navigate('/super_admin/dashboard')
          }else if(role === 'ADMIN'){
            navigate('/admin/dashboard')
          }else if(role === 'USER'){
            navigate('/pricelist')
          }
        },
        onError: (error) => {
          console.log(error.message)
        }
      }
    )
  }
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex items-center p-10">
      <div className="form-section w-1/2 flex justify-center">
        <form onSubmit={handleLogin} className="flex flex-col gap-6 w-160">
          <div className="text flex flex-col gap-2">
            <h1 className="text-[30px] font-bold text-normal-navy">MASUK</h1>
            <p className="text-[#919191]">Selamat datang kembali dengan SIMANIS!</p>
          </div>
          <div className="wrapper-container flex flex-col gap-4">
            <div className="input-group flex flex-col gap-1">
              <label className="font-medium">Email</label>
              <div className="input-wrapper items-center flex gap-2 border px-2 py-2 rounded border-[#919191] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                <HugeiconsIcon icon={Mail02Icon} size={22} className="text-[#4b4b4b]"/>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={email} 
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Masukkan alamat email anda" 
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Masukkan password anda" 
                  className="w-full outline-none"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer hover:text-normal-hover-neutral"><HugeiconsIcon icon={showPassword ? ViewOffSlashIcon : ViewIcon} size={20}/></button>
              </div>
            </div>
          </div>
          <div className="form-options flex justify-between items-center">
            <div className="remember-me flex items-center gap-1">
              <input type="checkbox" name="remember_me" id="rememberMe" />
              <p className="text-[13px]">Ingat Saya</p>
            </div>
            <div className="forgot-password">
              <a href="#" className="text-[13px] hover:underline hover:text-normal-hover-yellow">Lupa Password?</a>
            </div>
          </div>
          <div className="btn-submit">
            <button type="submit" className="flex items-center gap-1 w-full p-2 bg-normal-navy justify-center text-[#FFFFFF] hover:bg-normal-hover-neutral rounded cursor-pointer transition-all duration-300">{loginMutation.isPending ? 'Loading...' : 'Masuk'}{!loginMutation.isPending && (<HugeiconsIcon icon={Login02Icon} size={17}/>)}</button>
          </div>
          <div className="signup-links flex justify-center">
            <p className="text-[#000000] text-[13px]">Belum punya akun? <a href="/auth/register" className="hover:underline hover:text-normal-hover-yellow">Daftar Sekarang</a></p>
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

export default LoginPage