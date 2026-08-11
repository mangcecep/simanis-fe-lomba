import auth from "../../../services/auth.services";
import type { LoginResponse } from "../../../types/auth.types";
import type { LoginError } from "../../../types/auth.types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLoginReq = () => {
    return useMutation({
        mutationFn: auth.login,
        onSuccess: (response: LoginResponse) => {
            console.log(response.data.jwt_token);
        },
        onError: (error) => {
            if(axios.isAxiosError<LoginError>(error)){
                console.log(error.response?.data);
            }
        }
    })
}