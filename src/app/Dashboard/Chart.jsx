"use client"
import React from 'react'
import { Line } from 'react-chartjs-2';
import {options,data} from "./LineChart"

function Chart( {hoverColor} ) {
  return (
    <div className={`col-span-12 md:col-span-9 shadow-lg rounded-sm bg-white-500 border-2 scale-[0.98]  transition-all duration-300 ${hoverColor} hover:scale-[1.01]`}>
      <Line  options={options} data={data}/>
    </div>
  )
}

export default Chart