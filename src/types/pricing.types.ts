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

//Payment Method
export type PaymentMethod = 'qris' | 'gopay' | 'ovo' | 'dana';

//Checkout Request Body
export type CheckoutRequest = {
    subscription_price_id: string;
    payment_method: PaymentMethod;
};

export type PaymentInstruction = {
    payment_method?: PaymentMethod | null;
    qr_url?: string | null;
    qr_string?: string | null;
    deeplink_url?: string | null;
    payment_url?: string | null;
    expires_at?: string | null;
};

export type CheckoutPlan = {
    id: string;
    tier_name: string;
    billing_period: string;
};

export type CheckoutData = {
    requires_payment: boolean;
    orderId: string;
    invoice_number?: string;
    status?: string;
    gross_amount?: number;
    payment_method?: PaymentMethod;
    instruction?: PaymentInstruction;
    plan?: CheckoutPlan;
};

export type CheckoutResponse = {
    success: boolean;
    message: string;
    data: CheckoutData;
};

export type CheckoutError = {
    success: boolean;
    message: string;
    errors: Record<string, string[]>;
};

//Invoice Response Body
export type InvoicePlan = {
    id: string;
    tier_name: string;
    price: number;
    billing_period: string;
};

export type InvoiceData = {
    invoice_number: string;
    status: string;
    gross_amount: number;
    payment_type: string | null;
    paid_at: string | null;
    created_at: string;
    instruction?: PaymentInstruction | null;
    sekolah: {
        nama_sekolah: string;
        npsn: string;
        alamat: string;
        phone_number: string;
    } | null;
    plan: InvoicePlan | null;
    user: {
        nama_lengkap: string | null;
        email: string | null;
    };
};

export type InvoiceResponse = {
    success: boolean;
    message: string;
    data: InvoiceData;
};

export type InvoiceError = {
    success: boolean;
    message: string;
    errors: Record<string, string[]>;
};

//Order Status Response Body
export type OrderStatusData = {
    orderId: string;
    status: string;
    gross_amount: number;
    payment_type: string | null;
    plan: CheckoutPlan | null;
};

export type OrderStatusResponse = {
    success: boolean;
    message: string;
    data: OrderStatusData;
};