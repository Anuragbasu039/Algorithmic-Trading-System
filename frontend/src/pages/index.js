import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from '../../components/PriceChart';

export default function Home() {
    const [data, setData] = useState({ prices: [], signal: 'HOLD', currentPrice: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:4000/api/data');
            setData(res.data);
        };

        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    const color = data.signal === 'BUY' ? 'green' : data.signal === 'SELL' ? 'red' : 'gray';

    return (
        <div style={{ padding: '2rem' }}>
            <h1>BTC/USDT Dashboard</h1>
            <p><strong>Current Price:</strong> ${data.currentPrice.toFixed(2)}</p>
            <p><strong>Signal:</strong> <span style={{ color }}>{data.signal}</span></p>
            <ChartComponent prices={data.prices} />
        </div>
    );
}
