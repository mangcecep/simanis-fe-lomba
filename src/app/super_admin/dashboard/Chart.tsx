import { Chart as ChartJS,  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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

const ChartComponents = ({chartData}: ChartProps) => {
    const dayNames = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
    const labels = chartData.map((item) => {
        const date = new Date(item.date)
        return dayNames[date.getDay()];
    })
    const data = {
        labels,
        datasets: [
            {
                label: 'Statistik Data Peminjaman',
                data: chartData.map((item) => item.borrowed_count),
                borderWidth: 1
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0,
                },
            },
        },
    }
  return <div style={{ height: '100%' }}><Bar data={data} options={options} /></div>
}

export default ChartComponents