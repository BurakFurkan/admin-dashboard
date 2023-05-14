"use client";
import React from "react";
import Calendar from "./Calendar";
import { AnimationWrapper } from "../components/AnimationWrapper";

function CalendarPage() {
  return (
    <AnimationWrapper>
      <div className="flex justify-center items-center w-full">
        <Calendar />
      </div>
    </AnimationWrapper>
  );
}

export default CalendarPage;
