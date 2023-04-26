import { Inter } from 'next/font/google'
import StatBox from "./Dashboard/StatBox"
import Chart from "./Dashboard/Chart"
import {AiOutlineMail,AiOutlineFileDone,AiOutlineUserAdd,AiOutlineLineChart} from "react-icons/ai"
import {BsListTask,BsSendCheck} from "react-icons/bs"
import {FaTeamspeak} from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='grid grid-cols-12  auto-rows-[150px] md:auto-rows-[200px] gap-3'>
    <StatBox title="E-mails Sent / Year" content="15.000"><AiOutlineMail /></StatBox>
    <StatBox title="Finished Tasks / Month" content="165" color1='text-[#10564F]' color2='text-[#5AB967]'><AiOutlineFileDone/></StatBox>
    <StatBox title="Active Tasks / Month" content="25" color1='text-[#10564F]' color2='text-[#5AB967]'><BsListTask/></StatBox>
    <StatBox title="New Clients / Year" content="108" color1='text-[#10564F]' color2='text-[#5AB967]'><AiOutlineUserAdd/></StatBox>
    <Chart />
    <StatBox title="Recent Tasks" content="165" color1='text-[#10564F]' color2='text-[#5AB967]'><BsSendCheck/></StatBox>
    <StatBox title="Performance / Month" content="%87" color1='text-[#10564F]' color2='text-[#5AB967]'><AiOutlineLineChart/></StatBox>
    <StatBox title="MAP" content="165" color1='text-[#10564F]' color2='text-[#5AB967]'/>
    <StatBox title="My Team" content="Sent Message" color1='text-[#10564F]' color2='text-[#5AB967]'><FaTeamspeak/></StatBox>
   </div>
  )
}
