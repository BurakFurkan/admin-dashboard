import React from 'react'

function ClientInfoField({title1="",content1="",title2="",content2=""}) {

  function singleField(title,content){
    return(
      <div className='flex justify-center items-center flex-1 gap-4'>
            <h2 className='text-gray-600 flex justify-start items-end font-medium w-3/5'>{title}</h2>
            <h2 className='font-medium w-full flex justify-start items-end'>{content}</h2>
          </div>
    )
  }

  return (
    <div className='  md:text-base text-xs flex md:flex-row flex-col justify-center md:items-center items-evenly w-full  min-h-[60px] border-b-[1px] border-gray-400 '>
        {singleField(title1,content1)}
        {singleField(title2,content2)}
      </div>
  )
}

export default ClientInfoField