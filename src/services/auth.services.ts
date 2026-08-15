import api from "./api";
import type { LoginResponse, RegisterResponse, ResendVerificationEmailResponse } from "../types/auth.types";

const login = async (data:{
    identifier: string, 
    password: string
}): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/auth/login', data);
    return res.data; 
}

const register = async (data:{
    username: string,
    email: string,
    phone_number: string,
    company_name: string,
    address: string,
    password: string
}): Promise<RegisterResponse> => {
    const res = await api.post<RegisterResponse>('/auth/register', data);
    return res.data;
}

const resendVerificationEmail = async (data:{
    email: string
}): Promise<ResendVerificationEmailResponse> => {
    const res = await api.post<ResendVerificationEmailResponse>('/auth/resend-verification', data);
    return res.data
}

export default  {
    login,
    register,
    resendVerificationEmail
};