import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { PricelistResponse, PricelistError } from "../../types/pricing.types";
import pricing from '../../services/pricing.services';

export const usePricelistReq = () => {
    const mutation = useMutation({
        mutationFn: pricing.pricelistData,
        onSuccess: (response: PricelistResponse) => {
            console.log(response)
        },
        onError: (error) => {
            if(axios.isAxiosError<PricelistError>(error)){
                console.log(error.response?.data.message)
            }
        }
    })

    return {
        ...mutation,
        data: mutation.data as PricelistResponse | undefined
    }
}