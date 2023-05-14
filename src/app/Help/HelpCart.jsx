import React from 'react';
import {AiOutlineBook} from "react-icons/ai";

function HelpCart({title}) {
  return (
    <div className='bg-white-300 shadow-lg md:col-span-4 col-span-12 mx-8 w-4/5 text-green-500 p-1 flex flex-col justify-start items-start'>
        <h1 className='font-medium text-center w-full'>{title}</h1>
        <ul className='flex flex-col gap-1'>
            <li className='flex justify-center items-center gap-1 cursor-pointer before:transition-all before:duration-300  p-1 before:w-0 hover:before:w-full rounded-md relative before:absolute before:inset-0 before:bg-green-500 overflow-hidden group'><AiOutlineBook className='z-20 group-hover:text-white-300'/><span className='z-20 group-hover:text-white-300'>Article 1</span></li>
            <li className='flex justify-center items-center gap-1 cursor-pointer before:transition-all before:duration-300  p-1 before:w-0 hover:before:w-full rounded-md relative before:absolute before:inset-0 before:bg-green-500 overflow-hidden group'><AiOutlineBook className='z-20 group-hover:text-white-300'/><span className='z-20 group-hover:text-white-300'>Article 2</span></li>
            <li className='flex justify-center items-center gap-1 cursor-pointer before:transition-all before:duration-300  p-1 before:w-0 hover:before:w-full rounded-md relative before:absolute before:inset-0 before:bg-green-500 overflow-hidden group'><AiOutlineBook className='z-20 group-hover:text-white-300'/><span className='z-20 group-hover:text-white-300'>Article 3</span></li>
            <li className='flex justify-center items-center gap-1 cursor-pointer before:transition-all before:duration-300  p-1 before:w-0 hover:before:w-full rounded-md relative before:absolute before:inset-0 before:bg-green-500 overflow-hidden group'><AiOutlineBook className='z-20 group-hover:text-white-300'/><span className='z-20 group-hover:text-white-300'>Article 4</span></li>
            <li className='flex justify-center items-center gap-1 cursor-pointer before:transition-all before:duration-300  p-1 before:w-0 hover:before:w-full rounded-md relative before:absolute before:inset-0 before:bg-green-500 overflow-hidden group'><AiOutlineBook className='z-20 group-hover:text-white-300'/><span className='z-20 group-hover:text-white-300'>Article 5</span></li>
        </ul>
    </div>
  )
}

export default HelpCart