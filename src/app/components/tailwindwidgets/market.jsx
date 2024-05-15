"use client"

import React from 'react';
import { MiniChart, TechnicalAnalysis, MarketData } from "react-ts-tradingview-widgets";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js with TypeScript</h1>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      <TechnicalAnalysis colorTheme="dark" width="100%"></TechnicalAnalysis>
      <MarketData colorTheme="dark" width="100%" height={400}></MarketData>

    </div>
  );
};

export default Home;
