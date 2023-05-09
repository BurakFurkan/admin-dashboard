"use client";
import React, { useEffect } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { deskHandler, deleteAppointment } from "../Redux/Features/teamSlice";
import {AiOutlineDelete} from "react-icons/ai";
import Avatar from "@mui/material/Avatar";

function Desk({ deskNumber }) {
  const dispatch = useAppDispatch();
  const { selectedTeamMember, desk1, desk2, desk3, desk4 } = useAppSelector(
    (state) => state.team
  );
  const deskArray = [desk1, desk2, desk3, desk4];

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: () => dropHandler(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const dropHandler = () => {
    dispatch(deskHandler(deskNumber));
  };

  useEffect(() => {}, [selectedTeamMember]);
  return (
    <div
      ref={drop}
      className={`col-span-12 md:col-span-6 w-full h-full ${isOver?"border-blue-500":"border-gray-300"}  border-[3px] border-dashed  flex flex-col justify-center items-center p-1`}
    >
      <h2 className="text-center">{`Desk ${deskNumber} - Member Count:${
        deskArray[deskNumber - 1].length
      }`}</h2>
      <ul className="flex flex-col justify-start items-center w-full h-4/5 p-1 gap-1  overflow-y-auto bg-gray-300 rounded-sm">
        {deskArray[deskNumber - 1].map((member, index) => {
          return (
            <li
              key={index}
              className="bg-white-300 rounded-md w-full text-center flex justify-between items-center p-1"
            >
              <Avatar className="border-[1px] border-gray-600" src={member.image} alt="member avatar"/>
              <p className="">{member.firstName + " " + member.lastName}</p>
              <button className="hover:bg-gray-300 p-2 rounded-md" onClick={()=>dispatch(deleteAppointment(member))} ><AiOutlineDelete className="text-red-500 text-lg "/></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Desk;
