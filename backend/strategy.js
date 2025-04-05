function movingAverage(data, period) {
    const slice = data.slice(-period);
    const sum = slice.reduce((a, b) => a + b, 0);
    return sum / slice.length;
}

function calculateSignal(prices) {
    if (prices.length < 21) return 'HOLD';

    const shortMA = movingAverage(prices, 5);
    const longMA = movingAverage(prices, 20);
    const prevShort = movingAverage(prices.slice(0, -1), 5);
    const prevLong = movingAverage(prices.slice(0, -1), 20);

    if (prevShort < prevLong && shortMA > longMA) return 'BUY';
    if (prevShort > prevLong && shortMA < longMA) return 'SELL';
    return 'HOLD';
}

module.exports = { calculateSignal };
