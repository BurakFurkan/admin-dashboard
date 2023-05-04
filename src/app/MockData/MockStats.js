import {
  AiOutlineMail,
  AiOutlineFileDone,
  AiOutlineUserAdd,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BsListTask, BsSendCheck } from "react-icons/bs";

const MockStats = [
  {
    title: "Active Tasks",
    content: "25",
    color1: "text-[#D5183A]",
    color2: "text-[#E83354]",
    hoverColor: "hover:border-[#D5183A]",
    chartColor: "rgba(213, 24, 58, 1)",
    chartColorSoft: "rgba(213, 24, 58, 0.5)",
    chartColor2: "rgba(232, 51, 84, 1)",
    chartColor2Soft: "rgba(232, 51, 84, 0.3)",
    goal: 5,
    children: <BsListTask size={30} />,
  },
  {
    title: "Finished Tasks / Month",
    content: "165",
    color1: "text-[#63844D]",
    color2: "text-[#91B27B]",
    hoverColor: "hover:border-[#63844D]",
    chartColor: "rgba(99,132,77,1.0)",
    chartColorSoft: "rgba(99,132,77,0.5)",
    chartColor2: "rgba(145,178,123,1.0)",
    chartColor2Soft: "rgba(145,178,123,0.3)",
    goal: 55,
    children: <AiOutlineFileDone size={30} />,
  },
  {
    title: "E-mails Sent / Year",
    content: "15000",
    color1: "text-[#736044]",
    color2: "text-[#947C57]",
    hoverColor: "hover:border-[#736044]",
    chartColor: "rgba(115,96,68,1.0)",
    chartColorSoft: "rgba(115,96,68,0.5)",
    chartColor2: "rgba(148,124,87,1.0)",
    chartColor2Soft: "rgba(148,124,87,0.3)",
    goal: 2000,
    children: <AiOutlineMail size={30} />,
  },
  {
    title: "New Clients / Year",
    content: "108",
    color1: "text-[#4f6c98]",
    color2: "text-[#7b91b2]",
    hoverColor: "hover:border-[#4f6c98]",
    chartColor: "rgba(79,108,152,1.0)",
    chartColorSoft: "rgba(79,108,152,0.5)",
    chartColor2: "rgba(123,145,178,1.0)",
    chartColor2Soft: "rgba(123,145,178,0.3)",
    goal: 50,
    children: <AiOutlineUserAdd size={30} />,
  },
];

const RecentTasksStat = {
  title: "Recent Tasks",
  content: "10",
  color1: "text-[#10564F]",
  color2: "text-[#5AB967]",
  hoverColor: "hover:border-[#10564F]",
  chartColor: "rgba(16,86,79,1.0)",
  chartColorSoft: "rgba(16,86,79,0.5)",
  chartColor2: "rgba(90,185,103,1.0)",
  chartColor2Soft: "rgba(90,185,103,0.5)",
  goal: 13,
  children: <BsSendCheck size={30} />,
};

const MockPerformance = {
  title: "Performance / Month",
  content: "87",
  color1: "text-[#10564F]",
  color2: "text-[#5AB967]",
  hoverColor: "hover:border-[#10564F]",
  chartColor: "rgba(16,86,79,1.0)",
  chartColorSoft: "rgba(16,86,79,0.5)",
  chartColor2: "rgba(90,185,103,1.0)",
  chartColor2Soft: "rgba(90,185,103,0.5)",
  goal: 13,
  children: <AiOutlineLineChart size={30} />,
};

export { MockStats, MockPerformance, RecentTasksStat };
