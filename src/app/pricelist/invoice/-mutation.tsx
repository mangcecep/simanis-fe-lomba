import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { InvoiceError, InvoiceResponse, OrderStatusResponse } from "../../../types/pricing.types";
import pricing from '../../../services/pricing.services';

export const useInvoiceReq = (orderId: string) => {
    const mutation = useMutation({
        mutationFn: () => pricing.invoiceData(orderId),
        onSuccess: (response: InvoiceResponse) => {
            console.log(response)
        },
        onError: (error) => {
            if(axios.isAxiosError<InvoiceError>(error)){
                console.log(error.response?.data.message)
            }
        }
    })

    return {
        ...mutation,
        data: mutation.data as InvoiceResponse | undefined
    }
}

export const useOrderStatusReq = () => {
    const mutation = useMutation({
        mutationFn: (orderId: string) => pricing.orderStatusData(orderId),
        onSuccess: (response: OrderStatusResponse) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    return {
        ...mutation,
        data: mutation.data as OrderStatusResponse | undefined
    }
}