"use client";
import React, { useState, useEffect } from "react";
import Time from "./Time";
import { AnimationWrapper } from "../components/AnimationWrapper";

function Timeline() {
  const [fullDate, setfullDate] = useState({
    today: 1,
    currentMonth: "",
  });

  function getDate() {
    const date = new Date();
    const allMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dayNumber = date.getDate();
    let month = date.getMonth() + 1;

    const currentMonth = allMonths[month];

    return { dayNumber, currentMonth };
  }

  useEffect(() => {
    let { dayNumber, currentMonth } = getDate();
    setfullDate({
      today: dayNumber,
      currentMonth: currentMonth,
    });
  }, [setfullDate]);

  const { today, currentMonth } = fullDate;

  function calculateStep() {
    let step;
    const todayStep = () => Math.ceil((today + 1) / 5);

    for (let today = 1; today < 30; today++) {
      step = todayStep(today);
    }
    return step;
  }

  const stepNumber = calculateStep();
  const steps = [
    "Analysis",
    "Design",
    "Implementation Or Coding",
    "Testing",
    "Deployment",
  ];

  return (
    <AnimationWrapper>
      <div className="shadow-md rounded-md h-[80vh] w-[280px] md:w-full overflow-x-scroll p-4 bg-white-300 flex flex-col justify-center items-center ">
        <h1 className="text-center text-lg font-semibold mb-6">
          Monthly Developement Schedule
        </h1>
        <Time stepNumber={stepNumber} />
        <div className="mt-6 text-lg font-semibold text-center">
          {`${currentMonth}  ${today} `}
          {<br />}
          {` ${stepNumber * 6 - today} days left until finishing ${
            steps[stepNumber]
          } step`}
        </div>
      </div>
    </AnimationWrapper>
  );
}

export default Timeline;
