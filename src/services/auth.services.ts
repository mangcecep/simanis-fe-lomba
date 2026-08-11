import api from "./api";
import type { LoginResponse } from "../types/auth.types";

const login = async (data:{
    identifier: string, 
    password: string
}): Promise<LoginResponse> => {
    const res = await api.post<LoginResponse>('/auth/login', data);
    return res.data; 
}

export default {
    login
};