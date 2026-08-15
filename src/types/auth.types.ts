//Login Response Body
export type LoginResponse = {
    success: boolean,
    message: string,
    data: {
        jwt_token: string,
        user: {
            id: string,
            username: string,
            email: string,
            role: string,
            is_active: string
        }
    }
}

export type LoginError = {
    success: boolean,
    message: string,
    error: Record<string, string[]>
}


//Register Response Body
export type RegisterResponse = {
    success: boolean,
    message: string,
    data: {
        id: string,
        username: string,
        email: string,
        is_active: string
    }
}

export type RegisterError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}

//Resend Verification Email Response Body
export type ResendVerificationEmailResponse = {
    success: boolean,
    message: string,
    data: Record<string, string[]>
}

export type ResendVerificationEmailError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}