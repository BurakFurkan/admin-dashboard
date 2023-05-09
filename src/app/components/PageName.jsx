"use client"
import React from 'react'
import { usePathname } from "next/navigation";

function PageName() {
    const pathname = usePathname();
    const Name=()=>{
        let real =pathname.substring(1)
        return (real==="")?real="Dashboard":real;
        
    }
  return (
    <h1 className='ml-2 uppercase text-lg font-semibold'>
        {Name()}
    </h1>
  )
}

export default PageName