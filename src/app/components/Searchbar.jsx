"use client"
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  return (
    <div className="w-full mt-1 p-1 text-black-300">
      <div className="  w-full mx-auto relative ">
        <label
          className="relative bg-white-400 border-2 focus-within:border-2 focus-within:border-blue-500 rounded-md transition-[width]  duration-300 flex mx-auto w-3/4 focus-within:w-full md:w-1/4 md:focus-within:w-2/4 overflow-hidden"
          htmlFor="search"
        >
          <span class="flex items-center pl-2">
            <AiOutlineSearch />
          </span>
          <input
            className=" transition-[width] outline-none duration-300 bg-white-400 block mx-auto w-full placeholder:italic placeholder:text-sm"
            autoComplete="off"
            type="text"
            name="search"
            id="search"
            placeholder="Search Customer"
          />
        </label>
      </div>
    </div>
  );
}

export default Searchbar;
