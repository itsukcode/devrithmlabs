"use client"
import React, { useEffect } from 'react';

const MarketWidget = () => {
  useEffect(() => {
    async function loadScript() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "1100",
        "height": "500",
        "symbolsGroups": [
          {
            "name": "Indices",
            "originalName": "Indices",
            "symbols": [
              {
                "name": "FOREXCOM:SPXUSD",
                "displayName": "S&P 500 Index"
              },
              {
                "name": "FOREXCOM:NSXUSD",
                "displayName": "US 100 Cash CFD"
              },
              {
                "name": "FOREXCOM:DJI",
                "displayName": "Dow Jones Industrial Average Index"
              },
              {
                "name": "INDEX:NKY",
                "displayName": "Nikkei 225"
              },
              {
                "name": "INDEX:DEU40",
                "displayName": "DAX Index"
              },
              {
                "name": "FOREXCOM:UKXGBP",
                "displayName": "FTSE 100 Index"
              }
            ]
          },
          {
            "name": "Forex",
            "originalName": "Forex",
            "symbols": [
              {
                "name": "FX:EURUSD",
                "displayName": "EUR to USD"
              },
              {
                "name": "FX:GBPUSD",
                "displayName": "GBP to USD"
              },
              {
                "name": "FX:USDJPY",
                "displayName": "USD to JPY"
              },
              {
                "name": "FX:USDCHF",
                "displayName": "USD to CHF"
              },
              {
                "name": "FX:AUDUSD",
                "displayName": "AUD to USD"
              },
              {
                "name": "FX:USDCAD",
                "displayName": "USD to CAD"
              }
            ]
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en",
        "backgroundColor": "#ffffff"
      });
      const targetElement = document.querySelector('.tradingview-widget-container__widget');

      if (targetElement) {
        targetElement.appendChild(script);
      } else {
        console.error("Target element not found!");
      }
    };

    return () => {
      loadScript();
    };
  }, []);

  return (
    <>
      <h1 className='font-semibold text-xl pb-5="true"'>SHARE MARKET</h1>
      <div className="tradingview-widget-container">

        <div className="tradingview-widget-container__widget" ></div>
      </div>
      </>
  );
};

export default MarketWidget;
