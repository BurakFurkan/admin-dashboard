import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BiUserPin } from "react-icons/bi";
import { RiLinkedinLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

function Social() {
  return (
    <div className="bg-white-300 shadow-md rounded-md p-4 mt-4 gap-4 flex flex-col justify-center items-center group transition-all ease-in-out">
      <h1 className="font-semibold">You can check my other projects...</h1>
      <div className="flex justify-start items-center gap-4  bg-gradient-to-r from-green-500 to-white-300 pt-1 pr-1 rounded-md group-hover:bg-gradient-to-l group-hover:text-white-300"> 
        <Image alt="Burak Furkan TENEKECİ" src={"/noglitch.png"} width={75} height={75}/>
        <h2 className="font-medium">Burak Furkan TENEKECİ</h2>
      </div>
      <div className="flex justify-evenly items-center w-full">
        <div className="flex flex-col justify-center items-center gap-1">
          <h2>Portfolio</h2>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://bftportfolio.netlify.app"
            className="hover:border-white-300 hover:bg-green-500 hover:text-white-300 hover:scale-110 transition-all ease-in-out border-green-500 border-[1px] p-1 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center"
          >
            <BiUserPin />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h2>Github</h2>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/BurakFurkan"
            className="hover:border-white-300 hover:bg-green-500 hover:text-white-300 hover:scale-110 transition-all ease-in-out border-green-500 border-[1px] p-1 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center"
          >
            <FiGithub />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h2>Linkedin</h2>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/burak-furkan-tenekeci"
            className="hover:border-white-300 hover:bg-green-500 hover:text-white-300 hover:scale-110 transition-all ease-in-out border-green-500 border-[1px] p-1 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center"
          >
            <RiLinkedinLine />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h2>Mail</h2>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:furkan_te@hotmail.com"
            className="hover:border-white-300 hover:bg-green-500 hover:text-white-300 hover:scale-110 transition-all ease-in-out border-green-500 border-[1px] p-1 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center"
          >
            <CiMail />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Social;
