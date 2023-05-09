"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Notify(setModalText){
  
  var textValue="";
  
  const handleChange = (event) => {
    textValue=event.target.value;
  };

  const clickHandler = () => {
    setModalText(textValue);
    toast.dismiss();
  };

  toast.custom(
    (t) => (
      <div
        className={`bg-white-300 p-2 z-30  border-2 h-max w-max border-gray-400 shadow-md gap-2 rounded-sm relative flex flex-col justify-center items-center ${
          t.visible ? `animate-enter` : `animate-leave`
        }`}
      >
        <label className="p-1 " htmlFor="todo">
          <input
            className=" border-2 p-1 w-full h-full rounded-md border-blue-400 outline-none duration-300 bg-white-400 block mx-auto  placeholder:italic placeholder:text-sm"
            autoComplete="off"
            type="text-area"
            name="search"
            id="search"
            placeholder="Add Event"
            onChange={handleChange}
          />
        </label>
        <button
          className="p-2 rounded-md border-[1px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white-300 focus:bg-blue-600 focus:text-white-300"
          onClick={clickHandler}
        >
          Add Event
        </button>
      </div>
    ),
    {
      position: "top-center",
      duration: Infinity,
    }
  );
};

export default Notify;
