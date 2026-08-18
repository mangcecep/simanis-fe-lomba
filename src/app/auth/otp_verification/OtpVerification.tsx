import logoApp from '../../../assets/icon/simanis-black-text-logo.svg'
import { useLocation } from 'react-router-dom'
import { useOtpVerificationReq, useResendOtpReq } from './-mutation';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HugeiconsIcon } from '@hugeicons/react';
import { AlertCircleIcon, CheckmarkCircle01Icon } from '@hugeicons/core-free-icons';

const OtpVerificationPage = () => {
  const location = useLocation();
  const email = location.state;
  const [otpCode, setOtpCode] = useState('');
  const [resendCodeTimeDown, setResendCodeTimeDown] = useState(0);
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const resendOtpMutation = useResendOtpReq()
  const otpVerificationMutation = useOtpVerificationReq();

  useEffect(() => {
    if (resendCodeTimeDown <= 0) return;

    const timer = setInterval(() => {
      setResendCodeTimeDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCodeTimeDown]);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const handleVerifCode = () => {
    setErrorMessage('');
    otpVerificationMutation.mutate({
      otp_code: otpCode
    },{
      onSuccess: () => {
        navigate('/auth/school-registration');
      },
      onError: (error) => {
        console.log(error);
      },
    })
  }

  const handleResendCode = () => {
    if (resendCodeTimeDown > 0 || resendOtpMutation.isPending) {
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    resendOtpMutation.mutate(undefined, {
      onSuccess: (response) => {
        setResendCodeTimeDown(600);

        setSuccessMessage(
          response.message || 'Kode OTP berhasil dikirim ulang.'
        );
      },

      onError: (error: unknown) => {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;
          const message = error.response?.data?.message;

          if (status === 429) {
            setErrorMessage(
              message || 'Tunggu 60 detik sebelum mengirim ulang kode.'
            );
            return;
          }

          setErrorMessage(
            message || 'Gagal mengirim ulang kode OTP.'
          );
          return;
        }

        setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
      },
    });
  };
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtpCode(value);
  }
  return (
    <div className="bg-[#f3f3f3] min-h-screen p-10 flex flex-col gap-8 items-center">
      <div className="title-head flex flex-col gap-5 items-center">
        <img src={logoApp} alt="SIMANIS Logo App" width={200} height={200}/>
        <h1 className="font-extrabold text-[30px] text-normal-hover-navy">Verifikasi Email</h1>
        <p>Kami mengirimkan 6-digit kode kepada email <span className="text-normal-active-yellow">{email}</span></p>
      </div>
      {errorMessage && (
        <span className="bg-[#ffc0c077] px-4 py-1 border rounded border-[#e51616]">
          <p className="flex items-center gap-2 text-[#e51616] text-[12px]"><HugeiconsIcon icon={AlertCircleIcon} size={18}/>{errorMessage}</p>
        </span>
      )}
      {successMessage && (
        <span className="bg-[#c0ffd577] px-4 py-1 border rounded border-[#16e55e]">
          <p className="flex items-center gap-2 text-[#16e55e] text-[12px]"><HugeiconsIcon icon={CheckmarkCircle01Icon} size={18}/>{successMessage}</p>
        </span>
      )}
      <div className="input-container flex items-center gap-5 bg-[#FFFFFF] px-8 py-4 rounded-md border-2 border-[#e5e5e5]">
        <div className="input-group">
          <input 
            type="text" 
            name="otp-code" 
            id="otpCode" 
            value={otpCode}
            maxLength={6}
            onChange={handleOtpChange}
            className="w-full outline-none border p-2 text-center rounded leading-tight border-[#b5b5b5]"
          />
        </div>
      </div>
      <div className="btn-verif">
        <button 
          type='button' 
          onClick={handleVerifCode} 
          disabled={
            otpCode.length !== 6 ||
            otpVerificationMutation.isPending
          }
          className="bg-normal-navy px-8 py-2 text-[#FFFFFF] text-[13px] rounded cursor-pointer hover:bg-normal-hover-navy transition-all duration-300"
        >
          {otpVerificationMutation.isPending ? "Memverifikasi..." : "Verifikasi"}
        </button>
      </div>
      <div className="resend-code">
        <p className="text-[13px]">Belum mendapatkan kode verifikasi? {''}
          <button 
            type='button'
            disabled={
              resendCodeTimeDown > 0 ||
              resendOtpMutation.isPending
            }
            onClick={handleResendCode}
            className={` ${resendCodeTimeDown > 0 ? "cursor-not-allowed" : "cursor-pointer hover:underline hover:text-normal-active-yellow"}`}
          >
            {resendOtpMutation.isPending ? "Mengirim..." : resendCodeTimeDown > 0 ? `Kirim ulang dalam ${formatTime(resendCodeTimeDown)}` : `Kirim ulang kode`}
          </button>
        </p>
      </div>
    </div>
  )
}

export default OtpVerificationPage