"use client";
import React from "react";
import BarChart from "./BarChart";


function StatBox({ chartColor,color1, title, color2, content, hoverColor, children }) {
  const data = [
    {
      id: title,
      label: content,
      value: Number(content),
      color: chartColor,
    },
  ];
  return (
    <div
      className={`flex justify-start items-start py-4 px-6 md:col-span-3 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 ${hoverColor} hover:scale-100`}
    >
      <div
        className={` ${color1} font-semibold text-lg  gap-4 flex flex-col justify-start items-start `}
      >
        {children}
        <h2 className={`${color1}  `}>{title}</h2>
        <h3 className={`text-[${color2}] text-base font-medium`}>{content}</h3>
      </div>
      <div className="w-[120px] h-[120px] ">
          <BarChart data={data} />
      </div>
    </div>
  );
}

export default StatBox;

