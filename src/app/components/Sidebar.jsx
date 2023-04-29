"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { TfiCalendar } from "react-icons/tfi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const pathname = usePathname();


  return (
    <div
      className={` border-r-2 border-gray-600 min-h-screen flex justify-start items-center transition-[width] duration-300 bg-inherit ${
        isOpen ? "w-[200px] py-4" : "w-[120px]"
      }`}
    >
      <div className="flex flex-col  items-center gap-4 fixed top-[10px]  bottom-[10px]  ">
      <div className=" flex justify-start gap-4 relative w-full pl-4">
        {isOpen ? (
          <p className="text-black-500 -ml-[5px] text-xs">Administration</p>
        ) : null}
        <button
          onClick={clickHandler}
          className="absolute text-black-400 top-[1px] -right-[1px] md:-right-[26px]"
        >
          {isOpen ? (
            <TbLayoutSidebarLeftCollapse />
          ) : (
            <TbLayoutSidebarLeftExpand />
          )}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <Image
          className="rounded-[50%]"
          src={"/UserImage.jpg"}
          alt="UserImage"
          width={75}
          height={75}
        />
        {isOpen && <p className="text-black-500">Jack Philips</p>}
        {isOpen && <p className="text-darkBlue-300">Manager</p>}
      </div>
      <ul
        className={`h-3/6 font-medium flex flex-col justify-between items-center text-base ${
          isOpen ? "" : "items-center"
        }`}
      >
        <li className={` sidebar-li  ${isOpen ? "!justify-stretch " : "!justify-center"} `}>
          <Link
            className={` sidebar-li !text-sm ${isOpen ? "!justify-stretch p-3" : "!justify-center"} ${
              pathname === "/" ? "!text-white-500 bg-darkBlue-400" : ""
            }`}
            href="/"
          >
            <AiOutlineHome />
            <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </Link>
        </li>
        <p
          className={`flex justify-center items-center self-start gap-1 text-black-400 ${
            isOpen ? "text-sm" : "text-xs self-center"
          }`}
        >
          <span>Management</span>
        </p>
        <li
          className={` sidebar-li relative ${isOpen ? "!justify-start" : "!justify-center"} `}
        >
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-2 " : "!justify-center"} ${
              pathname === "/Clients" ? "!text-white-500 bg-darkBlue-400" : ""
            }`}
            href="/Clients"
          >
            <SlPeople />
            <span className={`${isOpen ? "block" : "hidden"}`}>Clients</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : "!justify-center"} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-2" : "!justify-center"} ${
              pathname === "/Team" ? "!text-white-500 bg-darkBlue-400" : ""
            }`}
            href="/Team"
          >
            <AiOutlineUsergroupAdd />
            <span className={`${isOpen ? "block" : "hidden"}`}>My Team</span>
          </Link>
        </li>
        <p
          className={`flex justify-center items-center self-start gap-1 text-black-400 ${
            isOpen ? "text-sm" : "text-xs self-center"
          }`}
        >
          <span>Tools</span>
        </p>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : "!justify-center"}`}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-2" : "!justify-center"}  ${
              pathname === "/Calendar" ? "!text-white-500 bg-darkBlue-400" : ""
            }`}
            href="/Calendar"
          >
            <TfiCalendar />
            <span className={`${isOpen ? "block" : "hidden"}`}>Calendar</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : "!justify-center"} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-2" : "!justify-center"} ${
              pathname === "/Help" ? "!text-white-500 !bg-darkBlue-400" : ""
            }`}
            href="/Help"
          >
            <BsBook />
            <span className={`${isOpen ? "block" : "hidden"}`}>Help</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : "!justify-center"} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-2" : "!justify-center"} ${
              pathname === "/FAQ" ? "!text-white-500 bg-darkBlue-400" : ""
            }`}
            href="/FAQ"
          >
            <BiHelpCircle />
            <span className={`${isOpen ? "block" : "hidden"}`}>FAQ</span>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Sidebar;
