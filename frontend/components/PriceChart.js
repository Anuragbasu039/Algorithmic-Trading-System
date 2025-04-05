import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ChartComponent({ prices }) {
    const labels = prices.map((_, i) => i);

    const data = {
        labels,
        datasets: [
            {
                label: 'BTC/USDT Price',
                data: prices,
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            }
        ]
    };

    return (
        <div style={{ maxWidth: '700px', marginTop: '2rem' }}>
            <Line data={data} />
        </div>
    );
}
