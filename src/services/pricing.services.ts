import api from './api'
import type { PricelistResponse } from '../types/pricing.types'

const pricelistData = async () => {
    const response = await api.get<PricelistResponse>('/payment/plans');
    return response.data;
}

export default {
    pricelistData
}