"use client";
import TeamTable from "./TeamTable";
import MemberDetails from "./MemberDetails";
import Desk from "./Desk";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AnimationWrapper } from "../components/AnimationWrapper";

export default function Team() {
  return (
    <AnimationWrapper>
      <div className=" w-[270px] md:w-full flex flex-col md:flex-row justify-between items-start gap-4 ">
        <div className="w-[270px] md:w-[400px] h-[90vh] bg-white-300  flex-1">
          <TeamTable />
        </div>
        <DndProvider backend={HTML5Backend}>
          <div className="flex-1 flex flex-col justify-center items-center bg-white-300 border-[1px] border-gray-400 rounded-md">
            <MemberDetails />
            <div className="grid grid-cols-12  auto-rows-[150px] gap-3 w-full h-full p-1">
              <Desk deskNumber={1} />
              <Desk deskNumber={2} />
              <Desk deskNumber={3} />
              <Desk deskNumber={4} />
            </div>
          </div>
        </DndProvider>
      </div>
    </AnimationWrapper>
  );
}
