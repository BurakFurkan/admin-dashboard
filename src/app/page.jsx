import StatBox from "./Dashboard/StatBox";
import Chart from "./Dashboard/Chart";
import {
  MockStats,
  MockPerformance,
  RecentTasksStat,
} from "./MockData/MockStats";
import { MAP } from "./Dashboard/MAP";
import RecentTasks from "./Dashboard/RecentTasks";
import MessageBox from "./Dashboard/MessageBox";
import Performance from "./Dashboard/Performance";

export default function Home() {
  return (
    <div className="grid grid-cols-12  auto-rows-[180px] md:auto-rows-[200px] gap-3 ">
      {MockStats.map((stat, index) => (
        <StatBox key={index} {...stat}>
          {stat.children}
        </StatBox>
      ))}
      <Chart hoverColor="hover:border-[#10564F]" />
      <MAP hoverColor="hover:border-[#10564F]" />
      <RecentTasks {...RecentTasksStat} />
      <Performance {...MockPerformance} />
      <MessageBox />
    </div>
  );
}
