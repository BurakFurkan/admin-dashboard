import React from "react";
import HelpCart from "./HelpCart";
import HelpSearch from "./HelpSearch";
import { AnimationWrapper } from "../components/AnimationWrapper";

function Help() {
  return (
    <AnimationWrapper>
      <div className="flex flex-col justify-center items-center w-full h-full pr-2 ">
        <div className="bg-greenBg  h-[300px] text-white-300 bg-[length:100%_70%] bg-no-repeat bg-top p-2 w-full">
          <div className="flex flex-col justify-start items-center gap-4 mb-4">
            <h1 className="text-lg font-semibold uppercase">Support Center</h1>
            <div className="w-full ">
              <HelpSearch />
            </div>
            <p className="text-sm text-gray-500">
              Search for Help or Find Quickly with Documentations
            </p>
          </div>
          <div className="grid grid-cols-12  auto-rows-[1fr] md:auto-rows-[1fr] gap-3 place-content-around ">
            <HelpCart title={"IT"} />
            <HelpCart title={"Finance Department"} />
            <HelpCart title={"HR"} />
            <HelpCart title={"Sales Department"} />
            <HelpCart title={"Purchase Department"} />
            <HelpCart title={"Operations"} />
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
}

export default Help;
