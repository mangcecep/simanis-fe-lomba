import axios from "axios";
import auth from "../../../services/auth.services"
import { useMutation } from "@tanstack/react-query";
import type { OtpVerificationResponse, OtpVerificationError } from "../../../types/auth.types";

export const useOtpVerificationReq = () => {
    return useMutation({
        mutationFn: auth.OtpVerification,
        onSuccess: (response: OtpVerificationResponse) => {
            localStorage.setItem('jwt_token', response.data.jwt_token);
        },
        onError: (error) => {
            if (axios.isAxiosError<OtpVerificationError>(error)) {
                console.log("OTP verification error:", error.response?.data);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    })
}

export const useResendOtpReq = () => {
    return useMutation({
        mutationFn: auth.resendEmailOtpCode
    })
}