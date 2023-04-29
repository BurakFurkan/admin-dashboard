import {AiOutlineMail,AiOutlineFileDone,AiOutlineUserAdd,AiOutlineLineChart} from "react-icons/ai"
import {BsListTask,BsSendCheck} from "react-icons/bs"
import {FaTeamspeak} from "react-icons/fa"

  const MockStats = [
  {
    title: "Active Tasks",
    content: "25",
    color1: "text-[#D5183A]",
    color2: "text-[#E83354]",
    hoverColor: "hover:border-[#D5183A]",
    chartColor:"hsl(349, 80%, 46%)",
    children:<BsListTask  size={30}/>
  },
  {
    title: "Finished Tasks / Month",
    content: "165",
    color1: 'text-[#63844D]',
    color2: 'text-[#91B27B]',
    hoverColor: 'hover:border-[#63844D]',
    children:<AiOutlineFileDone  size={30}/>
  },
  {
    title: "E-mails Sent / Year",
    content: "15.000",
    color1: 'text-[#736044]',
    color2: 'text-[#947C57]',
    hoverColor: 'hover:border-[#736044]',
    children:<AiOutlineMail  size={30}/>
  },
  {
    title: "New Clients / Year",
    content: "108",
    color1: 'text-[#4f6c98]',
    color2: 'text-[#7b91b2]',
    hoverColor: 'hover:border-[#4f6c98]',
    children:<AiOutlineUserAdd  size={30}/>
  },
];
  const MockStatsBottom = [
  {
    title: "Recent Tasks",
    content:"165",
    color1: "text-[#10564F]",
    color2: 'text-[#5AB967]',
    hoverColor: 'hover:border-[#10564F]',
    children:<BsSendCheck  size={30}/>
  },
  {
    title: "Performance / Month",
    content:"%87",
    color1: "text-[#10564F]",
    color2: 'text-[#5AB967]',
    hoverColor: 'hover:border-[#10564F]',
    children:<AiOutlineLineChart  size={30}/>
  },
  {
    title: "MAP",
    content:"165",
    color1: "text-[#10564F]",
    color2: 'text-[#5AB967]',
    hoverColor: 'hover:border-[#10564F]',
    children:<BsSendCheck  size={30}/>
  },
  {
    title: "My Team",
    content:"Sent Message",
    color1: "text-[#10564F]",
    color2: 'text-[#5AB967]',
    hoverColor: 'hover:border-[#10564F]',
    children:<FaTeamspeak  size={30}/>
  },
  
];

export  {MockStats,MockStatsBottom};
