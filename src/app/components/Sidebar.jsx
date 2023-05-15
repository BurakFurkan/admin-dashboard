"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { TfiCalendar } from "react-icons/tfi";
import { BiHelpCircle } from "react-icons/bi";
import { BsBook, BsClipboardCheck } from "react-icons/bs";
import { RxRulerHorizontal } from "react-icons/rx";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandler() {
    setIsOpen(!isOpen);
  }

  const pathname = usePathname();
  const managePaths = [
    {
      name: "Clients",
      icon: <SlPeople />,
    },
    {
      name: "Team",
      icon: <AiOutlineUsergroupAdd />,
    },
    {
      name: "Projects",
      icon: <BsClipboardCheck />,
    },
  ];
  const toolsPaths = [
    {
      name: "Timeline",
      icon: <RxRulerHorizontal />,
    },
    {
      name: "Calendar",
      icon: <TfiCalendar />,
    },
    {
      name: "Help",
      icon: <BsBook />,
    },
    {
      name: "FAQ",
      icon: <BiHelpCircle />,
    },
  ];

  return (
    <div
      className={` border-r-2 border-gray-600 relative h-min flex justify-start items-center transition-[width] duration-300 bg-white-300 ${
        isOpen ? "w-[180px] " : "w-[120px]"
      }`}
    >
      <div className="flex flex-col justify-start items-center gap-4 fixed top-0 h-full bottom-0  bg-white-300 border-r-2 border-gray-600 transition-[width] duration-300">
        <div className="flex justify-center items-center relative w-full transition-[width] duration-300 py-1 ">
          {isOpen && (
            <p className="text-black-500 pl-1 text-[10px] md:text-sm">Administration</p>
          )}
          <button
            onClick={clickHandler}
            className=" text-black-400 "
          >
            {isOpen ? (
              <TbLayoutSidebarLeftCollapse />
            ) : (
              <TbLayoutSidebarLeftExpand />
            )}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 relative">
          <Image
            className="rounded-[50%]"
            src={"/UserImage.jpg"}
            alt="UserImage"
            width={75}
            height={75}
          />
          {isOpen && <p className="text-black-500">Jack Philips</p>}
          {isOpen && <p className="text-green-500">Manager</p>}
        </div>
        <ul
          className={`h-3/6 w-full flex flex-col justify-start items-start gap-1`}
        >
          <li
            className={`sidebar-li ${
              pathname === "/" ? "!text-white-500 !bg-green-400" : ""
            }`}
          >
            <Link
              href="/"
              className={`p-2 gap-1 flex ${
                isOpen ? "flex-row" : "flex-col"
              } justify-start items-center`}
            >
              <AiOutlineHome />
              <span className="text-xs">Dashboard</span>
            </Link>
          </li>
          <span className="text-xs border-b-[1px] border-t-[1px] border-green-500 w-full text-center">
            Management
          </span>
          {managePaths.map((path) => (
            <li
              key={path.name}
              className={`sidebar-li ${
                pathname === `/${path.name}`
                  ? "!text-white-500 !bg-green-400"
                  : ""
              }`}
            >
              <Link
                href={`/${path.name}`}
                className={`p-2 gap-1 flex ${
                  isOpen ? "flex-row" : "flex-col"
                } justify-start items-center`}
              >
                {path.icon}
                <span className="text-xs">{path.name}</span>
              </Link>
            </li>
          ))}
          <span className="text-xs border-b-[1px] border-t-[1px] border-green-500 w-full text-center">
            Tools
          </span>
          {toolsPaths.map((path) => (
            <li
              key={path.name}
              className={`sidebar-li ${
                pathname === `/${path.name}`
                  ? "!text-white-500 !bg-green-400"
                  : ""
              }`}
            >
              <Link
                href={`/${path.name}`}
                className={`p-2 gap-1 flex ${
                  isOpen ? "flex-row" : "flex-col"
                } justify-start items-center`}
              >
                {path.icon}
                <span className="text-xs">{path.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
