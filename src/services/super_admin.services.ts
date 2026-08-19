import api from './api';
import type { DashboardResponse } from '../types/super_admin.types';

const dashboardAdmin = async () => {
    const response = await api.get<DashboardResponse>('/super_admin/dashboard')
    return response.data;
}

export default {
    dashboardAdmin
}