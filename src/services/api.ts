import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://exodus-fiber-panoramic.ngrok-free.dev/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'ngrok-skip-browser-warning': 'true',
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            localStorage.removeItem('jwt_token')
            window.location.href = '/auth/login'
        }
        if(error.response?.status === 403 && error.response?.data?.errors?.code === 'PLAN_SELECTION_REQUIRED'){
            window.location.href = '/pricelist'
        }
        console.error('API Error:', {
            status: error.response?.status,
            message: error.response?.data?.message,
            url: error.config?.url
        })
        return Promise.reject(error)
    }
)

export default api