import React from "react";
import Avatar from "@mui/material/Avatar";
import {  useAppSelector } from "../Redux/hooks";
import ClientInfoField from "../Clients/ClientInfoField";
import {useDrag} from "react-dnd";

function MemberDetails() {
  const { selectedTeamMember, isLoading , desk1, desk2, desk3, desk4} = useAppSelector(
    (state) => state.team
  );
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item:{id:selectedTeamMember?.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  function findDesk(){
    let desk="Not Appointed";
    desk1.some((element)=>element.id===selectedTeamMember.id)?desk=1:null;
    desk2.some((element)=>element.id===selectedTeamMember.id)?desk=2:null;
    desk3.some((element)=>element.id===selectedTeamMember.id)?desk=3:null;
    desk4.some((element)=>element.id===selectedTeamMember.id)?desk=4:null;
    return desk;
  }

  return (
    <div ref={drag} className={`text-green-500 pt-2 bg-white-300 flex-1 rounded-md border-2  w-[260px] md:w-full h-max ${isDragging?"border-red-500":"border-gray-300"} flex flex-col justify-start items-start`}>
      {!Object.keys(selectedTeamMember || {})?.length > 0 && (
        <div className="flex-1 self-center flex items-center justify-center w-full h-full text-center font-semibold">Please select a team member from list to see the details.</div>
      )}
      {isLoading && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      {!isLoading && Object.keys(selectedTeamMember || {})?.length > 0 && (
        <div className="w-full h-full flex flex-col justify-start items-start pl-1">
          <h1 className="font-medium self-center text-lg">Details</h1>
          <div className="p-1 flex justify-center items-center font-semibold pl-8 gap-2">
            <Avatar
              className="border-[1px] border-gray-600"
              src={selectedTeamMember.image}
              alt="User Avatar"
            />
            <h1 className="flex justify-center items-center pt-1">
              {`${selectedTeamMember.firstName} ${selectedTeamMember.lastName} - (Drag member to a desk to appoint) `}
            </h1>
          </div>
          <ClientInfoField
            title1="Age"
            content1={selectedTeamMember.age}
            title2="Gender"
            content2={selectedTeamMember.gender}
          />
          <ClientInfoField
            title1="Username"
            content1={selectedTeamMember.username}
            title2="Password"
            content2={selectedTeamMember.password}
          />
          <ClientInfoField
            title1="Appointment Desk"
            content1={findDesk()}
            title2="E-Mail"
            content2={selectedTeamMember.email}
          />
        </div>
      )}
    </div>
  );
}

export default MemberDetails;
