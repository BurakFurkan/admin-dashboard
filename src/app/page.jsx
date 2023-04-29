import { Inter } from 'next/font/google'
import StatBox from "./Dashboard/StatBox"
import Chart from "./Dashboard/Chart"
import {MockStats,MockStatsBottom} from "./MockData/MockStats";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='grid grid-cols-12  auto-rows-[180px] md:auto-rows-[200px] gap-3 '>
    {
      MockStats.map((stat,index)=>(<StatBox key={index} {...stat} >{stat.children}</StatBox>))
    }
    <Chart hoverColor='hover:border-[#10564F]'/>
    {
      MockStatsBottom.map((stat,index)=>(<StatBox key={index} {...stat} >{stat.children}</StatBox>))
    }
   </div>
  )
}
