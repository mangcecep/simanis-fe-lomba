import api from './api'
import type { CheckoutRequest, CheckoutResponse, InvoiceResponse, OrderStatusResponse, PricelistResponse } from '../types/pricing.types'

const pricelistData = async () => {
    const response = await api.get<PricelistResponse>('/payment/plans');
    return response.data;
}

const checkoutData = async (data: CheckoutRequest): Promise<CheckoutResponse> => {
    const response = await api.post<CheckoutResponse>('/payment/checkout', data);
    return response.data;
}

const invoiceData = async (orderId: string): Promise<InvoiceResponse> => {
    const response = await api.get<InvoiceResponse>(`/payment/invoice/${orderId}`);
    return response.data;
}

const orderStatusData = async (orderId: string): Promise<OrderStatusResponse> => {
    const response = await api.get<OrderStatusResponse>(`/payment/status/${orderId}`);
    return response.data;
}

export default {
    pricelistData,
    checkoutData,
    invoiceData,
    orderStatusData
}
