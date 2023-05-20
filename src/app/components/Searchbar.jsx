"use client";
import React,{useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { detailHandler } from "../Redux/Features/clientSlice";
import { usePathname, useRouter } from "next/navigation";

function Searchbar() {
  const { AllClients } = useAppSelector((state) => state.clients);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [filteredClients,setFilteredClients]=useState([])
  const [searchWord,setSearchWord]=useState("")
  const [focused,setFocused]=useState(false)

  const handleFilter = (event) =>{
    const searchWord = event.target.value
    setSearchWord(event.target.value)
    const filteredArray = AllClients.filter((client)=>{
      const fullName = `${client.firstName}${client.lastName}`.toLowerCase();
      const reversedFullName = `${client.lastName}${client.firstName}`.toLowerCase();
      const trimmedSearchValue = searchWord.replace(/\s+/g, '').toLowerCase();
      return fullName.includes(trimmedSearchValue) || reversedFullName.includes(trimmedSearchValue); 
    })
    setFilteredClients(filteredArray)
    
  }

  function searchHandler(clientID) {
    dispatch(detailHandler(clientID));
    pathname === "/Clients" ? null : router.push("/Clients");
    setFocused(false)
  }
  const handleBlur = () => {
    setTimeout(() => {
        setFocused(false)
    }, 100);
  };

  return (
    <div className="w-full mt-1 p-1 text-black-300">
      <div className="  w-full mx-auto  relative" onFocus={()=>setFocused(true)}
          >
        <label
          className="relative z-20 bg-white-400 border-2 focus-within:border-2 focus-within:border-blue-500 rounded-md transition-[width]  duration-300 flex mx-auto w-3/4 focus-within:w-full md:w-1/4 md:focus-within:w-2/4 overflow-hidden"
          htmlFor="search"
        >
          <span className="flex items-center pl-2">
            <AiOutlineSearch />
          </span>
          <input
            className=" transition-[width] outline-none duration-300 bg-white-400 block mx-auto w-full placeholder:italic placeholder:text-sm"
            autoComplete="off"
            type="text"
            name="search"
            id="search"
            placeholder="Search Customer"
            onChange={handleFilter}
            onBlur={()=>handleBlur()}
          />
        </label>
        {searchWord!=="" && focused && (<div className="border-2 border-blue-500 rounded-md absolute top-[50%] left-[50%]  md:w-2/5 w-full max-h-[150px] -translate-x-2/4 mt-[18px] bg-white-300 p-1 flex flex-col  items-start z-30 overflow-y-scroll">
          { filteredClients.length === 0 && (<div className="flex justify-center items-center w-full">No Match</div>) }
          { filteredClients.length !=0 && (filteredClients.map((client,index) => {
            return (
              <div
                key={index}
                onClick={() => searchHandler(client.id)}
                className="p-1 border-b-2 w-full border-gray-400 text-center cursor-pointer hover:bg-gray-300"
                
              >
                {`${client.firstName} ${client.lastName}`}
              </div>
            );
          }))}
        </div>)}
      </div>
    </div>
  );
}

export default Searchbar;
