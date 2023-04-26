import React from "react";

function StatBox({title,content,color1="text-[red]",color2="#7b91b2", iconColor="[&>svg][red]" ,children}) {
  return (
    <div className={` ${iconColor} py-4 px-6 md:col-span-3 col-span-12 shadow-lg rounded-sm gap-4 flex flex-col justify-start items-start bg-white-300 border-2  hover:border-blue-400`}>
      {children}
      <h2 className={`${color1}`}>{title}</h2>
      <h3 className={`text-[${color2}]`}>{content}</h3>
    </div>
  );
}

export default StatBox;
