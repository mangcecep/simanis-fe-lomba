import axios from "axios";
import auth from "../../../services/auth.services"
import { useMutation } from "@tanstack/react-query";
import type { RegisterResponse } from "../../../types/auth.types";
import type { RegisterError } from "../../../types/auth.types";

export const useRegisterReq = () => {
    return useMutation({
        mutationFn: auth.register,
        onSuccess: (response: RegisterResponse) => {
            localStorage.setItem('jwt_token', response.data.jwt_token)
            console.log(response)
        },
        onError: (error) => {
            if(axios.isAxiosError<RegisterError>(error)){
                console.log(error.response?.data)
            }
        }
    })
}