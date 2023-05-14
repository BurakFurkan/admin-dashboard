"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  const [searchWord, setSearchWord] = useState("");
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 100);
  };

  return (
    <div className="w-full mt-1 p-1 text-black-300 ">
      <div
        className="  w-full mx-auto  relative "
        onFocus={() => setFocused(true)}
      >
        <label
          className=" relative z-20 bg-white-400 border-2 focus-within:border-2 focus-within:border-blue-500 rounded-md transition-[width]  duration-300 flex mx-auto w-3/4 focus-within:w-full md:w-1/5 md:focus-within:w-2/5 overflow-hidden"
          htmlFor="helpSearch"
        >
          <span className="flex items-center pl-2">
            <AiOutlineSearch />
          </span>
          <input
            className=" transition-[width] outline-none duration-300 bg-white-400 block mx-auto w-full placeholder:italic placeholder:text-sm"
            autoComplete="off"
            type="text"
            name="helpSearch"
            id="helpSearch"
            placeholder="Search Help"
            onBlur={() => handleBlur()}
          />
        </label>
        {searchWord !== "" && focused && (
          <div className="border-2 border-blue-500 rounded-md absolute top-[50%] left-[50%]  md:w-2/5 w-full max-h-[150px] -translate-x-2/4 mt-[18px] bg-white-300 p-1 flex flex-col  items-start z-30 overflow-y-scroll"></div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
