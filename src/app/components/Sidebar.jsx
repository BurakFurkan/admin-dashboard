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
  console.log(pathname);

  return (
    <div
      className={` px-1 min-h-screen flex justify-center items-center transition-[width] duration-300 bg-white-500 ${
        isOpen ? "w-[200px] p-4" : "w-[120px]"
      }`}
    >
      <div className="flex flex-col  items-center gap-4 fixed top-[10px]  bottom-[10px] ">
      <div className=" flex justify-start gap-4">
        {isOpen ? (
          <p className="text-black-400 -ml-[5px] text-xs">Administration</p>
        ) : null}
        <button
          onClick={clickHandler}
          className="absolute text-black-400 top-[1px] -right-[1px] md:-right-[6px]"
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
        {isOpen && <p className="text-black-400">Jack Philips</p>}
        {isOpen && <p className="text-darkBlue-300">Manager</p>}
      </div>
      <ul
        className={`h-3/6 flex flex-col justify-between items-center text-sm ${
          isOpen ? "" : "items-center"
        }`}
      >
        <li className={` sidebar-li ${isOpen ? "!justify-center" : ""} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""} ${
              pathname === "/" ? "!text-blue-700" : ""
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
          className={` sidebar-li relative ${isOpen ? "!justify-start" : ""} `}
        >
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""} ${
              pathname === "/Clients" ? "!text-blue-700" : ""
            }`}
            href="/Clients"
          >
            <SlPeople />
            <span className={`${isOpen ? "block" : "hidden"}`}>Clients</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : ""} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""} ${
              pathname === "/Team" ? "!text-blue-700" : ""
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
        <li className={` sidebar-li ${isOpen ? "!justify-start" : ""}`}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""}  ${
              pathname === "/Calendar" ? "!text-blue-700" : ""
            }`}
            href="/Calendar"
          >
            <TfiCalendar />
            <span className={`${isOpen ? "block" : "hidden"}`}>Calendar</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : ""} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""} ${
              pathname === "/Help" ? "!text-blue-700" : ""
            }`}
            href="/Help"
          >
            <BsBook />
            <span className={`${isOpen ? "block" : "hidden"}`}>Help</span>
          </Link>
        </li>
        <li className={` sidebar-li ${isOpen ? "!justify-start" : ""} `}>
          <Link
            className={` sidebar-li ${isOpen ? "!justify-start pl-4" : ""} ${
              pathname === "/FAQ" ? "!text-blue-700" : ""
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
