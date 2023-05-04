"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Customer Count"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["TR",1000]
];

export const options = {
    colorAxis: { colors: ["#63844D", "#7b91b2", "#e46d5f"] },
    backgroundColor: "#fafbf9",
    datalessRegionColor: "#f0f3f1",
    defaultColor: "#f5f5f5",
  };

export function MAP(hoverColor) {
  return (
    <div
      className={` py-4 px-6 md:col-span-3 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 ${hoverColor} hover:scale-100`}
    >
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
