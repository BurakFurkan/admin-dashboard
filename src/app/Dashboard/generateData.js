"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

function generateData(chartColor,chartColor2,chartColorSoft,chartColor2Soft,title,goal,content){
  const data = {
    labels: ["Accomplished","Goal"],
  datasets: [
    {
      label: "",
      data: [Number(content),goal],
      backgroundColor: [
        chartColorSoft,
        chartColor2Soft,
      ],
      borderColor: [
        chartColor,
        chartColor2,
      ],
      borderWidth: 1,
    },
  ],
  
};

  return data
}



export default generateData;




