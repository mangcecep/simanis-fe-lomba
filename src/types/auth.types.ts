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