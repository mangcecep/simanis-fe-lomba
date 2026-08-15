import React from 'react'
import logoApp from '../../../../assets/icon/simanis-blue-text-logo.svg'
import { HugeiconsIcon } from '@hugeicons/react'
import { MailCheck } from '@hugeicons/core-free-icons'
import { useState, useEffect } from 'react'

const VerificationEmailPage = () => {
    const [countDown, setCountDown] = useState(0);
    useEffect(() => {
        if(countDown <= 0) return;
        const timer = setInterval(() => {
            setCountDown((prev) => prev - 1)
        }, 1000);
        return () => clearInterval(timer)
    }, [countDown])
  return (
    <div className="container-body bg-[#FFFFFF] h-screen flex flex-col gap-6 items-center p-10">
        <div className="logo">
            <img src={logoApp} alt="SIMANIS Logo App Blue Text" className="w-50"/>
        </div>
        <div className="text flex flex-col gap-3 items-center">
            <h1 className="text-[#001d74] font-extrabold text-[30px]">Verifikasi Email</h1>
            <p className="text-[15px] text-[#1c1c1c]">Terima kasih telah menjadi bagian dari SIMANIS.</p>
        </div>
        <div className="container w-160 flex flex-col gap-4 items-center bg-[#ffffffe8] px-8 py-4 border-2 border-[#001d74] rounded shadow-lg">
            <div className="icon bg-[#8cffb16b] p-4 rounded-full">
                <HugeiconsIcon icon={MailCheck} size={35} className="text-[#06bb52]"/>
            </div>
            <div className="text-container flex flex-col items-center gap-3">
                <h5 className="text-[18px] font-semibold text-[#1c1c1c]">Akun Anda berhasil dibuat!</h5>
                <p className="text-[15px] text-center text-[#1c1c1c]">Kami telah mengirimkan email verifikasi ke alamat email yang Anda daftarkan. Silakan buka kotak masuk, lalu klik tautan verifikasi untuk mengaktifkan akun Anda.</p>
            </div>
            <div className="btn-resend-email flex gap-5 items-center w-full">
                <button type='button' className={`text-[14px] w-full px-5 py-1 text-[#FFFFFF] rounded-full ${countDown > 0 ? "bg-[#878788] cursor-not-allowed" : "bg-[#001d74] hover:bg-[#01144d]"} transition-all duration-300 cursor-pointer`}>Kirim Ulang Email</button>
                <a href="/" className="text-[14px] w-full bg-[#921B1B] text-center px-5 py-1 text-[#FFFFFF] rounded-full hover:bg-[#781717] transition-all duration-300 cursor-pointer">Kembali Ke Beranda</a>
            </div>
            {countDown > 0 && (
                <div className="indicator-estimation flex gap-1 items-center">
                    <p className="text-[13px] text-[#fe0000d7]"><i>*Terlalu banyak permintaan. Silakan coba kembali dalam</i></p>
                    <p className="text-[13px] text-[#ff0000d7]"><i>{countDown} detik</i></p>
                </div>
            )}
        </div>
        <hr className="border-[#b6b4b4] w-160"/>
        <footer>
            <p className="text-[13px]">&copy; SIMANIS 2026. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default VerificationEmailPage