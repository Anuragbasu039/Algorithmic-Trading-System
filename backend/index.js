const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { calculateSignal } = require('./strategy');

const app = express();
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/klines', {
            params: {
                symbol: 'BTCUSDT',
                interval: '1m',
                limit: 50
            }
        });
        const closes = response.data.map(c => parseFloat(c[4]));
        const signal = calculateSignal(closes);
        const currentPrice = closes[closes.length - 1];
        res.json({ prices: closes, signal, currentPrice });
    } catch (err) {
        res.status(500).json({ error: 'Data fetch failed' });
    }
});

app.listen(4000, () => {
    console.log('Backend running on http://localhost:4000');
});
