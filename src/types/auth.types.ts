//Login Response Body
export type LoginResponse = {
    success: boolean,
    message: string,
    data: {
        jwt_token: string,
        token_expires: string,
        token_type: string,
        subscription: {
            plan: string,
            status: string,
            expires_at: string,
            is_expired: boolean
        },
        user: {
            id: string,
            email: string,
            nama_lengkap: string,
            role: string,
            sekolah_id: string
        }
    }
}

export type LoginError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}


//Register Response Body
export type RegisterResponse = {
    success: boolean,
    message: string,
    data: {
        jwt_token: string,
        token_expires: string,
        token_type: string,
        subscription: {
            plan: string,
            status: string,
            expires_at: string,
            is_expired: boolean
        },
        user: {
            id: string,
            email: string,
            nama_lengkap: string,
            role: string,
            sekolah_id: string,
            is_active: boolean
        }
    }
}

export type RegisterError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}

//OTP Verification Response Body
export type OtpVerificationResponse = {
    success: boolean,
    message: string,
    data: {
        jwt_token: string,
        token_expires: string,
        token_type: string,
        subscription: {
            plan: string,
            status: string,
            expires_at: string,
            is_expired: boolean
        },
        user: {
            id: string,
            email: string,
            nama_lengkap: string,
            role: string,
            sekolah_id: string,
            is_active: boolean
        }
    }
}

export type OtpVerificationError = {
    success: boolean,
    message: string,
    errors: Record<string, unknown>
}

//Resend OTP Code Response Body
export type ResendOtpVerificationCodeResponse = {
    success: boolean,
    message: string,
    data: Record<string, string[]>
}

export type ResendOtpVerificationCodeError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}

//School Registration Response Body
export type SchoolSaveResponse = {
    success: boolean,
    message: string,
    data: {
        id: string,
        nama_sekolah: string,
        npsn: string,
        alamat: string,
        phone_number: string,
        timezone: string,
        subscription_plan: string,
        subscription_status: string,
        requires_payment: boolean,
        order_id: string | null,
        token_type: string,
        jwt_token: string,
        token_expires: string,
        subscription: {
            plan: string,
            status: string,
            expires_at: string,
            is_expired: boolean
        },
        user: {
            id: string,
            email: string,
            nama_lengkap: string,
            is_active: boolean
        }
    }
}

export type SchoolSaveError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}