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

const ChartComponents = () => {
    
    const data = {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        datasets: [
            {
                label: 'Statistik Data Peminjaman',
                data: [20, 14, 10, 5, 2, 30, 28, 7],
                borderWidth: 1
            }
        ]
    }
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }
  return <Bar data={data} options={options} />
}

export default ChartComponents