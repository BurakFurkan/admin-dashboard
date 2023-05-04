"use client";
import React from "react";
import { FaTeamspeak } from "react-icons/fa";
import TeamMessage from "./TeamMessage";

function MessageBox() {
  return (
    <div
      className={`flex flex-col justify-center items-center p-1 gap-2 md:col-span-5 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 hover:border-[#10564F] hover:scale-100`}
    >
      <div
        className={` text-[#10564F] font-semibold text-base  gap-4 flex  justify-center items-center `}
      >
        <FaTeamspeak size={30} />
        <h2 className={`text-[#10564F] `}>My Team</h2>
      </div>
      <div className="h-4/5 w-full  flex justify-center items-center">
        <TeamMessage />
      </div>
    </div>
  );
}

export default MessageBox;
