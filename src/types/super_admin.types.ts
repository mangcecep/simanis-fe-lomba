//Dashboard Response Body
export type DashboardResponse = {
    success: boolean,
    message: string,
    data: {
        summary: {
            total_admin: number,
            total_tersedia: number,
            total_dipinjam: number
        },
        chart_statistik: [
            {
                date: string,
                borrowed_count: number
            }
        ],
        peminjaman_hari_ini: {
            date: string,
            formatted_date: string,
            items: [
                {
                    id: string,
                    nama_barang: string,
                    nama_peminjam: string,
                    kelas: string
                }
            ]
        }
    }
}

export type DashboardError = {
    success: boolean,
    message: string,
    errors: Record<string, string[]>
}