"use client";
import React, { useEffect } from "react";
import Project from "./Project";
import AddProject from "./AddProject";
import MockProjects from "../MockData/MockProjects";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchAllTeamMembers } from "../Redux/Features/teamSlice";
import { AnimationWrapper } from "../components/AnimationWrapper";

function Page() {
  const dispatch = useAppDispatch();
  const { AllTeamMembers } = useAppSelector((state) => state.team);

  useEffect(() => {
    if (!AllTeamMembers.length > 0) dispatch(fetchAllTeamMembers());
  });

  return (
    <AnimationWrapper>
      <div className="grid grid-cols-12  auto-rows-[180px] md:auto-rows-[200px] gap-3">
        {MockProjects.map((project, index) => (
          <Project key={index} AllTeamMembers={AllTeamMembers} {...project} />
        ))}
        <AddProject />
      </div>
    </AnimationWrapper>
  );
}

export default Page;
