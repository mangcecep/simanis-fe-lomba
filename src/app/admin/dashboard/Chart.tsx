import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

type ChartData = {
    date: string;
    borrowed_count: number;
}

type ChartProps = {
    chartData: ChartData[];
}

const ChartAdminComponents = ({chartData}: ChartProps) => {
    const dayNames = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
    const labels = chartData.map((item) => {
        const date = new Date(item.date)
        return dayNames[date.getDay()];
    })
    const data = {
        labels,
        datasets: [
            {
                label: 'Statistik Peminjaman',
                data: chartData.map((item) => item.borrowed_count),
                borderColor: '#3c4a72',
                backgroundColor: 'rgba(60, 74, 114, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: '#3c4a72',
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            }
        }
    }
  return <div style={{ height: '100%' }}><Line data={data} options={options} /></div>
}

export default ChartAdminComponents
