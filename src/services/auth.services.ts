import api from "./api";
import type { LoginResponse, OtpVerificationResponse, RegisterResponse, ResendOtpVerificationCodeResponse, SchoolSaveResponse } from "../types/auth.types";

const login = async (data:{
    email: string, 
    password: string
}): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/auth/login', data);
    return res.data; 
}

const register = async (data:{
    email: string,
    nama_lengkap: string,
    phone_number: string,
    password: string
}): Promise<RegisterResponse> => {
    const res = await api.post<RegisterResponse>('/auth/register', data);
    return res.data;
}

const OtpVerification = async (data:{
    otp_code: string
}): Promise<OtpVerificationResponse> => {
    const res = await api.post<OtpVerificationResponse>('/auth/verify-email', data);
    return res.data;
}

const resendEmailOtpCode = async (): Promise<ResendOtpVerificationCodeResponse> => {
  const response = await api.post<ResendOtpVerificationCodeResponse>(
    '/auth/resend-otp'
  );
  return response.data;
};

export const logout = () => {
    localStorage.removeItem('jwt_token')
}

const schoolSaveData = async (data:{
    nama_sekolah: string,
    npsn: string,
    alamat: string,
    phone_number: string,
    timezone: string
}): Promise<SchoolSaveResponse> => {
    const res = await api.post<SchoolSaveResponse>('/auth/sekolah', data);
    return res.data;
}

export default  {
    login,
    register,
    resendEmailOtpCode,
    logout,
    OtpVerification,
    schoolSaveData
};