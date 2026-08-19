import { useQuery } from "@tanstack/react-query";
import dashboardService from '../../../services/super_admin.services'

export const useDashboardReq = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: dashboardService.dashboardAdmin,
        retry: false,
    });
}