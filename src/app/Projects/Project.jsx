"use client";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { VscCalendar } from "react-icons/vsc";

function Project({ AllTeamMembers,title,priority,description,department,deadline,border,bg,text,members }) {
  return (
    <div className="  p-2 md:p-3 cursor-pointer flex flex-col justify-between items-start  md:col-span-3 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 hover:border-green-300 hover:scale-100">
      <div className="flex justify-between items-center w-full ">
        <h1 className="font-medium text-sm md:text-base">{title}</h1>
        <div className="text-xs">
          <span className="text-gray-600">Priority: </span>
          <span className={`${(priority==="High")?("text-red-600 border-red-600 bg-red-100"):("text-gray-700 border-gray-700 bg-gray-300")} border-[1px] p-[3px] rounded-full`}>
            {priority}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm">{description}</div>
        <div className="flex justify-start items-center">
            <span className="text-gray-600 text-sm">Members: </span>
          <AvatarGroup>
            {AllTeamMembers.slice(0, 3).map((item) => {
              return (
                <Avatar
                  sx={{
                    backgroundColor: "#aeafb0",
                    borderColor: "#10564f",
                    height: "32px",
                    width: "32px",
                  }}
                  key={item.id}
                  alt={item.firstName}
                  src={item.image}
                  sizes="sm"
                />
              );
            })}
            <Avatar
              sx={{
                backgroundColor: "#aeafb0",
                color: "#10564f",
                height: "32px",
                width: "32px",
              }}
            >
              {members}
            </Avatar>
          </AvatarGroup>
        </div>
        <div className="flex justify-start items-center gap-2">
            <span className="text-gray-600 text-xs md:text-sm">Department:</span>
          <span className={`px-[6px] py-[2px] text-xs ${border} ${bg} ${text} rounded-full`}>
            {department}
          </span>
        </div>
      </div>
      <div className="text-gray-600 text-sm w-full flex justify-start items-center gap-2">
        <span className="flex justify-center items-center gap-2">
          <VscCalendar /> <p>Deadline:</p>{" "}
        </span>
        <span>{deadline} </span>
      </div>
    </div>
  );
}

export default Project;
