import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { CheckoutError, CheckoutRequest, CheckoutResponse } from "../../../types/pricing.types";
import pricing from '../../../services/pricing.services';

export const useCheckoutReq = () => {
    const mutation = useMutation({
        mutationFn: (data: CheckoutRequest) => pricing.checkoutData(data),
        onSuccess: (response: CheckoutResponse) => {
            console.log(response)
        },
        onError: (error) => {
            if(axios.isAxiosError<CheckoutError>(error)){
                console.log(error.response?.data.message)
            }
        }
    })

    return {
        ...mutation,
        data: mutation.data as CheckoutResponse | undefined
    }
}