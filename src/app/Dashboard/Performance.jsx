"use client";
import React from "react";
import { Doughnut } from 'react-chartjs-2';
import generateData from "./generateData"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Performance({ chartColor,chartColor2,chartColorSoft,chartColor2Soft,color1, title, color2, content, hoverColor,goal, children }) {
  
  return (
    <div
      className={`flex  justify-between items-start py-4 px-6 md:col-span-3 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 ${hoverColor} hover:scale-100`}
    >
      <div
        className={` ${color1} font-semibold text-base  gap-4 flex flex-col justify-start items-start `}
      >
        {children}
        <h2 className={`${color1} `}>{title}</h2>
        <h3 className={`[${color2}] text-base font-medium`}>87%</h3>
      </div>
      <div className="h-4/5 w-4/5  flex justify-center items-center">
          <Doughnut  data={generateData(chartColor,chartColor2,chartColorSoft,chartColor2Soft,title,goal,content)} />
      </div>
    </div>
  );
}

export default Performance;

