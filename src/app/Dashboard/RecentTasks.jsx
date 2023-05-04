"use client";
import React from "react";
import Tasks from "./Tasks";


function StatBox({ color1, title, color2, content, hoverColor, children }) {
  
  return (
    <div
      className={`flex flex-col md:flex-row gap-[0.5rem] md:justify-start md:items-start justify-center items-center py-3 pl-6 pr-2 md:col-span-4 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 ${hoverColor} hover:scale-100`}
    >
      <div
        className={` ${color1} font-semibold text-base pt-4 gap-4 flex md:flex-col flex-row justify-center items-center md:justify-start md:items-start flex-1`}
      >
        {children}
        <h2 className={`${color1} `}>{title}</h2>
        <h3 className={`text-[${color2}] text-base font-medium`}>{content}</h3>
      </div>
      <div className="h-full w-full flex justify-center items-center">
          <Tasks />
      </div>
    </div>
  );
}

export default StatBox;

