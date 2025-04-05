# Basic Algorithmic Trading System

A simple full-stack project that fetches real-time BTC/USDT data from Binance and displays a **Buy/Sell/Hold** trading signal using a **moving average crossover strategy**.

---

## Features

- 🔄 Real-time BTC/USDT price fetching (Binance API)
- 📊 Moving Average Crossover Strategy (5-period & 20-period)
- 🚦 Generates Buy, Sell, or Hold signals
- 🌐 Web dashboard built with React & Next.js
- 📈 Price chart visualization using Chart.js

---

## Project Structure

trading-system/ ├── backend/ # Node.js + Express API server │ ├── index.js # Server + Binance API fetch │ └── strategy.js # Trading logic (MA crossover) └── frontend/ # Next.js frontend app ├── pages/ │ └── index.js # Dashboard page └── components/ └── PriceChart.js # Price chart component


##Setup Backend (Node.js)

cd backend
npm install
node index.js

Server will run at: http://localhost:4000

##Setup Frontend (Next.js)

cd frontend
npm install
npm run dev

Frontend runs at: http://localhost:3000


