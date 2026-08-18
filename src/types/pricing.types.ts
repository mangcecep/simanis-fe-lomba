//Pricelist Response Body
export type Pricelist = {
    id: string;
    tier_name: string;
    price: number;
    billing_period: string;
    plan: string;
    duration: number;
    is_active: boolean;
};

export type PricelistResponse = {
    success: boolean;
    message: string;
    data: Pricelist[];
};

export type PricelistError = {
    success: boolean;
    message: string;
    errors: Record<string, string[]>;
};