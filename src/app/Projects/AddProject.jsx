import React from 'react';
import {MdOutlineNoteAdd} from "react-icons/md";

function AddProject() {
  return (
    <div className="p-2 gap-4 cursor-pointer text-yellow-600 flex flex-col justify-center items-center md:col-span-3 col-span-12 shadow-lg rounded-sm bg-white-300 border-2 scale-95 transition-all duration-300 hover:border-yellow-500 hover:scale-100">
        <MdOutlineNoteAdd className='w-[35px] h-[35px]'/>
        <h1>Add New Project</h1>
    </div>
  )
}

export default AddProject